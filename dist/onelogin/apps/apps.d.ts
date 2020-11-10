import { Repository } from '../../repositories/repository_interfaces';
import { App } from './model';
export declare class OneLoginAppsRepository {
    repository: Repository;
    endpoint: string;
    constructor(repository: Repository);
    Query: (query?: object) => Promise<App[]>;
    FindByID: (id: number) => Promise<App>;
    Create: (app: App) => Promise<App>;
    Update: (app: App) => Promise<App>;
    Destroy: (id: number) => Promise<object>;
}
