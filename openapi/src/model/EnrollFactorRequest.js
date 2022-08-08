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
 * The EnrollFactorRequest model module.
 * @module model/EnrollFactorRequest
 * @version 0.0.1
 */
class EnrollFactorRequest {
    /**
     * Constructs a new <code>EnrollFactorRequest</code>.
     * @alias module:model/EnrollFactorRequest
     * @param factorId {Number} The identifier of the factor to enroll the user with.
     * @param displayName {String} A name for the users device.
     */
    constructor(factorId, displayName) { 
        
        EnrollFactorRequest.initialize(this, factorId, displayName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, factorId, displayName) { 
        obj['factor_id'] = factorId;
        obj['display_name'] = displayName;
    }

    /**
     * Constructs a <code>EnrollFactorRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnrollFactorRequest} obj Optional instance to populate.
     * @return {module:model/EnrollFactorRequest} The populated <code>EnrollFactorRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnrollFactorRequest();

            if (data.hasOwnProperty('factor_id')) {
                obj['factor_id'] = ApiClient.convertToType(data['factor_id'], 'Number');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'String');
            }
            if (data.hasOwnProperty('verified')) {
                obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
            }
            if (data.hasOwnProperty('redirect_to')) {
                obj['redirect_to'] = ApiClient.convertToType(data['redirect_to'], 'String');
            }
            if (data.hasOwnProperty('custom_message')) {
                obj['custom_message'] = ApiClient.convertToType(data['custom_message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The identifier of the factor to enroll the user with.
 * @member {Number} factor_id
 */
EnrollFactorRequest.prototype['factor_id'] = undefined;

/**
 * A name for the users device.
 * @member {String} display_name
 */
EnrollFactorRequest.prototype['display_name'] = undefined;

/**
 * Defaults to 120. Valid values are: 120-900 seconds.
 * @member {String} expires_in
 */
EnrollFactorRequest.prototype['expires_in'] = undefined;

/**
 * Defaults to false.
 * @member {Boolean} verified
 */
EnrollFactorRequest.prototype['verified'] = undefined;

/**
 * Redirects MagicLink success page to specified URL after 2 seconds.
 * @member {String} redirect_to
 */
EnrollFactorRequest.prototype['redirect_to'] = undefined;

/**
 * A message template that will be sent via SMS. Max length of the message after template items are inserted is 160 characters including the OTP code.
 * @member {String} custom_message
 */
EnrollFactorRequest.prototype['custom_message'] = undefined;






export default EnrollFactorRequest;

