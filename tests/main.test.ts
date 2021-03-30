import { HTTPClient, HTTPRequest, HTTPResponse } from '../lib/http_clients/interface'
import { RepositoryEntity, HTTPRepositoryEntity } from '../lib/repositories/interface'

import * as chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

export const expect = chai.expect

export class GoodClient implements HTTPClient {
  mockResponse: object
  hits: number
  maxPasses: number

  constructor(mockResponse?: object, hits = 1) {
    this.mockResponse = mockResponse
    this.hits = hits
  }

  Do = async (request: HTTPRequest): Promise<HTTPResponse> => {
    let response = {
      data: this.mockResponse || (0 < this.hits ? {name: "stuff", id: 123} : [{name: "other_stuff", id: 345}]),
      status: 200,
      statusText: "ok",
      headers: 0 < this.hits ? {"After-Cursor": "asdf"} : {}
    }
    this.hits--
    return response
  }
}

export class BadClient implements HTTPClient {
  Do = async (request: HTTPRequest): Promise<HTTPResponse> => {
    return {  data: {message: "uh oh!"}, status: 500, statusText: "is down", headers: {} }
  }
}

export class GoodTestRepository {
  mockData: object[]

  constructor(mockData: object[]){
    this.mockData = mockData
  }

  Query = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return request.data ? { data: [ this.mockData[0] ] } : { data: this.mockData }
  }

  ReadResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: this.mockData[request.id as number] }
  }

  WriteResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: {...request.data, id: 1} } // add id 1 if create or just use existing id if update
  }

  DestroyResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: {} }
  }
}

export class BadTestRepository {
  Query = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: [], error: "Its Borked" } // Didnt find any or an error happened
  }

  ReadResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: null, error: "Its Borked" } // no response or an error
  }

  WriteResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: null, error: "Its Borked" } // no response or an error
  }

  DestroyResource = async (request: RepositoryEntity): Promise<RepositoryEntity | HTTPRepositoryEntity> => {
    return { data: null, error: "Its Borked" } // no response or an error
  }
}
