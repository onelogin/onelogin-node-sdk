import { HTTPClient } from '../../http_clients/http_interface';
import { SmartSMSRequest, SmartEmailRequest, SmartMFAResponse, OTP } from './model';
export declare class OneLoginSmartMFA {
    client: HTTPClient;
    constructor(client: HTTPClient);
    CheckMFARequired: (request: SmartSMSRequest | SmartEmailRequest) => Promise<SmartMFAResponse>;
    ValidateOTP: (token: OTP) => Promise<string | object>;
}
