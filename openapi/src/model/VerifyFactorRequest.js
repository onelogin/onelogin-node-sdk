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
 * The VerifyFactorRequest model module.
 * @module model/VerifyFactorRequest
 * @version 0.0.1
 */
class VerifyFactorRequest {
    /**
     * Constructs a new <code>VerifyFactorRequest</code>.
     * @alias module:model/VerifyFactorRequest
     */
    constructor() { 
        
        VerifyFactorRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VerifyFactorRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyFactorRequest} obj Optional instance to populate.
     * @return {module:model/VerifyFactorRequest} The populated <code>VerifyFactorRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyFactorRequest();

            if (data.hasOwnProperty('otp')) {
                obj['otp'] = ApiClient.convertToType(data['otp'], 'String');
            }
            if (data.hasOwnProperty('device_id')) {
                obj['device_id'] = ApiClient.convertToType(data['device_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * OTP code provided by the device or SMS message sent to user.
 * @member {String} otp
 */
VerifyFactorRequest.prototype['otp'] = undefined;

/**
 * ID of the specified device which has been registerd for the given user.
 * @member {Number} device_id
 */
VerifyFactorRequest.prototype['device_id'] = undefined;






export default VerifyFactorRequest;

