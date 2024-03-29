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
import { GenerateMfaToken422ResponseDetails } from './generateMfaToken422ResponseDetails';

export class GenerateMfaToken422Response {
    'statusCode'?: number;
    'name'?: string;
    'message'?: string;
    'details'?: GenerateMfaToken422ResponseDetails;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "GenerateMfaToken422ResponseDetails"
        }    ];

    static getAttributeTypeMap() {
        return GenerateMfaToken422Response.attributeTypeMap;
    }
}

