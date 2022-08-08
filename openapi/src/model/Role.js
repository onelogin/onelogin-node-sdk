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

/**
 * The Role model module.
 * @module model/Role
 * @version 0.0.1
 */
class Role {
    /**
     * Constructs a new <code>Role</code>.
     * @alias module:model/Role
     * @param name {String} 
     */
    constructor(name) { 
        
        Role.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Role();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], ['Number']);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], ['Number']);
            }
            if (data.hasOwnProperty('admins')) {
                obj['admins'] = ApiClient.convertToType(data['admins'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Role.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Role.prototype['name'] = undefined;

/**
 * @member {Array.<Number>} apps
 */
Role.prototype['apps'] = undefined;

/**
 * @member {Array.<Number>} users
 */
Role.prototype['users'] = undefined;

/**
 * @member {Array.<Number>} admins
 */
Role.prototype['admins'] = undefined;






export default Role;

