/**
  HTTPClientAdapter
  @describe Methods that must be implemented on classes that can be used as HTTP clients
*/

export interface HTTPClientAdapter {
  /**
    Executes the HTTPRequest using a configured Axios Client
    @async
    @param {HTTPRequest} request - the HTTP Request object with payload and headers
    @returns {Promise<HTTPResponse>} The returned data, status information, and headers from the api call
  */
  Do(req: HTTPRequest): Promise<HTTPResponse>
  /**
    Initializes and memoizes the axios http client with interceptors
    @param {HTTPClientConfig} config - the configuration information used to initialize the axios client
  */
  Configure(config: HTTPClientConfig): void
}

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
  Do(request: HTTPRequest): Promise<HTTPResponse>
}

/**
  Method
  @describe Available HTTP Methods
*/
export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'post' | 'POST'
  | 'put' | 'PUT'

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
  data: T
  status: number;
  statusText: string;
  headers: any;
}

/**
  HTTPClientConfig
  @describe The configuration information for establishing HTTP client connections
*/
export interface HTTPClientConfig {
  baseURL?: string;
  timeout: number;
  headers: object;
}
