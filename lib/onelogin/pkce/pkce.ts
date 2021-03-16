import { HTTPClient } from '../../http_clients/http_interface';
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

export interface PKCEConfig {
  idpURL: string,
  redirectURL: string,
  clientID: string
}

export class PKCE {
  configuration: PKCEConfig
  client: HTTPClient;

  constructor(client: HTTPClient){
    this.client = client;
  }

  Configure = (config: PKCEConfig) => {
    this.configuration = config
  }

  CreateAuthURL = async (config?: PKCEConfig) => {
    if(!config && !this.configuration) {
      throw new Error(MISSING_CONFIG_MESSAGE)
    }

    if(
      !localStorage.getItem(LOCALSTORE_CODE_VERIFIER_KEY) ||
      !localStorage.getItem(LOCALSTORE_AUTH_URL_KEY)
    ){
      localStorage.clear();
    }

    if(
      !localStorage.getItem(LOCALSTORE_AUTH_URL_KEY) &&
      !localStorage.getItem( LOCALSTORE_CODE_VERIFIER_KEY )
    ){
      let codeVerifier = this._createCodeVerifier( 50 );
      let codeChallenge = await this._createCodeChallenge( codeVerifier );

      let { clientID, redirectURL, idpURL } =
        this.configuration ? this.configuration : config

      let queryParams = [
        `code_challenge=${codeChallenge}`, `client_id=${clientID}`, `redirect_uri=${redirectURL}`,
        QUERYPARAM_CODE_CHALLENGE_METHOD, QUERYPARAM_RESPONSE_TYPE, QUERYPARAM_SCOPE
      ];

      localStorage.setItem(LOCALSTORE_CODE_VERIFIER_KEY, codeVerifier);
      localStorage.setItem(LOCALSTORE_AUTH_URL_KEY, `${idpURL}?${queryParams.join("&")}`);
      return `${idpURL}/auth?${queryParams.join("&")}`;
    }

    return localStorage.getItem(LOCALSTORE_AUTH_URL_KEY);
  }

  GetAccessToken = async (code: string, config?: PKCEConfig) => {
    if(!config && !this.configuration)
      throw new Error(MISSING_CONFIG_MESSAGE)

    let code_verifier = localStorage.getItem(LOCALSTORE_CODE_VERIFIER_KEY);
    let grant_type = AUTH_CODE_GRANT_TYPE;
    let {clientID, redirectURL} = this.configuration ? this.configuration : config

    if(!code_verifier)
      return null;

    let params = qs.stringify({
      code_verifier, code, grant_type,
      redirect_uri: redirectURL,
      client_id: clientID
    });

    try {
      let res = await this.client.Do({
        url: `${config.idpURL}/token`,
        method: 'post',
        data: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      localStorage.removeItem(LOCALSTORE_CODE_VERIFIER_KEY);
      return res.data;
    } catch(err) {
      err.message = "\nAccess Token error" + err.message;
      throw err;
    }
  }

  GetUserInfo = async (token: string, config?: PKCEConfig): Promise<string> => {
    if(!config && !this.configuration)
      throw new Error(MISSING_CONFIG_MESSAGE)

    let { idpURL } = this.configuration ? this.configuration : config
    let { data } = await this.client.Do({
      url: `${idpURL}/me`,
      method: 'get',
      bearerToken: token
    });
    return data;
  }

  RefreshAccessToken = async (refreshToken: string, config?: PKCEConfig): Promise<string> => {
    if(!config && !this.configuration)
      throw new Error(MISSING_CONFIG_MESSAGE)

    let { idpURL, clientID } = this.configuration ? this.configuration : config

    let data = qs.stringify({
      grant_type: REFRESH_GRANT_TYPE,
      refresh_token: refreshToken,
      client_id: clientID
    });
    try {
      let res = await this.client.Do({
        data,
        url: `${idpURL}/me`,
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

  private _createCodeChallenge = async (codeVerifier: string) : Promise<string> => {
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
