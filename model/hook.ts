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
import { HookConditionsInner } from './hookConditionsInner';
import { HookOptions } from './hookOptions';

export class Hook {
    /**
    * The Hook unique ID in OneLogin.
    */
    'id'?: string;
    /**
    * A string describing the type of hook. e.g. `pre-authentication`
    */
    'type': string;
    /**
    * Boolean to enable or disable the hook. Disabled hooks will not run.
    */
    'disabled': boolean = true;
    /**
    * The number of seconds to allow the hook function to run before before timing out. Maximum timeout varies based on the type of hook.
    */
    'timeout': number = 1;
    /**
    * Environment Variable objects that will be available via process.env.ENV_VAR_NAME in the hook code.
    */
    'envVars': Array<string>;
    /**
    * The Smart Hooks supported Node.js version to execute this hook with.
    */
    'runtime': string;
    /**
    * Number of retries if execution fails.
    */
    'retries': number = 0;
    /**
    * An object containing NPM packages that are bundled with the hook function.
    */
    'packages': object;
    /**
    * A base64 encoded string containing the javascript function code.
    */
    '_function': string;
    /**
    * The semantic version of the content that will be injected into this hook.
    */
    'contextVersion'?: string;
    /**
    * String describing the state of the hook function. When a hook is ready and disabled is false it will be executed.
    */
    'status'?: Hook.StatusEnum;
    'options'?: HookOptions;
    /**
    * An array of objects that let you limit the execution of a hook to users in specific roles.
    */
    'conditions'?: Array<HookConditionsInner>;
    /**
    * ISO8601 format date that they hook function was created.
    */
    'createdAt'?: string;
    /**
    * ISO8601 format date that they hook function was last updated.
    */
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "number"
        },
        {
            "name": "envVars",
            "baseName": "env_vars",
            "type": "Array<string>"
        },
        {
            "name": "runtime",
            "baseName": "runtime",
            "type": "string"
        },
        {
            "name": "retries",
            "baseName": "retries",
            "type": "number"
        },
        {
            "name": "packages",
            "baseName": "packages",
            "type": "object"
        },
        {
            "name": "_function",
            "baseName": "function",
            "type": "string"
        },
        {
            "name": "contextVersion",
            "baseName": "context_version",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Hook.StatusEnum"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "HookOptions"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<HookConditionsInner>"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Hook.attributeTypeMap;
    }
}

export namespace Hook {
    export enum StatusEnum {
        Ready = <any> 'ready',
        CreateQueued = <any> 'create-queued',
        CreateRunning = <any> 'create-running',
        CreateFailed = <any> 'create-failed',
        UpdateQueued = <any> 'update-queued',
        UpdateRunning = <any> 'update-running',
        UpdateFailed = <any> 'update-failed'
    }
}