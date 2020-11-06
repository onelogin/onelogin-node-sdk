import { expect, assert } from 'chai'
const nock = require('nock')
import * as crypto from 'crypto'

import { OneLoginHTTPClient, Region } from '../../lib/onelogin_http_client'
import { AxiosClient } from '../../lib/axios_client'

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

describe('onelogin client configuration', () => {
  it('configures the onelogin http client correctly', () => {
    clientConfigs.forEach(clientConfig => {
      let client = new OneLoginHTTPClient(clientConfig, new AxiosClient())
      expect(client.baseURL).to.equal('https://api.us.onelogin.com')
      expect(client.clientCredential).to.equal(basicCredential)
      expect(client.client).to.exist
    });
  })
  it('raises an error if client id is missing', () => {
    invalidClientConfigs.forEach(clientConfig => {
      expect(() => new OneLoginHTTPClient(clientConfig, new AxiosClient()) )
        .to.throw()
    })
  })
})

describe('getAccessToken', () => {
  it('gets access token', () => {
    nock('https://api.us.onelogin.com')
      .post('/auth/oauth2/v2/token')
      .reply(200, _tokenInfo)

    let client = new OneLoginHTTPClient(configOnlyRegion, new AxiosClient())

    client.getAccessToken().then(() => {
      expect(client.accessToken).to.equal(_tokenInfo.access_token)
      expect(client.accessTokenExpiry).to.exist
    })
  })

  it('returns a memoized access token if the token is still valid', async () => {
    nock('https://api.us.onelogin.com')
      .post('/auth/oauth2/v2/token')
      .reply(200, _tokenInfo)

    let client = new OneLoginHTTPClient(configOnlyRegion, new AxiosClient())

    await client.getAccessToken()
    await client.getAccessToken()
    expect(client.accessToken).to.equal(_tokenInfo.access_token)
    expect(client.accessTokenExpiry).to.exist
  })

  it('refreshes access token', async () => {
    nock('https://api.us.onelogin.com')
      .post('/auth/oauth2/v2/token')
      .reply(200, _expiredTokenInfo)

    let client = new OneLoginHTTPClient(configOnlyRegion, new AxiosClient())

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

    let client = new OneLoginHTTPClient(configOnlyRegion, new AxiosClient())

    client.getAccessToken().then(() => {
      expect(client.accessToken).to.equal(undefined)
      expect(client.accessTokenExpiry).to.not.exist
    })
  })
})
