/**
  OneLoginHTTPClient
  @module OneLoginHTTPClientAdapter
  @describe Manages authentication and requests to OneLogin APIs
*/
import { HTTPRequest, HTTPResponse, HTTPClient, HTTPClientAdapter } from './http_interface';
export declare type Region = 'us' | 'US' | 'eu' | 'EU';
/**
  OneLoginClientConfig
  @describe The required information for establishing HTTP connections to OneLogin APIs
*/
export interface OneLoginClientConfig {
    clientID: string;
    clientSecret: string;
    region?: Region;
    baseURL?: string;
    timeout: number;
}
export declare class OneLoginHTTPClient implements HTTPClient {
    baseURL: string;
    accessToken: string;
    clientCredential: string;
    accessTokenExpiry: Date;
    client: HTTPClientAdapter;
    /**
      Initializes OneLogin HTTP connection and authentication information
      @constructor
      @param {OneLoginClientConfig} config - The configuration information used to initialize the OneLogin client
      @param {HTTPClientAdapter} httpClient - The HTTP client that will facilitate HTTP requests (e.g. axios, https, etc)
    */
    constructor(config: OneLoginClientConfig, httpClient: HTTPClientAdapter);
    /**
      Executes the HTTP Request
      @async
      @param {HTTPRequest} request - The request assembled by the using class passed to HTTP client configured for OneLogin
      @returns {Promise<object>} - The resulting data from the HTTP lookup
    */
    Do: (request: HTTPRequest) => Promise<HTTPResponse>;
    /**
      Retrieves and memoizes an accessToken for OneLogin requets. Refreshes accessToken when expired
      @param {string} authPath - The path to OneLogin's API authentication handler
      @returns {Promise<string>} The accessToken
    */
    getAccessToken: (authPath?: string) => Promise<string>;
}
