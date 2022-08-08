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

export class GenerateSamlAssertionRequest {
    /**
    * Set this to the username or email of the OneLogin user accessing the app for which you want to generate a SAML token.
    */
    'usernameOrEmail': string;
    /**
    * Password of the OneLogin user accessing the app for which you want to generate a SAML token.
    */
    'password': string;
    /**
    * App ID of the app for which you want to generate a SAML token. This is the app ID in OneLogin.
    */
    'appId': string;
    /**
    * Set to the subdomain of the OneLogin user accessing the app for which you want to generate a SAML token.
    */
    'subdomain': string;
    /**
    * Whitelisted IP address, if MFA is required and you need to honor IP address whitelisting defined in MFA policies.
    */
    'ipAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "usernameOrEmail",
            "baseName": "username_or_email",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "string"
        },
        {
            "name": "subdomain",
            "baseName": "subdomain",
            "type": "string"
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GenerateSamlAssertionRequest.attributeTypeMap;
    }
}

