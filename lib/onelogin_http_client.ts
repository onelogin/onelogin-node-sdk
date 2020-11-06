import { HTTPClient, HTTPClientConfig, Method } from './http_interface'

const SECONDS_PER_HOUR = 3600
export type Region = | 'us' | 'US' | 'eu' | 'EU'

interface OneLoginClientConfig {
  clientID: string;
  clientSecret: string;
  region?: Region;
  baseURL?: string;
  timeout: number;
}

export class OneLoginHTTPClient {
  baseURL: string
  accessToken: string
  clientCredential: string
  accessTokenExpiry: Date
  client: HTTPClient

  constructor(config: OneLoginClientConfig, httpClient: HTTPClient) {
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

  ReadResource(path: string, query: object){}
  WriteResource(path: string, payload: object){}
  DestroyResource(path: string, query: object){}

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
      } catch(err) {
        console.log("Unable to authenticate request to OneLogin.", err.message)
      }
    }
    return this.accessToken
  }

}
