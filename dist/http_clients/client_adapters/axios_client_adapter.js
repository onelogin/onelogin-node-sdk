"use strict";
/**
  AxiosClientAdapter
  @module AxiosClientAdapter
  @describe Wraps Axios HTTP Client in an adapter that can be used with OneLoginHTTPClient
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosClientAdapter = void 0;
const axios_1 = __importDefault(require("axios"));
class AxiosClientAdapter {
    constructor() {
        /**
          Initializes and memoizes the axios http client with interceptors
          @param {HTTPClientConfig} config - the configuration information used to initialize the axios client
        */
        this.Configure = (config) => {
            this.httpClient = axios_1.default.create(config);
            this._initializeResponseInterceptor();
        };
        /**
          Executes the HTTPRequest using the configured Axios Client
          @async
          @param {HTTPRequest} request - the HTTP Request object with payload and headers
          @returns {Promise<HTTPResponse>} The returned data, status information, and headers from the api call
        */
        this.Do = (request) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.httpClient(Object.assign({}, request)); // got lucky and HTTPRequest happens to line up with AxiosRequestConfig. might be more complex for other http libraries
                return Object.assign({}, response);
            }
            catch (err) {
                if (err.response) {
                    throw new Error(err.response);
                }
                throw err;
            }
        });
        /** Set up request interceptors so responses and errors can get handled */
        this._initializeResponseInterceptor = () => {
            this.httpClient.interceptors.response.use(this._handleResponse, this._handleError);
        };
        /**
          Unpacks the axios response and returns a generic object
          @param {AxiosResponse} response - the API Response object with data and headers
          @returns {any} The returned data, status information, and headers from the api call
        */
        this._handleResponse = ({ data, status, statusText, headers }) => {
            return { data, status, statusText, headers };
        };
        /**
          Handles / returns the error
          @param {any} error - the error returned from the API
        */
        this._handleError = (error) => Promise.reject(error);
    }
}
exports.AxiosClientAdapter = AxiosClientAdapter;
//# sourceMappingURL=axios_client_adapter.js.map