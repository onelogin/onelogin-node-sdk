/**
  OneLoginHTTPClient
  @module OneLoginHTTPClientAdapter
  @describe Manages authentication and requests to OneLogin APIs
*/

import { HTTPRequest, HTTPResponse, HTTPClient, Method, HTTPClientConfig } from './interface'
import HTTPClientAdapter from './client_adapters/interface'

const SECONDS_PER_HOUR = 3600
export type Region = | 'us' | 'US' | 'eu' | 'EU'

/**
  OneLoginClientConfig
  @describe The required information for establishing HTTP connections to OneLogin APIs
*/
export interface OneLoginClientConfig extends HTTPClientConfig {
  clientID: string;
  clientSecret: string;
  region?: Region;
}

export class OneLoginHTTPClient implements HTTPClient {
  baseURL: string
  accessToken: string
  clientID: string
  clientSecret: string
  clientCredential: string
  accessTokenExpiry: Date
  client: HTTPClientAdapter

  /**
    Initializes OneLogin HTTP connection and authentication information
    @constructor
    @param {OneLoginClientConfig} config - The configuration information used to initialize the OneLogin client
    @param {HTTPClientAdapter} httpClient - The HTTP client that will facilitate HTTP requests (e.g. axios, https, etc)
  */
  constructor(config: OneLoginClientConfig, httpClient: HTTPClientAdapter) {
    this.clientID = config.clientID
    this.clientSecret = config.clientSecret
    this.client = httpClient

    this.baseURL = config.baseURL || `https://api.${config.region}.onelogin.com`
    this.baseURL = this.baseURL.split("://")[0] === "https" ?
      this.baseURL : `https://${this.baseURL}`

    if(!config.region && !config.baseURL)
      throw new Error("Either region or baseURL are required")

    this.client.Configure({
      baseURL: this.baseURL,
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
    @param {HTTPRequest} request - The request assembled by the using class passed to HTTP client configured for OneLogin
    @returns {Promise<HTTPResponse>} - The resulting data from the HTTP lookup
  */
  Do = async (request: HTTPRequest): Promise<HTTPResponse> | never => {
    try {
      if(this.clientID && this.clientSecret) {
        let accessToken = await this.getAccessToken()
        request.headers = { ...request.headers, 'Authorization': `Bearer ${accessToken}` }
      }
      if(request.bearerToken){
        request.headers = { ...request.headers, 'Authorization': `Bearer ${request.bearerToken}` }
      }
      let resourceResponse = await this.client.Do(request)
      let { data, headers, status, statusText } = resourceResponse
      return { data, headers, status, statusText }
    } catch( err ) {
      err.message = "\nUnable to carry out request " + err.message
      throw err
    }
  }

  /**
    Retrieves and memoizes an accessToken for OneLogin requets. Refreshes accessToken when expired
    @param {string} authPath - The path to OneLogin's API authentication handler
    @returns {Promise<string>} The accessToken
  */
  getAccessToken = async (authPath = "auth/oauth2/v2/token"): Promise<string> => {
    let clientCredentialString = `${this.clientID}:${this.clientSecret}`
    let clientCredential = Buffer.from(clientCredentialString).toString('base64')

    // token expiry before now or no accessToken?
    if(this.accessTokenExpiry < new Date() || !this.accessToken) {
      let url = `/${authPath}`
      let method: Method = 'POST'
      let data = { "grant_type": "client_credentials" }
      let headers = { "Authorization": `Basic ${clientCredential}` }
      try {
        let bearerResponse = await this.client.Do({method, url, headers, data})
        this.accessToken = bearerResponse.data.access_token
        this.accessTokenExpiry = new Date(bearerResponse.data.created_at)
        this.accessTokenExpiry.setHours(
          this.accessTokenExpiry.getHours() +
          (bearerResponse.data.expires_in / SECONDS_PER_HOUR)
        )
      } catch( err ) {
        console.log("Unable to authenticate request to OneLogin.", err.message)
      }
    }
    return this.accessToken
  }

}
