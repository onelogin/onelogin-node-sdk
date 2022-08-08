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

export class GetRateLimit200ResponseData {
    'xRateLimitLimit'?: number;
    'xRateLimitRemaining'?: number;
    'xRateLimitReset'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "xRateLimitLimit",
            "baseName": "X-RateLimit-Limit",
            "type": "number"
        },
        {
            "name": "xRateLimitRemaining",
            "baseName": "X-RateLimit-Remaining",
            "type": "number"
        },
        {
            "name": "xRateLimitReset",
            "baseName": "X-RateLimit-Reset",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetRateLimit200ResponseData.attributeTypeMap;
    }
}

