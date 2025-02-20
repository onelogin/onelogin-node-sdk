import { RequestFile } from './models';

export class VerifyFactorLoginPagesRequest {
    /**
    * Provide the MFA device_id you are submitting for verification. The device_id is supplied by the Generate SAML Assertion API.
    */
    'deviceId': string;
    /**
    * state_token associated with the MFA device_id you are submitting. The state_token is supplied by the Generate SAML Assertion API.
    */
    'stateToken': string;
    /**
    * Provide the OTP value for the MFA factor you are submitting for verification.
    */
    'otpToken': string;
    /**
    * When verifying MFA via Protect Push, set this to true to stop additional push notifications being sent to the OneLogin Protect device.
    */
    'doNotNotify'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deviceId",
            "baseName": "device_id",
            "type": "string"
        },
        {
            "name": "stateToken",
            "baseName": "state_token",
            "type": "string"
        },
        {
            "name": "otpToken",
            "baseName": "otp_token",
            "type": "string"
        },
        {
            "name": "doNotNotify",
            "baseName": "do_not_notify",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return VerifyFactorLoginPagesRequest.attributeTypeMap;
    }
}

