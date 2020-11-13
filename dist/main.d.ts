import { OneLoginAppsRepository } from './onelogin/apps/apps';
import { OneLoginSmartMFA } from './onelogin/smart_mfa/smart_mfa';
import { OneLoginClientConfig } from './http_clients/onelogin_http_client';
import { HTTPRepository } from './repositories/http_repository';
import { HTTPClient } from './http_clients/http_interface';
export declare class Client {
    client: HTTPClient;
    resourceRepository: HTTPRepository;
    appsRepository: OneLoginAppsRepository;
    smartMFA: OneLoginSmartMFA;
    constructor(config: OneLoginClientConfig);
}
