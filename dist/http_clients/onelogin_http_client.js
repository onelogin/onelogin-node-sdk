"use strict";
/**
  OneLoginHTTPClient
  @module OneLoginHTTPClientAdapter
  @describe Manages authentication and requests to OneLogin APIs
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneLoginHTTPClient = void 0;
const SECONDS_PER_HOUR = 3600;
class OneLoginHTTPClient {
    /**
      Initializes OneLogin HTTP connection and authentication information
      @constructor
      @param {OneLoginClientConfig} config - The configuration information used to initialize the OneLogin client
      @param {HTTPClientAdapter} httpClient - The HTTP client that will facilitate HTTP requests (e.g. axios, https, etc)
    */
    constructor(config, httpClient) {
        /**
          Executes the HTTP Request
          @async
          @param {HTTPRequest} request - The request assembled by the using class passed to HTTP client configured for OneLogin
          @returns {Promise<object>} - The resulting data from the HTTP lookup
        */
        this.Do = (request) => __awaiter(this, void 0, void 0, function* () {
            try {
                let accessToken = yield this.getAccessToken();
                request.headers = { 'Authorization': `Bearer ${accessToken}` };
                let resourceResponse = yield this.client.Do(request);
                let { data, headers, status, statusText } = resourceResponse;
                console.log(`HTTP ${request.method} to ${request.url} complete: ${status} - ${statusText}`);
                return { data, headers, status, statusText };
            }
            catch (err) {
                console.log("Unable to carry out request.", err.message);
                return Object.assign({}, err);
            }
        });
        /**
          Retrieves and memoizes an accessToken for OneLogin requets. Refreshes accessToken when expired
          @param {string} authPath - The path to OneLogin's API authentication handler
          @returns {Promise<string>} The accessToken
        */
        this.getAccessToken = (authPath = "auth/oauth2/v2/token") => __awaiter(this, void 0, void 0, function* () {
            // token expiry before now or no accessToken?
            if (this.accessTokenExpiry < new Date() || !this.accessToken) {
                let url = `/${authPath}`;
                let method = 'POST';
                let data = { "grant_type": "client_credentials" };
                let headers = { "Authorization": `Basic ${this.clientCredential}` };
                try {
                    let bearerResponse = yield this.client.Do({ method, url, headers, data });
                    this.accessToken = bearerResponse.data.access_token;
                    this.accessTokenExpiry = new Date(bearerResponse.data.created_at);
                    this.accessTokenExpiry.setHours(this.accessTokenExpiry.getHours() +
                        (bearerResponse.data.expires_in / SECONDS_PER_HOUR));
                }
                catch (err) {
                    console.log("Unable to authenticate request to OneLogin.", err.message);
                }
            }
            return this.accessToken;
        });
        if (!config.region && !config.baseURL)
            throw new Error("Either region or baseURL are required");
        if (!config.clientID)
            throw new Error("clientID is required.");
        if (!config.clientSecret)
            throw new Error("clientSecret is required.");
        this.client = httpClient;
        let clientCredentials = `${config.clientID}:${config.clientSecret}`;
        this.clientCredential = Buffer.from(clientCredentials).toString('base64');
        this.baseURL = config.baseURL || `https://api.${config.region}.onelogin.com`;
        this.baseURL = this.baseURL.split("://")[0] === "https" ?
            this.baseURL : `https://${this.baseURL}`;
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
        });
    }
}
exports.OneLoginHTTPClient = OneLoginHTTPClient;
//# sourceMappingURL=onelogin_http_client.js.map