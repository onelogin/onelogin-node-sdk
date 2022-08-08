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
    instance = new OneLoginApi.GenerateMfaToken200Response();
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

  describe('GenerateMfaToken200Response', function() {
    it('should create an instance of GenerateMfaToken200Response', function() {
      // uncomment below and update the code to test GenerateMfaToken200Response
      //var instance = new OneLoginApi.GenerateMfaToken200Response();
      //expect(instance).to.be.a(OneLoginApi.GenerateMfaToken200Response);
    });

    it('should have the property mfaToken (base name: "mfa_token")', function() {
      // uncomment below and update the code to test the property mfaToken
      //var instance = new OneLoginApi.GenerateMfaToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property reusable (base name: "reusable")', function() {
      // uncomment below and update the code to test the property reusable
      //var instance = new OneLoginApi.GenerateMfaToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expires_at")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new OneLoginApi.GenerateMfaToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "device_id")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instance = new OneLoginApi.GenerateMfaToken200Response();
      //expect(instance).to.be();
    });

  });

}));
