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

export class Action {
    /**
    * The action to apply
    */
    'action'?: string;
    /**
    * Only applicable to provisioned and set_* actions. Items in the array will be a plain text string or valid value for the selected action.
    */
    'value'?: Array<string>;
    /**
    * A regular expression to extract a value. Applies to provisionable, multi-selects, and string actions.
    */
    'expression'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<string>"
        },
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return Action.attributeTypeMap;
    }
}

