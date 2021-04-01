import { HTTPClient } from '../../http_clients/interface';
import * as base64 from 'base64-js';
import qs from "qs";

const LOCALSTORE_AUTH_URL_KEY = "auth-url";
const LOCALSTORE_CODE_VERIFIER_KEY = "code-verifier";

const QUERYPARAM_SCOPE = "scope=openid";
const QUERYPARAM_RESPONSE_TYPE = "response_type=code";
const QUERYPARAM_CODE_CHALLENGE_METHOD = "code_challenge_method=S256";

const REFRESH_GRANT_TYPE = "refresh_token";
const CODE_CHALLENG_DIGEST_ALGO = "SHA-256";
const AUTH_CODE_GRANT_TYPE = "authorization_code";
const CODE_VERIFIER_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.~";

const MISSING_CONFIG_MESSAGE = "The PKCE Client is Missing Configuration Parameters. Configure the client or pass the parameters as second argument to this function"

interface PKCEConfig {
  redirectURL: string,
  clientID: string
}

interface AccessToken {
  access_token: string,
  expires_in: number,
  id_token: string,
  refresh_token: string,
  scope: string,
  token_type: string
}

export default class PKCE {
  private configuration: PKCEConfig;
  private client: HTTPClient;
  private accessToken: AccessToken;

  constructor(client: HTTPClient){
    this.client = client;
  }

  Configure = (config: PKCEConfig) => {
    this.configuration = config
    return this
  }

  CreateAuthURL = async (overrideRedirectURL?: string) => {
    if(!this.configuration) {
      throw new Error(MISSING_CONFIG_MESSAGE)
    }

    if(
      !localStorage.getItem(LOCALSTORE_CODE_VERIFIER_KEY) ||
      !localStorage.getItem(LOCALSTORE_AUTH_URL_KEY)
    ){
      localStorage.removeItem(LOCALSTORE_CODE_VERIFIER_KEY);
      localStorage.removeItem(LOCALSTORE_AUTH_URL_KEY);
    }

    if(
      !localStorage.getItem(LOCALSTORE_CODE_VERIFIER_KEY) &&
      !localStorage.getItem(LOCALSTORE_AUTH_URL_KEY)
    ){
      let codeVerifier = this._createCodeVerifier( 50 );
      let codeChallenge = await this._createCodeChallenge( codeVerifier );

      let { clientID, redirectURL } = this.configuration
      if(overrideRedirectURL)
        redirectURL = overrideRedirectURL;

      let queryParams = [
        `code_challenge=${codeChallenge}`, `client_id=${clientID}`, `redirect_uri=${redirectURL}`,
        QUERYPARAM_CODE_CHALLENGE_METHOD, QUERYPARAM_RESPONSE_TYPE, QUERYPARAM_SCOPE
      ];

      localStorage.setItem(LOCALSTORE_CODE_VERIFIER_KEY, codeVerifier);
      localStorage.setItem(LOCALSTORE_AUTH_URL_KEY, `${this.client.baseURL}/oidc/2/auth?${queryParams.join("&")}`);
    }
    console.log("ASDF", localStorage.getItem(LOCALSTORE_AUTH_URL_KEY), overrideRedirectURL)
    return localStorage.getItem(LOCALSTORE_AUTH_URL_KEY);
  }

  GetAccessTokenAsync = async (code: string, overrideRedirectURL?: string): Promise<AccessToken> => {
    let code_verifier = localStorage.getItem(LOCALSTORE_CODE_VERIFIER_KEY);

    if(!this.configuration)
      throw new Error(MISSING_CONFIG_MESSAGE)

    if(this.accessToken){
      return this.accessToken;
    }

    let grant_type = AUTH_CODE_GRANT_TYPE;

    let { clientID, redirectURL } = this.configuration
    if(overrideRedirectURL)
      redirectURL = overrideRedirectURL;

    let params = qs.stringify({
      code_verifier, code, grant_type,
      redirect_uri: redirectURL,
      client_id: clientID
    });

    try {
      let res = await this.client.Do({
        url: `${this.client.baseURL}/oidc/2/token`,
        method: 'post',
        data: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      localStorage.removeItem(LOCALSTORE_CODE_VERIFIER_KEY);
      this.accessToken = res.data
      return res.data;
    } catch(err) {
      err.message = "\nAccess Token error" + err.message;
      throw err;
    }
  }

  GetUserInfoAsync = async (token: string) => {
    let { data } = await this.client.Do({
      url: `${this.client.baseURL}/oidc/2/me`,
      method: 'get',
      bearerToken: token
    });
    return data;
  }

  RefreshAccessTokenAsync = async (refreshToken: string) => {
    if(!this.configuration)
      throw new Error(MISSING_CONFIG_MESSAGE)

    let { clientID } = this.configuration

    let data = qs.stringify({
      grant_type: REFRESH_GRANT_TYPE,
      refresh_token: refreshToken,
      client_id: clientID
    });
    try {
      let res = await this.client.Do({
        data,
        url: `${this.client.baseURL}/oidc/2/token`,
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      return res.data;
    } catch(err) {
      err.message = "\nRefresh Token error" + err.message;
      throw err;
    }
  }

  private _createCodeVerifier = (size: number): string => {
    const charsetIndexBuffer = new Uint8Array(size);
    let randomChars = [];
    let index = 0;
    for(let i = 0; i < size; i++){
      charsetIndexBuffer[i] = (Math.random() * CODE_VERIFIER_CHARSET.length) | 0;
      index = charsetIndexBuffer[i] % CODE_VERIFIER_CHARSET.length;
      randomChars.push(CODE_VERIFIER_CHARSET[index]);
    }
    return randomChars.join('');
  }

  private _createCodeChallenge = async (codeVerifier: string): Promise<string> => {
    if(!!crypto && !!crypto.subtle){
      let codeVerifierCharCodes = this._textEncodeLite(codeVerifier);
      let hashedCharCodes = await crypto.subtle.digest(CODE_CHALLENG_DIGEST_ALGO, codeVerifierCharCodes);
      return this._urlSafe(new Uint8Array(hashedCharCodes));
    }
  }

  private _textEncodeLite = (str: string) => {
    const charCodeBuffer = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++){
      charCodeBuffer[i] = str.charCodeAt(i);
    }
    return charCodeBuffer;
  }

  private _urlSafe = (buffer: Uint8Array): string => {
    const encoded = base64.fromByteArray(new Uint8Array(buffer));
    return encoded.replace(/\+/g, '-').replace( /\//g, '_' ).replace( /=/g, '');
  }
}
