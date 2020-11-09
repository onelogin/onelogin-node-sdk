"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onelogin_http_client_1 = require("./http_clients/onelogin_http_client");
const axios_client_adapter_1 = require("./http_clients/client_adapters/axios_client_adapter");
const http_repository_1 = require("./repositories/http_repository");
const apps_1 = require("./onelogin/apps/apps");
let region = 'us';
let timeout = 3000;
let baseURL = 'api.us.onelogin.com';
let clientID = "8f05a9be54e9170d764c1172418038a87e26f97c61a09e69a7c6d866c75be746";
let clientSecret = "beaf4a68baa183ef8c9036a296e0e29145c84364c98a551b5a1504ad44885cc9";
let onelogin = new onelogin_http_client_1.OneLoginHTTPClient({ clientID, clientSecret, region, timeout }, new axios_client_adapter_1.AxiosClientAdapter());
let oneloginRepository = new http_repository_1.HTTPRepository(onelogin);
let OneLoginApps = new apps_1.OneLoginAppsRepository(oneloginRepository);
// OneLoginApps.Query().then(r => console.log(r.length))
// OneLoginApps.Query({connector_id: 50534}).then(r => console.log(r.length))
// OneLoginApps.Create({name: "SPANKY SWANKY", connector_id: 50534}).then(r => console.log(r))
OneLoginApps.Query({ connector_id: 50534, name: "SPANKY SWANKY" }).then(r => console.log(r));
//# sourceMappingURL=run.js.map