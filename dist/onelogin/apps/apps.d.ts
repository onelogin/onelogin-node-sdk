import { Repository } from '../../repositories/repository_interfaces';
import { OneLoginResponse } from '../interfaces';
import { App } from './model';
export declare class OneLoginAppsRepository {
    repository: Repository;
    endpoint: string;
    constructor(repository: Repository);
    Query: (query?: object) => Promise<OneLoginResponse<App[]>>;
    FindByID: (id: number) => Promise<OneLoginResponse<App>>;
    Create: (app: App) => Promise<OneLoginResponse<App>>;
    Update: (app: App) => Promise<OneLoginResponse<App>>;
    Destroy: (id: number) => Promise<object>;
}
