import OneLoginUsersRepository  from './onelogin/resources/users'
import OneLoginAppsRepository  from './onelogin/resources/apps'
import OneLoginSmartMFA  from './onelogin/use_cases/smart_mfa'
import PKCE  from './onelogin/use_cases/pkce'

import AxiosClientAdapter from './http_clients/client_adapters/axios_client_adapter'
import HTTPRepository from './repositories/http_repository'

import { OneLoginHTTPClient, OneLoginClientConfig } from './http_clients/onelogin_http_client'
import { BlankHTTPClient } from './http_clients/blank_http_client'

export default class Client {
  pkce: PKCE
  smartMFA: OneLoginSmartMFA
  resourceRepository: HTTPRepository
  appsRepository: OneLoginAppsRepository
  usersRepository: OneLoginUsersRepository

  constructor(config: OneLoginClientConfig){
    // Initialize HTTP Clients
    let oneLoginClient = new OneLoginHTTPClient(config, new AxiosClientAdapter())
    let httpClient = new BlankHTTPClient({ timeout: 3000 }, new AxiosClientAdapter())

    // CRUD Resources
    this.resourceRepository = new HTTPRepository(oneLoginClient)
    this.appsRepository = new OneLoginAppsRepository(this.resourceRepository)
    this.usersRepository = new OneLoginUsersRepository(this.resourceRepository)

    // Use Cases
    this.pkce = new PKCE(httpClient)
    this.smartMFA = new OneLoginSmartMFA(oneLoginClient)
  }
}
