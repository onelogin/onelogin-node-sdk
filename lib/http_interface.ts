export interface HTTPClient {
  Do(req: HTTPRequest): Promise<HTTPResponse>
  Configure(config: HTTPClientConfig): void
}

export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'post' | 'POST'
  | 'put' | 'PUT'

export interface HTTPRequest {
  url: string;
  method?: Method;
  headers?: object;
  data?: object;
  params?: object;
}

export interface HTTPResponse<T = any> {
  data: T
  status: number;
  statusText: string;
  headers: any;
}

export interface HTTPClientConfig {
  baseURL: string;
  timeout: number;
  headers: object;
}
