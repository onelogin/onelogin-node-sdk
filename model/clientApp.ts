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

export class ClientApp {
    'appId'?: number;
    'apiAuthId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "number"
        },
        {
            "name": "apiAuthId",
            "baseName": "api_auth_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ClientApp.attributeTypeMap;
    }
}

