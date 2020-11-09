/**
  OneLoginHTTPClient
  @module OneLoginHTTPClientAdapter
  @describe Manages authentication and requests to OneLogin APIs
*/

import {
  HTTPRequest, HTTPResponse, HTTPClient,
  HTTPClientAdapter, HTTPClientConfig, Method
} from './http_interface'

const SECONDS_PER_HOUR = 3600
export type Region = | 'us' | 'US' | 'eu' | 'EU'

/**
  OneLoginClientConfig
  @describe The required information for establishing HTTP connections to OneLogin APIs
*/
interface OneLoginClientConfig {
  clientID: string;
  clientSecret: string;
  region?: Region;
  baseURL?: string;
  timeout: number;
}

export class OneLoginHTTPClient implements HTTPClient {
  baseURL: string
  accessToken: string
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
    if(!config.region && !config.baseURL)
      throw new Error("Either region or baseURL are required")

    if(!config.clientID)
      throw new Error("clientID is required.")

    if(!config.clientSecret)
      throw new Error("clientSecret is required.")

    this.client = httpClient
    let clientCredentials = `${config.clientID}:${config.clientSecret}`
    this.clientCredential = Buffer.from(clientCredentials).toString('base64')

    this.baseURL = config.baseURL || `https://api.${config.region}.onelogin.com`
    this.baseURL = this.baseURL.split("://")[0] === "https" ?
      this.baseURL : `https://${this.baseURL}`

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
    @returns {Promise<object>} - Teh resulting data from the HTTP lookup
  */
  Do = async (request: HTTPRequest): Promise<HTTPResponse> => {
    try {
      let accessToken = await this.getAccessToken()
      request.headers = { 'Authorization': `Bearer ${accessToken}` }
      let resourceResponse = await this.client.Do(request)
      let { data, headers, status, statusText } = resourceResponse
      console.log(`HTTP ${request.method} to ${request.url} complete: ${status} - ${statusText}`)
      return { data, headers, status, statusText }
    } catch( err ) {
      console.log("Unable to carry out request.", err.message)
      return { ...err }
    }
  }

  /**
    Retrieves and memoizes an accessToken for OneLogin requets. Refreshes accessToken when expired
    @param {string} authPath - The path to OneLogin's API authentication handler
    @returns {Promise<string>} The accessToken
  */
  getAccessToken = async (authPath = "auth/oauth2/v2/token"): Promise<string> => {
    // token expiry before now or no accessToken?
    if( this.accessTokenExpiry < new Date() || !this.accessToken ) {
      let url = `/${authPath}`
      let method: Method = 'POST'
      let data = { "grant_type": "client_credentials" }
      let headers = { "Authorization": `Basic ${this.clientCredential}` }
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
