/**
  BlankHTTPClient
  @module BlankHTTPClient
  @describe Manages authentication and requests to APIs with no configuration
*/

import { HTTPRequest, HTTPResponse, HTTPClient } from './interface'
import HTTPClientAdapter from './client_adapters/interface'

/**
  BlankClientConfig
  @describe The required information for establishing HTTP connections to Blank APIs
*/
export interface BlankClientConfig { timeout: number }

export class BlankHTTPClient implements HTTPClient {
  client: HTTPClientAdapter

  /**
    Initializes Blank HTTP connection and authentication information
    @constructor
    @param {BlankClientConfig} config - The configuration information used to initialize the Blank client
    @param {HTTPClientAdapter} httpClient - The HTTP client that will facilitate HTTP requests (e.g. axios, https, etc)
  */
  constructor(config: BlankClientConfig, httpClient: HTTPClientAdapter) {
    this.client = httpClient

    this.client.Configure({
      timeout: config.timeout || 3000,
      headers: {
        common: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Content-Type": "application/json",
          Pragma: "no-cache",
          Accept: "application/json",
        }
      }
    })
  }

  /**
    Executes the HTTP Request
    @async
    @param {HTTPRequest} request - The request assembled by the using class passed to HTTP client configured for Blank
    @returns {Promise<object>} - The resulting data from the HTTP lookup
  */
  Do = async (request: HTTPRequest): Promise<HTTPResponse> | never => {
    try {
      if(request.bearerToken)
        request.headers = { 'Authorization': `Bearer ${request.bearerToken}` }

      let resourceResponse = await this.client.Do(request)
      let { data, headers, status, statusText } = resourceResponse
      if( !status )
        throw new Error ( "no response returned from remote" )
      return { data, headers, status, statusText }
    } catch( err ) {
      err.message = "\nUnable to carry out request " + err.message
      throw err
    }
  }

}
