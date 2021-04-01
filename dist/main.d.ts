import OneLoginUsersRepository from './onelogin/resources/users';
import OneLoginAppsRepository from './onelogin/resources/apps';
import OneLoginSmartMFA from './onelogin/use_cases/smart_mfa';
import PKCE from './onelogin/use_cases/pkce';
import HTTPRepository from './repositories/http_repository';
import { OneLoginClientConfig } from './http_clients/onelogin_http_client';
export default class Client {
    pkce: PKCE;
    smartMFA: OneLoginSmartMFA;
    resourceRepository: HTTPRepository;
    appsRepository: OneLoginAppsRepository;
    usersRepository: OneLoginUsersRepository;
    constructor(config: OneLoginClientConfig);
}
