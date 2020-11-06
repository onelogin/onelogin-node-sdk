"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onelogin_http_client_1 = require("./onelogin_http_client");
const axios_client_1 = require("./axios_client");
let region = 'us';
let timeout = 3000;
let baseURL = 'api.us.onelogin.com';
let clientID = "8f05a9be54e9170d764c1172418038a87e26f97c61a09e69a7c6d866c75be746";
let clientSecret = "beaf4a68baa183ef8c9036a296e0e29145c84364c98a551b5a1504ad44885cc9";
let client = new onelogin_http_client_1.OneLoginHTTPClient({ clientID, clientSecret, region, timeout }, new axios_client_1.AxiosClient());
client.getAccessToken().then(() => console.log(client.accessToken));
/*
client.ReadResource("/api/2/users", {id: 234}) // GET api.us.onelogin.com/api/2/users/234
client.ReadResource("/api/2/apps", {name: "aws app"}) // GET api.us.onelogin.com/api/2/apps?name=aws%20app
client.WriteResource("/api/2/apps", {id: 345, name: "amazon app"}) // PUT api.us.onelogin.com/api/2/apps/345 -d '{"name": "amazon app"}'
client.WriteResource("/api/2/users", {name: "new guy", email: "new.guy@bigcorp.com"}) // POST api.us.onelogin.com/api/2/users/ -d '{"name": "new guy", "email": "new.guy@bigcorp.com"}'
client.DestroyResource("/api/2/roles", {id: 2}) // DELETE api.us.onelogin.com/api/2/roles/2
*/
// OneLoginApps.Query({id: 1}) -> result {data: the app, Include: fn() that uses parent info to get kid info}
// OneLoginApps.Query({id: 2}).Include -> result {data: the app_rule, Include: fn() that uses rule to get rule children}
//# sourceMappingURL=run.js.map