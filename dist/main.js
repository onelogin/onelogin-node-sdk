"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const apps_1 = require("./onelogin/apps/apps");
const smart_mfa_1 = require("./onelogin/smart_mfa/smart_mfa");
const axios_client_adapter_1 = require("./http_clients/client_adapters/axios_client_adapter");
const onelogin_http_client_1 = require("./http_clients/onelogin_http_client");
const http_repository_1 = require("./repositories/http_repository");
class Client {
    constructor(config) {
        this.client = new onelogin_http_client_1.OneLoginHTTPClient(config, new axios_client_adapter_1.AxiosClientAdapter());
        this.resourceRepository = new http_repository_1.HTTPRepository(this.client);
        this.appsRepository = new apps_1.OneLoginAppsRepository(this.resourceRepository);
        this.smartMFA = new smart_mfa_1.OneLoginSmartMFA(this.client);
    }
}
exports.Client = Client;
module.exports = { Client };
//# sourceMappingURL=main.js.map