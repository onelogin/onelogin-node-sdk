/**
 * OneLogin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0.0-alpha.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class VerifyFactorSamlRequest {
    /**
    * App ID of the app for which you want to generate a SAML token. This is the app ID in OneLogin.
    */
    'appId': string;
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
    'otpToken'?: string;
    /**
    * When verifying MFA via Protect Push, set this to true to stop additional push notifications being sent to the OneLogin Protect device.
    */
    'doNotNotify'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "string"
        },
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
        return VerifyFactorSamlRequest.attributeTypeMap;
    }
}

