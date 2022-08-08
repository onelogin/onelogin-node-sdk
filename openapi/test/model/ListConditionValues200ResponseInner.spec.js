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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OneLoginApi);
  }
}(this, function(expect, OneLoginApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OneLoginApi.ListConditionValues200ResponseInner();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ListConditionValues200ResponseInner', function() {
    it('should create an instance of ListConditionValues200ResponseInner', function() {
      // uncomment below and update the code to test ListConditionValues200ResponseInner
      //var instance = new OneLoginApi.ListConditionValues200ResponseInner();
      //expect(instance).to.be.a(OneLoginApi.ListConditionValues200ResponseInner);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new OneLoginApi.ListConditionValues200ResponseInner();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new OneLoginApi.ListConditionValues200ResponseInner();
      //expect(instance).to.be();
    });

  });

}));
