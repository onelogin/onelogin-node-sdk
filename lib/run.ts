import { OneLoginHTTPClient, Region } from './http_clients/onelogin_http_client'
import { AxiosClientAdapter } from './http_clients/client_adapters/axios_client_adapter'
import { HTTPRepository } from './repositories/http_repository'
import { OneLoginAppsRepository } from './onelogin/apps/apps'

let region: Region = 'us'
let timeout = 3000
let baseURL = 'api.us.onelogin.com'
let clientID = "8f05a9be54e9170d764c1172418038a87e26f97c61a09e69a7c6d866c75be746"
let clientSecret = "beaf4a68baa183ef8c9036a296e0e29145c84364c98a551b5a1504ad44885cc9"

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
