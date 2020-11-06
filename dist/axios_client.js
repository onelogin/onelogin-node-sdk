"use strict";
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
exports.AxiosClient = void 0;
const axios_1 = __importDefault(require("axios"));
class AxiosClient {
    constructor() {
        this.Configure = (config) => {
            this.httpClient = axios_1.default.create(config);
            this._initializeResponseInterceptor();
        };
        this.Do = (request) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.httpClient(Object.assign({}, request)); // got lucky and HTTPRequest happens to line up with AxiosRequestConfig. might be more complex for other http libraries
                return Object.assign({}, response);
            }
            catch (err) {
                console.log("Unable to authenticate request to OneLogin.", err.message);
                return err;
            }
        });
        this._initializeResponseInterceptor = () => {
            this.httpClient.interceptors.response.use(this._handleResponse, this._handleError);
        };
        this._handleResponse = ({ data, status, statusText, headers, config }) => {
            return { data, status, statusText, headers };
        };
        this._handleError = (error) => Promise.reject(error);
    }
}
exports.AxiosClient = AxiosClient;
//# sourceMappingURL=axios_client.js.map