import { HTTPClient } from '../../http_clients/http_interface';
import { SmartSMSRequest, SmartEmailRequest, SmartMFAResponse, OTP } from './model';
import { OneLoginResponse } from '../interfaces';
export declare class OneLoginSmartMFA {
    client: HTTPClient;
    constructor(client: HTTPClient);
    CheckMFARequired: (request: SmartSMSRequest | SmartEmailRequest) => Promise<OneLoginResponse<SmartMFAResponse>>;
    ValidateOTP: (token: OTP) => Promise<string | object>;
}
