import { HTTPClient } from '../../http_clients/interface';
interface PKCEConfig {
    redirectURL: string;
    clientID: string;
}
interface AccessToken {
    access_token: string;
    expires_in: number;
    id_token: string;
    refresh_token: string;
    scope: string;
    token_type: string;
}
export default class PKCE {
    private configuration;
    private client;
    private accessToken;
    constructor(client: HTTPClient);
    Configure: (config: PKCEConfig) => this;
    CreateAuthURL: (overrideRedirectURL?: string) => Promise<string>;
    GetAccessTokenAsync: (code: string, overrideRedirectURL?: string) => Promise<AccessToken>;
    GetUserInfoAsync: (token: string) => Promise<any>;
    RefreshAccessTokenAsync: (refreshToken: string) => Promise<any>;
    private _createCodeVerifier;
    private _createCodeChallenge;
    private _textEncodeLite;
    private _urlSafe;
}
export {};
