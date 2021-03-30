/**
  AxiosClientAdapter
  @module AxiosClientAdapter
  @describe Wraps Axios HTTP Client in an adapter that can be used with OneLoginHTTPClient
*/

import axios, { AxiosInstance, AxiosResponse } from "axios";
import { HTTPRequest, HTTPResponse, HTTPClientConfig } from '../interface';
import HTTPClientAdapter from './interface';

export default class AxiosClientAdapter implements HTTPClientAdapter {

  private httpClient: AxiosInstance;

  /**
    Initializes and memoizes the axios http client with interceptors
    @param {HTTPClientConfig} config - the configuration information used to initialize the axios client
  */
  Configure = (config: HTTPClientConfig) => {
    this.httpClient = axios.create(config)
    this._initializeResponseInterceptor()
  }

  /**
    Executes the HTTPRequest using the configured Axios Client
    @async
    @param {HTTPRequest} request - the HTTP Request object with payload and headers
    @returns {Promise<HTTPResponse>} The returned data, status information, and headers from the api call
  */
  Do = async (request: HTTPRequest): Promise<HTTPResponse> => {
    try {
      let response = await this.httpClient({ ...request }); // got lucky and HTTPRequest happens to line up with AxiosRequestConfig. might be more complex for other http libraries
      return { ...response };
    } catch(err) {
      if(err.response){
        console.log("API Request Error: ", err.response.data.message);
        return { ...err.response };
      }
      throw err
    }
  }

  /** Set up request interceptors so responses and errors can get handled */
  private _initializeResponseInterceptor = () => {
    this.httpClient.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  /**
    Unpacks the axios response and returns a generic object
    @param {AxiosResponse} response - the API Response object with data and headers
    @returns {any} The returned data, status information, and headers from the api call
  */
  private _handleResponse = ({ data, status, statusText, headers }: AxiosResponse): any => {
    return {data, status, statusText, headers};
  }

  /**
    Handles / returns the error
    @param {any} error - the error returned from the API
  */
  protected _handleError = (error: any) => Promise.reject(error);
}
