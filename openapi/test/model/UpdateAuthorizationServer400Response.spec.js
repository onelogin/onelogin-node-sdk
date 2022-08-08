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
    instance = new OneLoginApi.UpdateAuthorizationServer400Response();
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

  describe('UpdateAuthorizationServer400Response', function() {
    it('should create an instance of UpdateAuthorizationServer400Response', function() {
      // uncomment below and update the code to test UpdateAuthorizationServer400Response
      //var instance = new OneLoginApi.UpdateAuthorizationServer400Response();
      //expect(instance).to.be.a(OneLoginApi.UpdateAuthorizationServer400Response);
    });

    it('should have the property field (base name: "field")', function() {
      // uncomment below and update the code to test the property field
      //var instance = new OneLoginApi.UpdateAuthorizationServer400Response();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new OneLoginApi.UpdateAuthorizationServer400Response();
      //expect(instance).to.be();
    });

    it('should have the property statusCode (base name: "statusCode")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instance = new OneLoginApi.UpdateAuthorizationServer400Response();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new OneLoginApi.UpdateAuthorizationServer400Response();
      //expect(instance).to.be();
    });

  });

}));
