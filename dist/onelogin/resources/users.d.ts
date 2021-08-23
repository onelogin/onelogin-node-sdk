import { Repository } from '../../repositories/interface';
import { OneLoginResponse } from '..//interface';
export default class OneLoginUsersRepository {
    repository: Repository;
    endpoint: string;
    constructor(repository: Repository);
    Query: (query?: object) => Promise<OneLoginResponse<User[]>>;
    FindByID: (id: number) => Promise<OneLoginResponse<User>>;
    Create: (user: User) => Promise<OneLoginResponse<User>>;
    Update: (user: User) => Promise<OneLoginResponse<User>>;
    Destroy: (id: number) => Promise<OneLoginResponse<object>>;
}
export interface User {
    username?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    distinguished_name?: string;
    samaccountname?: string;
    user_principal_name?: string;
    member_of?: string;
    phone?: string;
    password?: string;
    password_confirmation?: string;
    password_algorithm?: string;
    salt?: string;
    title?: string;
    company?: string;
    department?: string;
    comment?: string;
    created_at?: Date;
    updated_at?: Date;
    activated_at?: Date;
    last_login?: Date;
    password_changed_at?: Date;
    locked_until?: Date;
    invitation_sent_at?: Date;
    state?: number;
    status?: number;
    invalid_login_attempts?: number;
    group_id?: number;
    directory_id?: number;
    trusted_idp_id?: number;
    manager_ad_id?: number;
    manager_user_id?: number;
    external_id?: number;
    id?: number;
}
