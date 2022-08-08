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
import Action from './Action';
import Condition from './Condition';

/**
 * The Rule model module.
 * @module model/Rule
 * @version 0.0.1
 */
class Rule {
    /**
     * Constructs a new <code>Rule</code>.
     * @alias module:model/Rule
     */
    constructor() { 
        
        Rule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Rule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rule} obj Optional instance to populate.
     * @return {module:model/Rule} The populated <code>Rule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Rule();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('match')) {
                obj['match'] = ApiClient.convertToType(data['match'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [Condition]);
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [Action]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Rule.prototype['id'] = undefined;

/**
 * The name of the rule.
 * @member {String} name
 */
Rule.prototype['name'] = undefined;

/**
 * Indicates how conditions should be matched.
 * @member {module:model/Rule.MatchEnum} match
 */
Rule.prototype['match'] = undefined;

/**
 * Indicates if the rule is enabled or not.
 * @member {Boolean} enabled
 */
Rule.prototype['enabled'] = undefined;

/**
 * Indicates the order of the rule. When `null` this will default to last position.
 * @member {Number} position
 */
Rule.prototype['position'] = undefined;

/**
 * An array of conditions that the user must meet in order for the rule to be applied.
 * @member {Array.<module:model/Condition>} conditions
 */
Rule.prototype['conditions'] = undefined;

/**
 * An array of actions that will be applied to the users that are matched by the conditions.
 * @member {Array.<module:model/Action>} actions
 */
Rule.prototype['actions'] = undefined;





/**
 * Allowed values for the <code>match</code> property.
 * @enum {String}
 * @readonly
 */
Rule['MatchEnum'] = {

    /**
     * value: "all"
     * @const
     */
    "all": "all",

    /**
     * value: "any"
     * @const
     */
    "any": "any"
};



export default Rule;

