import { OneLoginHTTPClient, Region } from './onelogin_http_client'
import { AxiosClient } from './axios_client'

let region: Region = 'us'
let timeout = 3000
let baseURL = 'api.us.onelogin.com'
let clientID = ""
let clientSecret = ""


let client = new OneLoginHTTPClient(
  {clientID, clientSecret, region, timeout},
  new AxiosClient()
)

/*
client.ReadResource("/api/2/users", {id: 234}) // GET api.us.onelogin.com/api/2/users/234
client.ReadResource("/api/2/apps", {name: "aws app"}) // GET api.us.onelogin.com/api/2/apps?name=aws%20app
client.WriteResource("/api/2/apps", {id: 345, name: "amazon app"}) // PUT api.us.onelogin.com/api/2/apps/345 -d '{"name": "amazon app"}'
client.WriteResource("/api/2/users", {name: "new guy", email: "new.guy@bigcorp.com"}) // POST api.us.onelogin.com/api/2/users/ -d '{"name": "new guy", "email": "new.guy@bigcorp.com"}'
client.DestroyResource("/api/2/roles", {id: 2}) // DELETE api.us.onelogin.com/api/2/roles/2
*/
// OneLoginApps.Query({id: 1}) -> result {data: the app, Include: fn() that uses parent info to get kid info}
// OneLoginApps.Query({id: 2}).Include -> result {data: the app_rule, Include: fn() that uses rule to get rule children}
