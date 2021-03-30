/**
  HTTPClientAdapter
  @describe Methods that must be implemented on classes that can be used as HTTP clients
*/

import { HTTPRequest, HTTPResponse, HTTPClientConfig } from '../interface'
export default interface HTTPClientAdapter {
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
