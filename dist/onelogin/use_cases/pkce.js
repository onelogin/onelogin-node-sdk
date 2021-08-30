"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base64 = __importStar(require("base64-js"));
const qs_1 = __importDefault(require("qs"));
const LOCALSTORE_AUTH_URL_KEY = "auth-url";
const LOCALSTORE_CODE_VERIFIER_KEY = "code-verifier";
const QUERYPARAM_SCOPE = "scope=openid";
const QUERYPARAM_RESPONSE_TYPE = "response_type=code";
const QUERYPARAM_CODE_CHALLENGE_METHOD = "code_challenge_method=S256";
const REFRESH_GRANT_TYPE = "refresh_token";
const CODE_CHALLENG_DIGEST_ALGO = "SHA-256";
const AUTH_CODE_GRANT_TYPE = "authorization_code";
const CODE_VERIFIER_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.~";
const MISSING_CONFIG_MESSAGE = "The PKCE Client is Missing Configuration Parameters. Configure the client or pass the parameters as second argument to this function";
class PKCE {
    constructor(client) {
        this.Configure = (config) => {
            this.configuration = config;
            return this;
        };
        this.CreateAuthURL = (overrideRedirectURL) => __awaiter(this, void 0, void 0, function* () {
            if (!this.configuration) {
                throw new Error(MISSING_CONFIG_MESSAGE);
            }
            if (!localStorage.getItem(LOCALSTORE_CODE_VERIFIER_KEY) ||
                !localStorage.getItem(LOCALSTORE_AUTH_URL_KEY)) {
                localStorage.removeItem(LOCALSTORE_CODE_VERIFIER_KEY);
                localStorage.removeItem(LOCALSTORE_AUTH_URL_KEY);
            }
            if (!localStorage.getItem(LOCALSTORE_CODE_VERIFIER_KEY) &&
                !localStorage.getItem(LOCALSTORE_AUTH_URL_KEY)) {
                let codeVerifier = this._createCodeVerifier(50);
                let codeChallenge = yield this._createCodeChallenge(codeVerifier);
                let { clientID, redirectURL } = this.configuration;
                if (overrideRedirectURL)
                    redirectURL = overrideRedirectURL;
                let queryParams = [
                    `code_challenge=${codeChallenge}`, `client_id=${clientID}`, `redirect_uri=${redirectURL}`,
                    QUERYPARAM_CODE_CHALLENGE_METHOD, QUERYPARAM_RESPONSE_TYPE, QUERYPARAM_SCOPE
                ];
                localStorage.setItem(LOCALSTORE_CODE_VERIFIER_KEY, codeVerifier);
                localStorage.setItem(LOCALSTORE_AUTH_URL_KEY, `${this.client.baseURL}/oidc/2/auth?${queryParams.join("&")}`);
            }
            return localStorage.getItem(LOCALSTORE_AUTH_URL_KEY);
        });
        this.GetAccessTokenAsync = (code, overrideRedirectURL) => __awaiter(this, void 0, void 0, function* () {
            let code_verifier = localStorage.getItem(LOCALSTORE_CODE_VERIFIER_KEY);
            if (!this.configuration)
                throw new Error(MISSING_CONFIG_MESSAGE);
            if (this.accessToken) {
                return this.accessToken;
            }
            let grant_type = AUTH_CODE_GRANT_TYPE;
            let { clientID, redirectURL } = this.configuration;
            if (overrideRedirectURL)
                redirectURL = overrideRedirectURL;
            let params = qs_1.default.stringify({
                code_verifier, code, grant_type,
                redirect_uri: redirectURL,
                client_id: clientID
            });
            try {
                let res = yield this.client.Do({
                    url: `${this.client.baseURL}/oidc/2/token`,
                    method: 'post',
                    data: params,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                if (res.status < 400) {
                    localStorage.removeItem(LOCALSTORE_CODE_VERIFIER_KEY);
                    localStorage.removeItem(LOCALSTORE_AUTH_URL_KEY);
                    this.accessToken = res.data;
                    return res.data;
                }
                throw new Error(`Got ${res.status} from OneLogin`);
            }
            catch (err) {
                if (!err.message) {
                    err.message = "\nAccess Token error" + err.message;
                }
                throw err;
            }
        });
        this.GetUserInfoAsync = (token) => __awaiter(this, void 0, void 0, function* () {
            let { data } = yield this.client.Do({
                url: `${this.client.baseURL}/oidc/2/me`,
                method: 'get',
                bearerToken: token
            });
            return data;
        });
        this.RefreshAccessTokenAsync = (refreshToken) => __awaiter(this, void 0, void 0, function* () {
            if (!this.configuration)
                throw new Error(MISSING_CONFIG_MESSAGE);
            let { clientID } = this.configuration;
            let data = qs_1.default.stringify({
                grant_type: REFRESH_GRANT_TYPE,
                refresh_token: refreshToken,
                client_id: clientID
            });
            try {
                let res = yield this.client.Do({
                    data,
                    url: `${this.client.baseURL}/oidc/2/token`,
                    method: 'post',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                if (res.status < 400) {
                    return res.data;
                }
                throw new Error(`Got ${res.status} from OneLogin`);
            }
            catch (err) {
                if (!err.message) {
                    err.message = "\nAccess Token error" + err.message;
                }
                throw err;
            }
        });
        this._createCodeVerifier = (size) => {
            const charsetIndexBuffer = new Uint8Array(size);
            let randomChars = [];
            let index = 0;
            for (let i = 0; i < size; i++) {
                charsetIndexBuffer[i] = (Math.random() * CODE_VERIFIER_CHARSET.length) | 0;
                index = charsetIndexBuffer[i] % CODE_VERIFIER_CHARSET.length;
                randomChars.push(CODE_VERIFIER_CHARSET[index]);
            }
            return randomChars.join('');
        };
        this._createCodeChallenge = (codeVerifier) => __awaiter(this, void 0, void 0, function* () {
            if (!!crypto && !!crypto.subtle) {
                let codeVerifierCharCodes = this._textEncodeLite(codeVerifier);
                let hashedCharCodes = yield crypto.subtle.digest(CODE_CHALLENG_DIGEST_ALGO, codeVerifierCharCodes);
                return this._urlSafe(new Uint8Array(hashedCharCodes));
            }
        });
        this._textEncodeLite = (str) => {
            const charCodeBuffer = new Uint8Array(str.length);
            for (let i = 0; i < str.length; i++) {
                charCodeBuffer[i] = str.charCodeAt(i);
            }
            return charCodeBuffer;
        };
        this._urlSafe = (buffer) => {
            const encoded = base64.fromByteArray(new Uint8Array(buffer));
            return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
        };
        this.client = client;
    }
}
exports.default = PKCE;
//# sourceMappingURL=pkce.js.map