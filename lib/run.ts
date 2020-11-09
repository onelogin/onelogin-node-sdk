import { OneLoginHTTPClient, Region } from './http_clients/onelogin_http_client'
import { AxiosClientAdapter } from './http_clients/client_adapters/axios_client_adapter'
import { HTTPRepository } from './repositories/http_repository'
import { OneLoginAppsRepository } from './onelogin/apps/apps'

let region: Region = 'us'
let timeout = 3000
let baseURL = 'api.us.onelogin.com'
let clientID = ""
let clientSecret = ""

let onelogin = new OneLoginHTTPClient(
  {clientID, clientSecret, region, timeout},
  new AxiosClientAdapter()
)

let oneloginRepository = new HTTPRepository(onelogin)

let OneLoginApps = new OneLoginAppsRepository(oneloginRepository)
// OneLoginApps.Query().then(r => console.log(r.length))
// OneLoginApps.Query({connector_id: 50534}).then(r => console.log(r.length))
// OneLoginApps.Create({name: "SPANKY SWANKY", connector_id: 50534}).then(r => console.log(r))
OneLoginApps.Query({connector_id: 50534, name: "SPANKY SWANKY"}).then(r => console.log(r))
