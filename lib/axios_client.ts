import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { HTTPClient, HTTPRequest, HTTPResponse, HTTPClientConfig } from './http_interface'

export class AxiosClient implements HTTPClient {

  private httpClient: AxiosInstance

  Configure = (config: HTTPClientConfig) => {
    this.httpClient = axios.create(config)
    this._initializeResponseInterceptor()
  }

  Do = async (request: HTTPRequest): Promise<HTTPResponse> => {
    try {
      let response = await this.httpClient({ ...request }) // got lucky and HTTPRequest happens to line up with AxiosRequestConfig. might be more complex for other http libraries
      return { ...response }
    } catch(err) {
      console.log("Unable to authenticate request to OneLogin.", err.message)
      return err
    }
  }

  private _initializeResponseInterceptor = () => {
    this.httpClient.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data, status, statusText, headers }: AxiosResponse): any => {
    return {data, status, statusText, headers};
  }

  protected _handleError = (error: any) => Promise.reject(error);
}
