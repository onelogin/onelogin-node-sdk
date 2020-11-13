/**
  AxiosClientAdapter
  @module AxiosClientAdapter
  @describe Wraps Axios HTTP Client in an adapter that can be used with OneLoginHTTPClient
*/
import { HTTPClientAdapter, HTTPRequest, HTTPResponse, HTTPClientConfig } from '../http_interface';
export declare class AxiosClientAdapter implements HTTPClientAdapter {
    private httpClient;
    /**
      Initializes and memoizes the axios http client with interceptors
      @param {HTTPClientConfig} config - the configuration information used to initialize the axios client
    */
    Configure: (config: HTTPClientConfig) => void;
    /**
      Executes the HTTPRequest using the configured Axios Client
      @async
      @param {HTTPRequest} request - the HTTP Request object with payload and headers
      @returns {Promise<HTTPResponse>} The returned data, status information, and headers from the api call
    */
    Do: (request: HTTPRequest) => Promise<HTTPResponse>;
    /** Set up request interceptors so responses and errors can get handled */
    private _initializeResponseInterceptor;
    /**
      Unpacks the axios response and returns a generic object
      @param {AxiosResponse} response - the API Response object with data and headers
      @returns {any} The returned data, status information, and headers from the api call
    */
    private _handleResponse;
    /**
      Handles / returns the error
      @param {any} error - the error returned from the API
    */
    protected _handleError: (error: any) => Promise<never>;
}
