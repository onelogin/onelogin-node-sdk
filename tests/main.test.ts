import { HTTPClient, HTTPRequest, HTTPResponse } from '../lib/http_clients/interface'

import * as chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

export const expect = chai.expect

export class GoodClient implements HTTPClient {
  mockResponse: object
  passes: number
  maxPasses: number

  constructor(mockResponse?: object, passes = 1) {
    this.mockResponse = mockResponse
    this.passes = passes
  }

  Do = async (request: HTTPRequest): Promise<HTTPResponse> => {
    let response = {
      data: this.mockResponse || (0 < this.passes ? {name: "stuff", id: 123} : [{name: "other_stuff", id: 345}]),
      status: 200,
      statusText: "ok",
      headers: 0 < this.passes ? {"After-Cursor": "asdf"} : {}
    }
    this.passes--
    return response
  }
}

export class BadClient implements HTTPClient {
  Do = async (request: HTTPRequest): Promise<HTTPResponse> => {
    return {  data: {message: "uh oh!"}, status: 500, statusText: "is down", headers: {} }
  }
}
