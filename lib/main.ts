import OneLoginUsersRepository  from './onelogin/resources/users'
import OneLoginAppsRepository  from './onelogin/resources/apps'
import OneLoginSmartMFA  from './onelogin/use_cases/smart_mfa'
import PKCE  from './onelogin/use_cases/pkce'

import AxiosClientAdapter from './http_clients/client_adapters/axios_client_adapter'
import HTTPRepository from './repositories/http_repository'

import { OneLoginHTTPClient, OneLoginClientConfig } from './http_clients/onelogin_http_client'

export default class Client {
  pkce: PKCE
  smartMFA: OneLoginSmartMFA
  apps: OneLoginAppsRepository
  users: OneLoginUsersRepository

  constructor(config: OneLoginClientConfig){
    // Initialize HTTP Clients
    let httpClientAdapter = new AxiosClientAdapter();
    let oneLoginClient = new OneLoginHTTPClient(config, httpClientAdapter);

    // CRUD Resources
    let repository = new HTTPRepository(oneLoginClient);
    this.apps = new OneLoginAppsRepository(repository);
    this.users = new OneLoginUsersRepository(repository);

    // Use Cases
    this.pkce = new PKCE(oneLoginClient);
    this.smartMFA = new OneLoginSmartMFA(oneLoginClient);
  }
}
