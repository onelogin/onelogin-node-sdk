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
import { Schema1AddedBy } from './schema1AddedBy';

export class Schema1 {
    'id'?: number;
    'name'?: string;
    'username'?: string;
    'addedBy'?: Schema1AddedBy;
    'addedAt'?: string;
    /**
    * Indicates if assigned to role or not. Defaults to true.
    */
    'assigned'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "addedBy",
            "baseName": "added_by",
            "type": "Schema1AddedBy"
        },
        {
            "name": "addedAt",
            "baseName": "added_at",
            "type": "string"
        },
        {
            "name": "assigned",
            "baseName": "assigned",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Schema1.attributeTypeMap;
    }
}
