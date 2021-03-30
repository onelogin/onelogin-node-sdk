import { expect } from '../main.test'
import { assert } from 'chai'
const nock = require('nock')
import * as crypto from 'crypto'

import { BlankHTTPClient } from '../../lib/http_clients/blank_http_client'
import AxiosClientAdapter from '../../lib/http_clients/client_adapters/axios_client_adapter'

let timeout = 3000
let baseURL = 'some_endpoint.com'
let endpoint = "/api/2/responses"
let url = "https://some_endpoint.com/api/2/responses"

let config= {timeout}

let configProtocolURL = { baseURL: `https://${baseURL}`, timeout }

let clientConfigs = [ configProtocolURL ]

let _someResponse = {
  name: "some name",
  number: 1234,
  description: "For test"
}

let _badRequest = {
  status: 400,
  error: "BadRequestError",
  description: "Invalid id(s): 1234"
}

describe('BlankHTTPClient Do', () => {
  beforeEach(() => {
    if (!nock.isActive()) {
      nock.activate();
    }
  });
  afterEach(() => {
    nock.restore();
    nock.cleanAll();
  });
  it('executes a successful request', async () => {
    nock('https://some_endpoint.com')
      .get(endpoint)
      .reply(200, _someResponse)

    let client = new BlankHTTPClient(config, new AxiosClientAdapter())
    let response = await client.Do({ url, method: "get" })
    expect(response.status).to.eql(200)
    expect(response.data).to.eql(_someResponse)
  })

  it('handles a 4xx or 5xx response', async () => {
    nock('https://some_endpoint.com')
      .get(endpoint)
      .reply(400, _badRequest)

    let client = new BlankHTTPClient(config, new AxiosClientAdapter())
    expect( client.Do({ url, method: "get" }) ).to.eventually.throw()
  })
})
