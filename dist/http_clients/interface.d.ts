/**
  HTTPClient
  @describe Prepares a HTTPRequest and passes it to the HTTPClient via the HTTPClientAdapter
*/
export interface HTTPClient {
    /**
      Executes the HTTP Request
      @async
      @param {HTTPRequest} request - The request assembled by the using class passed to HTTP client configured for OneLogin
      @returns {Promise<object>} - The resulting data from the HTTP lookup
    */
    Do(request: HTTPRequest): Promise<HTTPResponse>;
    baseURL: string;
}
/**
  Method
  @describe Available HTTP Methods
*/
export declare type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'post' | 'POST' | 'put' | 'PUT';
/**
  HTTPRequest
  @describe The representation of a HTTP request including /path_url, method, headers, data, and query parameters
*/
export interface HTTPRequest<T = any> {
    url: string;
    bearerToken?: string;
    method?: Method;
    headers?: object;
    data?: T;
    params?: object;
}
/**
  HTTPResponse
  @describe The representation of a HTTP response including headers, data, and status information
*/
export interface HTTPResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
}
/**
  HTTPClientConfig
  @describe The configuration information for establishing HTTP client connections
*/
export interface HTTPClientConfig {
    timeout: number;
    baseURL?: string;
    headers?: object;
}
