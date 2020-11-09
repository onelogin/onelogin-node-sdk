import { expect, assert } from 'chai'
const nock = require('nock')
import * as crypto from 'crypto'

import { OneLoginHTTPClient, Region } from '../../lib/http_clients/onelogin_http_client'
import { AxiosClientAdapter } from '../../lib/http_clients/client_adapters/axios_client_adapter'

let region: Region = 'us'
let timeout = 3000
let baseURL = 'api.us.onelogin.com'
let clientID = "cl13n71D"
let clientSecret = "cl13n7s3cr37"
let basicCredential = "Y2wxM243MUQ6Y2wxM243czNjcjM3"

let configOnlyRegion = {clientID, clientSecret, region, timeout}
let configOnlyBaseURL = {clientID, clientSecret, baseURL, timeout}
let configRegionAndBaseURL = {clientID, clientSecret, region, baseURL, timeout}

let configProtocolURL = {
  region, baseURL: `https://${baseURL}`,
  clientID,
  clientSecret,
  timeout
}

let clientConfigs = [
  configOnlyRegion,
  configOnlyBaseURL,
  configProtocolURL,
  configRegionAndBaseURL
]

let configMissingID = {clientID: "", clientSecret, region, timeout}
let configMissingSecret = {clientID, clientSecret: "", region, timeout}
let configMissingRegionAndURL = {clientID, clientSecret, baseURL: "", timeout}

let invalidClientConfigs = [
  configMissingID,
  configMissingSecret,
  configMissingRegionAndURL
]

let _tokenInfo = {
  access_token: "valid token",
  created_at: new Date().toISOString(),
  expires_in: 36000,
  refresh_token: crypto.randomBytes(32).toString('hex'),
  token_type: 'bearer',
  account_id: 111111
}

let _expiredTokenInfo = {
  access_token: "expired token",
  created_at: new Date("1975-11-06T03:53:41.981Z").toISOString(),
  expires_in: 36000,
  refresh_token: crypto.randomBytes(32).toString('hex'),
  token_type: 'bearer',
  account_id: 111111
}

let _appInfo = {
  name: "some app",
  connector_id: 1234,
  description: "For test"
}

let _badRequest = {
  status: 400,
  error: "BadRequestError",
  description: "Invalid id(s): 1234"
}

describe('onelogin client configuration', () => {
  it('configures the onelogin http client correctly', () => {
    clientConfigs.forEach(clientConfig => {
      let client = new OneLoginHTTPClient(clientConfig, new AxiosClientAdapter())
      expect(client.baseURL).to.equal('https://api.us.onelogin.com')
      expect(client.clientCredential).to.equal(basicCredential)
      expect(client.client).to.exist
    });
  })
  it('raises an error if client id is missing', () => {
    invalidClientConfigs.forEach(clientConfig => {
      expect(() => new OneLoginHTTPClient(clientConfig, new AxiosClientAdapter()) )
        .to.throw()
    })
  })
})

describe('getAccessToken', () => {
  it('gets access token', () => {
    nock('https://api.us.onelogin.com')
      .post('/auth/oauth2/v2/token')
      .reply(200, _tokenInfo)

    let client = new OneLoginHTTPClient(configOnlyRegion, new AxiosClientAdapter())

    client.getAccessToken().then(() => {
      expect(client.accessToken).to.equal(_tokenInfo.access_token)
      expect(client.accessTokenExpiry).to.exist
    })
  })

  it('returns a memoized access token if the token is still valid', async () => {
    nock('https://api.us.onelogin.com')
      .post('/auth/oauth2/v2/token')
      .reply(200, _tokenInfo)

    let client = new OneLoginHTTPClient(configOnlyRegion, new AxiosClientAdapter())

    await client.getAccessToken()
    await client.getAccessToken()
    expect(client.accessToken).to.equal(_tokenInfo.access_token)
    expect(client.accessTokenExpiry).to.exist
  })

  it('refreshes access token', async () => {
    nock('https://api.us.onelogin.com')
      .post('/auth/oauth2/v2/token')
      .reply(200, _expiredTokenInfo)

    let client = new OneLoginHTTPClient(configOnlyRegion, new AxiosClientAdapter())

    await client.getAccessToken()
    assert.equal(client.accessToken, _expiredTokenInfo.access_token)

    nock('https://api.us.onelogin.com')
      .post('/auth/oauth2/v2/token')
      .reply(200, _tokenInfo)

    await client.getAccessToken()
    assert.equal(client.accessToken, _tokenInfo.access_token)
  })

  it('raises an error if OneLogin is down', () => {
    nock('https://api.us.onelogin.com')
      .post('/auth/oauth2/v2/token')
      .reply(500, {})

    let client = new OneLoginHTTPClient(configOnlyRegion, new AxiosClientAdapter())

    client.getAccessToken().then(() => {
      expect(client.accessToken).to.equal(undefined)
      expect(client.accessTokenExpiry).to.not.exist
    })
  })
})

describe('Do', () => {
  it('executes a successful request', async () => {
    nock('https://api.us.onelogin.com')
      .post('/auth/oauth2/v2/token')
      .reply(200, _tokenInfo)

    nock('https://api.us.onelogin.com')
      .post('/api/2/apps')
      .reply(200, _appInfo)

    let client = new OneLoginHTTPClient(configOnlyRegion, new AxiosClientAdapter())
    let response = await client.Do({ url: "/api/2/apps", method: "POST", data: _appInfo })
    expect(response.status).to.eql(200)
    expect(response.data).to.eql(_appInfo)
  })

  it('handles a 4xx or 5xx response', async () => {
    nock('https://api.us.onelogin.com')
      .post('/auth/oauth2/v2/token')
      .reply(200, _tokenInfo)

    nock('https://api.us.onelogin.com')
      .post('/api/2/apps')
      .reply(400, _badRequest)

    let client = new OneLoginHTTPClient(configOnlyRegion, new AxiosClientAdapter())
    let response = await client.Do({ url: "/api/2/apps", method: "POST", data: _appInfo })
    expect(response.status).to.equal(400)
  })
})
