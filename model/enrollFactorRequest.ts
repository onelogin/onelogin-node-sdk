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

export class EnrollFactorRequest {
    /**
    * The identifier of the factor to enroll the user with.
    */
    'factorId': number;
    /**
    * A name for the users device.
    */
    'displayName': string;
    /**
    * Defaults to 120. Valid values are: 120-900 seconds.
    */
    'expiresIn'?: string;
    /**
    * Defaults to false.
    */
    'verified'?: boolean;
    /**
    * Redirects MagicLink success page to specified URL after 2 seconds.
    */
    'redirectTo'?: string;
    /**
    * A message template that will be sent via SMS. Max length of the message after template items are inserted is 160 characters including the OTP code.
    */
    'customMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "factorId",
            "baseName": "factor_id",
            "type": "number"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "expiresIn",
            "baseName": "expires_in",
            "type": "string"
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "boolean"
        },
        {
            "name": "redirectTo",
            "baseName": "redirect_to",
            "type": "string"
        },
        {
            "name": "customMessage",
            "baseName": "custom_message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EnrollFactorRequest.attributeTypeMap;
    }
}
