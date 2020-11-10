import { OneLoginAppsRepository } from './onelogin/apps/apps'
import { OneLoginSmartMFA } from './onelogin/smart_mfa/smart_mfa'

import { AxiosClientAdapter } from './http_clients/client_adapters/axios_client_adapter'
import { OneLoginHTTPClient, OneLoginClientConfig } from './http_clients/onelogin_http_client'
import { HTTPRepository } from './repositories/http_repository'
import { HTTPClient } from './http_clients/http_interface'

export class OneLoginClient {
  client: HTTPClient
  resourceRepository: HTTPRepository
  appsRepository: OneLoginAppsRepository
  smartMFA: OneLoginSmartMFA

  constructor(config: OneLoginClientConfig){
    this.client = new OneLoginHTTPClient(config, new AxiosClientAdapter())
    this.resourceRepository = new HTTPRepository(this.client)
    this.appsRepository = new OneLoginAppsRepository(this.resourceRepository)
    this.smartMFA = new OneLoginSmartMFA(this.client)
  }
}

module.exports = {
  Client: OneLoginClient
}
