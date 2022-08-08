/**
 * OneLogin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AuthServerConfiguration from './AuthServerConfiguration';

/**
 * The GetAuthorizationServer200Response model module.
 * @module model/GetAuthorizationServer200Response
 * @version 0.0.1
 */
class GetAuthorizationServer200Response {
    /**
     * Constructs a new <code>GetAuthorizationServer200Response</code>.
     * @alias module:model/GetAuthorizationServer200Response
     */
    constructor() { 
        
        GetAuthorizationServer200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAuthorizationServer200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAuthorizationServer200Response} obj Optional instance to populate.
     * @return {module:model/GetAuthorizationServer200Response} The populated <code>GetAuthorizationServer200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAuthorizationServer200Response();

            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = AuthServerConfiguration.constructFromObject(data['configuration']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AuthServerConfiguration} configuration
 */
GetAuthorizationServer200Response.prototype['configuration'] = undefined;

/**
 * @member {Number} id
 */
GetAuthorizationServer200Response.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GetAuthorizationServer200Response.prototype['description'] = undefined;

/**
 * @member {String} name
 */
GetAuthorizationServer200Response.prototype['name'] = undefined;






export default GetAuthorizationServer200Response;

