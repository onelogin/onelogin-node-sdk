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
exports.AuthOneLogin = void 0;
const axios_1 = __importDefault(require("axios"));
/*
AuthOneLogin - express router middleware that authenticates the app with OneLogin
using a client id and secret for OneLogin and attaching the returned access_token
to the request on the 'olBearerToken' field.

This middleware is typically used when a route handler needs to request something
from the OneLogin API using a protected route.

@param req: Request - the express request object from the router service
@param res: Response - the express response object from the router service
@param next: NextFunction - the express middleware next handler
*/
const AuthOneLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let clientCredentials = `${process.env.ONELOGIN_CLIENT_ID}:${process.env.ONELOGIN_CLIENT_SECRET}`;
    let encodedCredentials = Buffer.from(clientCredentials).toString('base64');
    let url = `${process.env.ONELOGIN_API_URL}/auth/oauth2/v2/token`;
    let requestBody = { "grant_type": "client_credentials" };
    console.log(url);
    let headers = {
        "Content-Type": `application/json`,
        "Authorization": `Basic ${encodedCredentials}`
    };
    try {
        let bearerResponse = yield axios_1.default.post(url, requestBody, { headers });
        req.olBearerToken = bearerResponse.data.access_token;
        console.log("GOT TOKEN", bearerResponse);
    }
    catch (err) {
        console.log("Unable to authenticate request to OneLogin.", err.message);
    }
    finally {
        next();
    }
});
exports.AuthOneLogin = AuthOneLogin;
//# sourceMappingURL=onelogin.js.map