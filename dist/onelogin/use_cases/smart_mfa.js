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
Object.defineProperty(exports, "__esModule", { value: true });
class OneLoginSmartMFA {
    constructor(client) {
        this.CheckMFARequired = (request) => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.client.Do({
                url: "api/2/smart-mfa/",
                data: request,
                method: "post",
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.status >= 400) {
                console.log("OneLogin Returned an Error", response);
                return { data: null, error: "OneLogin Returned an Error" };
            }
            return { data: response.data };
        });
        this.ValidateOTP = (token) => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.client.Do({
                url: "api/2/verify",
                data: token,
                method: "post"
            });
            if (response.status >= 400) {
                console.log("OneLogin Returned an Error", response);
                throw new Error(`There was a problem ${response.statusText}`);
            }
            return Object.assign({}, response.data);
        });
        this.client = client;
    }
}
exports.default = OneLoginSmartMFA;
//# sourceMappingURL=smart_mfa.js.map