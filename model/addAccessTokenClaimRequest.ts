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

export class AddAccessTokenClaimRequest {
    'name'?: string;
    'userAttributeMappings'?: string;
    'userAttributeMacros'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "userAttributeMappings",
            "baseName": "user_attribute_mappings",
            "type": "string"
        },
        {
            "name": "userAttributeMacros",
            "baseName": "user_attribute_macros",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddAccessTokenClaimRequest.attributeTypeMap;
    }
}

