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
 * The GetRateLimit200ResponseData model module.
 * @module model/GetRateLimit200ResponseData
 * @version 0.0.1
 */
class GetRateLimit200ResponseData {
    /**
     * Constructs a new <code>GetRateLimit200ResponseData</code>.
     * @alias module:model/GetRateLimit200ResponseData
     */
    constructor() { 
        
        GetRateLimit200ResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRateLimit200ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRateLimit200ResponseData} obj Optional instance to populate.
     * @return {module:model/GetRateLimit200ResponseData} The populated <code>GetRateLimit200ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRateLimit200ResponseData();

            if (data.hasOwnProperty('X-RateLimit-Limit')) {
                obj['X-RateLimit-Limit'] = ApiClient.convertToType(data['X-RateLimit-Limit'], 'Number');
            }
            if (data.hasOwnProperty('X-RateLimit-Remaining')) {
                obj['X-RateLimit-Remaining'] = ApiClient.convertToType(data['X-RateLimit-Remaining'], 'Number');
            }
            if (data.hasOwnProperty('X-RateLimit-Reset')) {
                obj['X-RateLimit-Reset'] = ApiClient.convertToType(data['X-RateLimit-Reset'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} X-RateLimit-Limit
 */
GetRateLimit200ResponseData.prototype['X-RateLimit-Limit'] = undefined;

/**
 * @member {Number} X-RateLimit-Remaining
 */
GetRateLimit200ResponseData.prototype['X-RateLimit-Remaining'] = undefined;

/**
 * @member {Number} X-RateLimit-Reset
 */
GetRateLimit200ResponseData.prototype['X-RateLimit-Reset'] = undefined;






export default GetRateLimit200ResponseData;

