# OneLoginApi.DefaultApi

All URIs are relative to *https://onelogininc.onelogin.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateFactor**](DefaultApi.md#activateFactor) | **POST** /api/2/mfa/users/{user_id}/verifications | 
[**addAccessTokenClaim**](DefaultApi.md#addAccessTokenClaim) | **POST** /api/2/api_authorizations/{id}/claims | 
[**addClientApp**](DefaultApi.md#addClientApp) | **POST** /api/2/api_authorizations/{id}/clients | 
[**addRoleAdmins**](DefaultApi.md#addRoleAdmins) | **POST** /api/2/roles/{role_id}/admins | 
[**addRoleUsers**](DefaultApi.md#addRoleUsers) | **POST** /api/2/roles/{role_id}/users | 
[**addScope**](DefaultApi.md#addScope) | **POST** /api/2/api_authorizations/{id}/scopes | 
[**bulkMappingSort**](DefaultApi.md#bulkMappingSort) | **PUT** /api/2/apps/mappings/sort | 
[**bulkSort**](DefaultApi.md#bulkSort) | **PUT** /api/2/apps/{app_id}/rules/sort | 
[**createApp**](DefaultApi.md#createApp) | **POST** /api/2/apps | 
[**createAuthorizationServer**](DefaultApi.md#createAuthorizationServer) | **POST** /api/2/api_authorizations | 
[**createEnvironmentVariable**](DefaultApi.md#createEnvironmentVariable) | **POST** /api/2/hooks/envs | 
[**createHook**](DefaultApi.md#createHook) | **POST** /api/2/hooks | 
[**createMapping**](DefaultApi.md#createMapping) | **POST** /api/2/mappings | 
[**createRiskRule**](DefaultApi.md#createRiskRule) | **POST** /api/2/risk/rules | 
[**createRoles**](DefaultApi.md#createRoles) | **POST** /api/2/roles | 
[**createRule**](DefaultApi.md#createRule) | **POST** /api/2/apps/{app_id}/rules | 
[**createUser**](DefaultApi.md#createUser) | **POST** /api/2/users | 
[**deleteAccessTokenClaim**](DefaultApi.md#deleteAccessTokenClaim) | **DELETE** /api/2/api_authorizations/{id}/claims/{claim_id} | 
[**deleteApp**](DefaultApi.md#deleteApp) | **DELETE** /api/2/apps/{app_id} | 
[**deleteAppParameter**](DefaultApi.md#deleteAppParameter) | **DELETE** /api/2/apps/{app_id}/parameters/{parameter_id} | 
[**deleteAuthorizationServer**](DefaultApi.md#deleteAuthorizationServer) | **DELETE** /api/2/api_authorizations/{id} | 
[**deleteEnvironmentVariable**](DefaultApi.md#deleteEnvironmentVariable) | **DELETE** /api/2/hooks/envs/{envvar_id} | 
[**deleteFactor**](DefaultApi.md#deleteFactor) | **DELETE** /api/2/mfa/users/{user_id}/devices/{device_id} | 
[**deleteHook**](DefaultApi.md#deleteHook) | **DELETE** /api/2/hooks/{hook_id} | 
[**deleteMapping**](DefaultApi.md#deleteMapping) | **DELETE** /api/2/mappings/{mapping_id} | 
[**deleteRiskRule**](DefaultApi.md#deleteRiskRule) | **DELETE** /api/2/risk/rules/{risk_rule_id} | 
[**deleteRole**](DefaultApi.md#deleteRole) | **DELETE** /api/2/roles/{role_id} | 
[**deleteRule**](DefaultApi.md#deleteRule) | **DELETE** /api/2/apps/{app_id}/rules/{rule_id} | 
[**deleteScope**](DefaultApi.md#deleteScope) | **DELETE** /api/2/api_authorizations/{id}/scopes/{scope_id} | 
[**deleteUser**](DefaultApi.md#deleteUser) | **DELETE** /api/2/users/{user_id} | 
[**dryRunMapping**](DefaultApi.md#dryRunMapping) | **POST** /api/2/mappings/{mapping_id}/dryrun | 
[**enrollFactor**](DefaultApi.md#enrollFactor) | **POST** /api/2/mfa/users/{user_id}/registrations | 
[**generateMfaToken**](DefaultApi.md#generateMfaToken) | **POST** /api/2/mfs/users/{user_id}/mfa_token | 
[**generateSamlAssertion**](DefaultApi.md#generateSamlAssertion) | **POST** /api/2/saml_assertion | 
[**generateToken**](DefaultApi.md#generateToken) | **POST** /auth/oauth2/v2/token | 
[**getApp**](DefaultApi.md#getApp) | **GET** /api/2/apps/{app_id} | 
[**getAuthorizationServer**](DefaultApi.md#getAuthorizationServer) | **GET** /api/2/api_authorizations/{id} | 
[**getAvailableFactors**](DefaultApi.md#getAvailableFactors) | **GET** /api/2/mfa/users/{user_id}/factors | 
[**getClientApps**](DefaultApi.md#getClientApps) | **GET** /api/2/api_authorizations/{id}/clients | 
[**getEnrolledFactors**](DefaultApi.md#getEnrolledFactors) | **GET** /api/2/mfa/users/{user_id}/devices | 
[**getEnvironmentVariable**](DefaultApi.md#getEnvironmentVariable) | **GET** /api/2/hooks/envs/{envvar_id} | 
[**getHook**](DefaultApi.md#getHook) | **GET** /api/2/hooks/{hook_id} | 
[**getLogs**](DefaultApi.md#getLogs) | **GET** /api/2/hooks/{hook_id}/logs | 
[**getMapping**](DefaultApi.md#getMapping) | **GET** /api/2/mappings/{mapping_id} | 
[**getRateLimit**](DefaultApi.md#getRateLimit) | **GET** /auth/rate_limit | 
[**getRiskRule**](DefaultApi.md#getRiskRule) | **GET** /api/2/risk/rules/{risk_rule_id} | 
[**getRiskScore**](DefaultApi.md#getRiskScore) | **POST** /api/2/risk/verify | 
[**getRole**](DefaultApi.md#getRole) | **GET** /api/2/roles/{role_id} | 
[**getRoleAdmins**](DefaultApi.md#getRoleAdmins) | **GET** /api/2/roles/{role_id}/admins | 
[**getRoleApps**](DefaultApi.md#getRoleApps) | **GET** /api/2/roles/{role_id}/apps | 
[**getRoleUsers**](DefaultApi.md#getRoleUsers) | **GET** /api/2/roles/{role_id}/users | 
[**getRule**](DefaultApi.md#getRule) | **GET** /api/2/apps/{app_id}/rules/{rule_id} | 
[**getScoreInsights**](DefaultApi.md#getScoreInsights) | **GET** /api/2/risk/scores | 
[**getUser**](DefaultApi.md#getUser) | **GET** /api/2/users/{user_id} | 
[**getUserApps**](DefaultApi.md#getUserApps) | **GET** /api/2/users/{user_id}/apps | 
[**listAccessTokenClaims**](DefaultApi.md#listAccessTokenClaims) | **GET** /api/2/api_authorizations/{id}/claims | 
[**listActionValues**](DefaultApi.md#listActionValues) | **GET** /api/2/apps/{app_id}/rules/actions/{actuion_value}/values | 
[**listActions**](DefaultApi.md#listActions) | **GET** /api/2/apps/{app_id}/rules/actions | 
[**listAppUsers**](DefaultApi.md#listAppUsers) | **GET** /api/2/apps/{app_id}/users | 
[**listApps**](DefaultApi.md#listApps) | **GET** /api/2/apps | 
[**listAuthorizationServers**](DefaultApi.md#listAuthorizationServers) | **GET** /api/2/api_authorizations | 
[**listConditionOperators**](DefaultApi.md#listConditionOperators) | **GET** /api/2/apps/{app_id}/rules/conditions/{condition_value}/operators | 
[**listConditionValues**](DefaultApi.md#listConditionValues) | **GET** /api/2/apps/{app_id}/rules/conditions/{condition_value}/values | 
[**listConditions**](DefaultApi.md#listConditions) | **GET** /api/2/apps/{app_id}/rules/conditions | 
[**listConnectors**](DefaultApi.md#listConnectors) | **GET** /api/2/connectors | 
[**listEnvironmentVariables**](DefaultApi.md#listEnvironmentVariables) | **GET** /api/2/hooks/envs | 
[**listHooks**](DefaultApi.md#listHooks) | **GET** /api/2/hooks | 
[**listMappingActionValues**](DefaultApi.md#listMappingActionValues) | **GET** /api/2/apps/mappings/actions/{actuion_value}/values | 
[**listMappingActions**](DefaultApi.md#listMappingActions) | **GET** /api/2/apps/mappings/actions | 
[**listMappingConditionOperators**](DefaultApi.md#listMappingConditionOperators) | **GET** /api/2/apps/mappings/conditions/{condition_value}/operators | 
[**listMappingConditionValues**](DefaultApi.md#listMappingConditionValues) | **GET** /api/2/apps/mappings/conditions/{condition_value}/values | 
[**listMappingConditions**](DefaultApi.md#listMappingConditions) | **GET** /api/2/apps/mappings/conditions | 
[**listMappings**](DefaultApi.md#listMappings) | **GET** /api/2/mappings | 
[**listRiskRules**](DefaultApi.md#listRiskRules) | **GET** /api/2/risk/rules | 
[**listRoles**](DefaultApi.md#listRoles) | **GET** /api/2/roles | 
[**listRules**](DefaultApi.md#listRules) | **GET** /api/2/apps/{app_id}/rules | 
[**listScopes**](DefaultApi.md#listScopes) | **GET** /api/2/api_authorizations/{id}/scopes | 
[**listUsers**](DefaultApi.md#listUsers) | **GET** /api/2/users | 
[**removeClientApp**](DefaultApi.md#removeClientApp) | **DELETE** /api/2/api_authorizations/{id}/clients/{client_app_id} | 
[**removeRoleAdmins**](DefaultApi.md#removeRoleAdmins) | **DELETE** /api/2/roles/{role_id}/admins | 
[**removeRoleUsers**](DefaultApi.md#removeRoleUsers) | **DELETE** /api/2/roles/{role_id}/users | 
[**revokeToken**](DefaultApi.md#revokeToken) | **POST** /auth/oauth2/revoke | 
[**setRoleApps**](DefaultApi.md#setRoleApps) | **PUT** /api/2/roles/{role_id}/apps | 
[**trackEvent**](DefaultApi.md#trackEvent) | **POST** /api/2/risk/events | 
[**updateAccessTokenClaim**](DefaultApi.md#updateAccessTokenClaim) | **PUT** /api/2/api_authorizations/{id}/claims/{claim_id} | 
[**updateApp**](DefaultApi.md#updateApp) | **PUT** /api/2/apps/{app_id} | 
[**updateAuthorizationServer**](DefaultApi.md#updateAuthorizationServer) | **PUT** /api/2/api_authorizations/{id} | 
[**updateClientApp**](DefaultApi.md#updateClientApp) | **PUT** /api/2/api_authorizations/{id}/clients/{client_app_id} | 
[**updateEnvironmentVariable**](DefaultApi.md#updateEnvironmentVariable) | **PUT** /api/2/hooks/envs/{envvar_id} | 
[**updateHook**](DefaultApi.md#updateHook) | **PUT** /api/2/hooks/{hook_id} | 
[**updateMapping**](DefaultApi.md#updateMapping) | **PUT** /api/2/mappings/{mapping_id} | 
[**updateRiskRule**](DefaultApi.md#updateRiskRule) | **PUT** /api/2/risk/rules/{risk_rule_id} | 
[**updateRole**](DefaultApi.md#updateRole) | **PUT** /api/2/roles/{role_id} | 
[**updateRule**](DefaultApi.md#updateRule) | **PUT** /api/2/apps/{app_id}/rules/{rule_id} | 
[**updateScope**](DefaultApi.md#updateScope) | **PUT** /api/2/api_authorizations/{id}/scopes/{scope_id} | 
[**updateUser**](DefaultApi.md#updateUser) | **PUT** /api/2/users/{user_id} | 
[**verifyEnrollment**](DefaultApi.md#verifyEnrollment) | **PUT** /api/2/mfa/users/{user_id}/registrations/{registration_id} | 
[**verifyEnrollmentVoiceProtect**](DefaultApi.md#verifyEnrollmentVoiceProtect) | **GET** /api/2/mfa/users/{user_id}/registrations/{registration_id} | 
[**verifyFactor**](DefaultApi.md#verifyFactor) | **PUT** /api/2/mfa/users/{user_id}/verifications/{verification_id} | 
[**verifyFactorSaml**](DefaultApi.md#verifyFactorSaml) | **POST** /api/2/saml_assertion/verify_factor | 
[**verifyFactorVoice**](DefaultApi.md#verifyFactorVoice) | **GET** /api/2/mfa/users/{user_id}/verifications/{verification_id} | 



## activateFactor

> activateFactor(authorization, userId, activateFactorRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user.
let activateFactorRequest = new OneLoginApi.ActivateFactorRequest(); // ActivateFactorRequest | 
apiInstance.activateFactor(authorization, userId, activateFactorRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user. | 
 **activateFactorRequest** | [**ActivateFactorRequest**](ActivateFactorRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addAccessTokenClaim

> Id addAccessTokenClaim(authorization, id, addAccessTokenClaimRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
let addAccessTokenClaimRequest = new OneLoginApi.AddAccessTokenClaimRequest(); // AddAccessTokenClaimRequest | 
apiInstance.addAccessTokenClaim(authorization, id, addAccessTokenClaimRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 
 **addAccessTokenClaimRequest** | [**AddAccessTokenClaimRequest**](AddAccessTokenClaimRequest.md)|  | 

### Return type

[**Id**](Id.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addClientApp

> ClientApp addClientApp(authorization, id, addClientAppRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
let addClientAppRequest = new OneLoginApi.AddClientAppRequest(); // AddClientAppRequest | 
apiInstance.addClientApp(authorization, id, addClientAppRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 
 **addClientAppRequest** | [**AddClientAppRequest**](AddClientAppRequest.md)|  | 

### Return type

[**ClientApp**](ClientApp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addRoleAdmins

> [AddRoleUsers200ResponseInner] addRoleAdmins(authorization, roleId, requestBody)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
let requestBody = [null]; // [Number] | 
apiInstance.addRoleAdmins(authorization, roleId, requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**[AddRoleUsers200ResponseInner]**](AddRoleUsers200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addRoleUsers

> [AddRoleUsers200ResponseInner] addRoleUsers(authorization, roleId, requestBody)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
let requestBody = [null]; // [Number] | 
apiInstance.addRoleUsers(authorization, roleId, requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**[AddRoleUsers200ResponseInner]**](AddRoleUsers200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addScope

> Id addScope(authorization, id, addScopeRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
let addScopeRequest = new OneLoginApi.AddScopeRequest(); // AddScopeRequest | 
apiInstance.addScope(authorization, id, addScopeRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 
 **addScopeRequest** | [**AddScopeRequest**](AddScopeRequest.md)|  | 

### Return type

[**Id**](Id.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkMappingSort

> [Number] bulkMappingSort(authorization, requestBody)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let requestBody = [null]; // [Number] | The request body must contain an array of User Mapping IDs in the desired order.
apiInstance.bulkMappingSort(authorization, requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **requestBody** | [**[Number]**](Number.md)| The request body must contain an array of User Mapping IDs in the desired order. | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkSort

> [Number] bulkSort(authorization, appId, requestBody)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let requestBody = [null]; // [Number] | The request body must contain an array of App Rule IDs in the desired order.
apiInstance.bulkSort(authorization, appId, requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **requestBody** | [**[Number]**](Number.md)| The request body must contain an array of App Rule IDs in the desired order. | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createApp

> Schema createApp(authorization, schema)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let schema = new OneLoginApi.Schema(); // Schema | 
apiInstance.createApp(authorization, schema, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **schema** | [**Schema**](Schema.md)|  | 

### Return type

[**Schema**](Schema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAuthorizationServer

> Id createAuthorizationServer(authorization, createAuthorizationServerRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let createAuthorizationServerRequest = new OneLoginApi.CreateAuthorizationServerRequest(); // CreateAuthorizationServerRequest | 
apiInstance.createAuthorizationServer(authorization, createAuthorizationServerRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **createAuthorizationServerRequest** | [**CreateAuthorizationServerRequest**](CreateAuthorizationServerRequest.md)|  | 

### Return type

[**Id**](Id.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEnvironmentVariable

> Envvar createEnvironmentVariable(authorization, createEnvironmentVariableRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let createEnvironmentVariableRequest = new OneLoginApi.CreateEnvironmentVariableRequest(); // CreateEnvironmentVariableRequest | 
apiInstance.createEnvironmentVariable(authorization, createEnvironmentVariableRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **createEnvironmentVariableRequest** | [**CreateEnvironmentVariableRequest**](CreateEnvironmentVariableRequest.md)|  | 

### Return type

[**Envvar**](Envvar.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createHook

> createHook(authorization, hook)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let hook = new OneLoginApi.Hook(); // Hook | 
apiInstance.createHook(authorization, hook, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **hook** | [**Hook**](Hook.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createMapping

> Number createMapping(authorization, mapping)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let mapping = new OneLoginApi.Mapping(); // Mapping | 
apiInstance.createMapping(authorization, mapping, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **mapping** | [**Mapping**](Mapping.md)|  | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRiskRule

> createRiskRule(authorization, riskRule)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let riskRule = new OneLoginApi.RiskRule(); // RiskRule | 
apiInstance.createRiskRule(authorization, riskRule, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **riskRule** | [**RiskRule**](RiskRule.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createRoles

> [CreateRoles201ResponseInner] createRoles(authorization)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
apiInstance.createRoles(authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 

### Return type

[**[CreateRoles201ResponseInner]**](CreateRoles201ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createRule

> RuleId createRule(authorization, appId, rule)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let rule = new OneLoginApi.Rule(); // Rule | 
apiInstance.createRule(authorization, appId, rule, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **rule** | [**Rule**](Rule.md)|  | 

### Return type

[**RuleId**](RuleId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUser

> User createUser(authorization, user, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let user = new OneLoginApi.User(); // User | 
let opts = {
  'mappings': "mappings_example", // String | Controls how mappings will be applied to the user on creation. Defaults to async.
  'validatePolicy': true // Boolean | Will passwords validate against the User Policy? Defaults to true.
};
apiInstance.createUser(authorization, user, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **user** | [**User**](User.md)|  | 
 **mappings** | **String**| Controls how mappings will be applied to the user on creation. Defaults to async. | [optional] 
 **validatePolicy** | **Boolean**| Will passwords validate against the User Policy? Defaults to true. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAccessTokenClaim

> deleteAccessTokenClaim(authorization, id, claimId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
let claimId = 56; // Number | 
apiInstance.deleteAccessTokenClaim(authorization, id, claimId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 
 **claimId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteApp

> deleteApp(authorization, appId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
apiInstance.deleteApp(authorization, appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAppParameter

> deleteAppParameter(authorization, appId, parameterId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let parameterId = 56; // Number | 
apiInstance.deleteAppParameter(authorization, appId, parameterId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **parameterId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAuthorizationServer

> deleteAuthorizationServer(authorization, id)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
apiInstance.deleteAuthorizationServer(authorization, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEnvironmentVariable

> deleteEnvironmentVariable(authorization, envvarId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let envvarId = "envvarId_example"; // String | Set to the id of the Hook Environment Variable that you want to fetch.
apiInstance.deleteEnvironmentVariable(authorization, envvarId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **envvarId** | **String**| Set to the id of the Hook Environment Variable that you want to fetch. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFactor

> deleteFactor(authorization, userId, deviceId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user.
let deviceId = 56; // Number | Set to the device_id of the MFA device.
apiInstance.deleteFactor(authorization, userId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user. | 
 **deviceId** | **Number**| Set to the device_id of the MFA device. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteHook

> deleteHook(authorization, hookId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let hookId = "hookId_example"; // String | Set to the id of the Hook that you want to return.
apiInstance.deleteHook(authorization, hookId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **hookId** | **String**| Set to the id of the Hook that you want to return. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteMapping

> deleteMapping(authorization, mappingId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let mappingId = 56; // Number | The id of the user mapping to locate.
apiInstance.deleteMapping(authorization, mappingId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **mappingId** | **Number**| The id of the user mapping to locate. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRiskRule

> RiskRule deleteRiskRule(authorization, riskRuleId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let riskRuleId = "riskRuleId_example"; // String | 
apiInstance.deleteRiskRule(authorization, riskRuleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **riskRuleId** | **String**|  | 

### Return type

[**RiskRule**](RiskRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRole

> deleteRole(authorization, roleId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
apiInstance.deleteRole(authorization, roleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRule

> deleteRule(authorization, appId, ruleId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let ruleId = 56; // Number | The id of the app rule to locate.
apiInstance.deleteRule(authorization, appId, ruleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **ruleId** | **Number**| The id of the app rule to locate. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteScope

> deleteScope(authorization, id, scopeId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
let scopeId = 56; // Number | 
apiInstance.deleteScope(authorization, id, scopeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 
 **scopeId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUser

> deleteUser(authorization, userId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user that you want to return.
apiInstance.deleteUser(authorization, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user that you want to return. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dryRunMapping

> [Object] dryRunMapping(authorization, mappingId, requestBody)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let mappingId = 56; // Number | The id of the user mapping to locate.
let requestBody = [null]; // [Number] | Request body is a list of user IDs tested against the mapping conditions to verify that the mapping would be applied
apiInstance.dryRunMapping(authorization, mappingId, requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **mappingId** | **Number**| The id of the user mapping to locate. | 
 **requestBody** | [**[Number]**](Number.md)| Request body is a list of user IDs tested against the mapping conditions to verify that the mapping would be applied | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## enrollFactor

> [Array] enrollFactor(authorization, userId, enrollFactorRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user.
let enrollFactorRequest = new OneLoginApi.EnrollFactorRequest(); // EnrollFactorRequest | 
apiInstance.enrollFactor(authorization, userId, enrollFactorRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user. | 
 **enrollFactorRequest** | [**EnrollFactorRequest**](EnrollFactorRequest.md)|  | 

### Return type

**[Array]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateMfaToken

> GenerateMfaToken200Response generateMfaToken(authorization, generateMfaTokenRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let generateMfaTokenRequest = new OneLoginApi.GenerateMfaTokenRequest(); // GenerateMfaTokenRequest | 
apiInstance.generateMfaToken(authorization, generateMfaTokenRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **generateMfaTokenRequest** | [**GenerateMfaTokenRequest**](GenerateMfaTokenRequest.md)|  | 

### Return type

[**GenerateMfaToken200Response**](GenerateMfaToken200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateSamlAssertion

> generateSamlAssertion(authorization, generateSamlAssertionRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let generateSamlAssertionRequest = new OneLoginApi.GenerateSamlAssertionRequest(); // GenerateSamlAssertionRequest | 
apiInstance.generateSamlAssertion(authorization, generateSamlAssertionRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **generateSamlAssertionRequest** | [**GenerateSamlAssertionRequest**](GenerateSamlAssertionRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateToken

> GenerateToken200Response generateToken(authorization, generateTokenRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let generateTokenRequest = new OneLoginApi.GenerateTokenRequest(); // GenerateTokenRequest | 
apiInstance.generateToken(authorization, generateTokenRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **generateTokenRequest** | [**GenerateTokenRequest**](GenerateTokenRequest.md)|  | 

### Return type

[**GenerateToken200Response**](GenerateToken200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getApp

> Schema getApp(authorization, appId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
apiInstance.getApp(authorization, appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 

### Return type

[**Schema**](Schema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAuthorizationServer

> GetAuthorizationServer200Response getAuthorizationServer(authorization, id)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
apiInstance.getAuthorizationServer(authorization, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 

### Return type

[**GetAuthorizationServer200Response**](GetAuthorizationServer200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAvailableFactors

> [GetAvailableFactors200ResponseInner] getAvailableFactors(authorization, userId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user.
apiInstance.getAvailableFactors(authorization, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user. | 

### Return type

[**[GetAvailableFactors200ResponseInner]**](GetAvailableFactors200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClientApps

> [GetClientApps200ResponseInner] getClientApps(authorization, id)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
apiInstance.getClientApps(authorization, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 

### Return type

[**[GetClientApps200ResponseInner]**](GetClientApps200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnrolledFactors

> [Device] getEnrolledFactors(authorization, userId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user.
apiInstance.getEnrolledFactors(authorization, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user. | 

### Return type

[**[Device]**](Device.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentVariable

> Envvar getEnvironmentVariable(authorization, envvarId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let envvarId = "envvarId_example"; // String | Set to the id of the Hook Environment Variable that you want to fetch.
apiInstance.getEnvironmentVariable(authorization, envvarId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **envvarId** | **String**| Set to the id of the Hook Environment Variable that you want to fetch. | 

### Return type

[**Envvar**](Envvar.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHook

> Hook getHook(authorization, hookId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let hookId = "hookId_example"; // String | Set to the id of the Hook that you want to return.
apiInstance.getHook(authorization, hookId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **hookId** | **String**| Set to the id of the Hook that you want to return. | 

### Return type

[**Hook**](Hook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogs

> [Log] getLogs(authorization, hookId, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let hookId = "hookId_example"; // String | Set to the id of the Hook that you want to return.
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example", // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
  'requestId': "requestId_example", // String | Returns logs that contain this request_id.
  'correlationId': "correlationId_example" // String | Returns logs that contain this correlation_id.
};
apiInstance.getLogs(authorization, hookId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **hookId** | **String**| Set to the id of the Hook that you want to return. | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 
 **requestId** | **String**| Returns logs that contain this request_id. | [optional] 
 **correlationId** | **String**| Returns logs that contain this correlation_id. | [optional] 

### Return type

[**[Log]**](Log.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMapping

> Mapping getMapping(authorization, mappingId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let mappingId = 56; // Number | The id of the user mapping to locate.
apiInstance.getMapping(authorization, mappingId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **mappingId** | **Number**| The id of the user mapping to locate. | 

### Return type

[**Mapping**](Mapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRateLimit

> GetRateLimit200Response getRateLimit(authorization)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
apiInstance.getRateLimit(authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 

### Return type

[**GetRateLimit200Response**](GetRateLimit200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRiskRule

> getRiskRule(authorization, riskRuleId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let riskRuleId = "riskRuleId_example"; // String | 
apiInstance.getRiskRule(authorization, riskRuleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **riskRuleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getRiskScore

> GetRiskScore200Response getRiskScore(authorization, getRiskScoreRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let getRiskScoreRequest = new OneLoginApi.GetRiskScoreRequest(); // GetRiskScoreRequest | 
apiInstance.getRiskScore(authorization, getRiskScoreRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **getRiskScoreRequest** | [**GetRiskScoreRequest**](GetRiskScoreRequest.md)|  | 

### Return type

[**GetRiskScore200Response**](GetRiskScore200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRole

> Role getRole(authorization, roleId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
apiInstance.getRole(authorization, roleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleAdmins

> [Schema1] getRoleAdmins(authorization, roleId, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example", // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
  'name': "name_example", // String | Allows you to filter on first name, last name, username, and email address.
  'includeUnassigned': true // Boolean | Optional. Defaults to false. Include users that aren’t assigned to the role.
};
apiInstance.getRoleAdmins(authorization, roleId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 
 **name** | **String**| Allows you to filter on first name, last name, username, and email address. | [optional] 
 **includeUnassigned** | **Boolean**| Optional. Defaults to false. Include users that aren’t assigned to the role. | [optional] 

### Return type

[**[Schema1]**](Schema1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applcation/json, application/json


## getRoleApps

> [Schema] getRoleApps(authorization, roleId, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example", // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
  'assigned': true // Boolean | Optional. Defaults to true. Returns all apps not yet assigned to the role.
};
apiInstance.getRoleApps(authorization, roleId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 
 **assigned** | **Boolean**| Optional. Defaults to true. Returns all apps not yet assigned to the role. | [optional] 

### Return type

[**[Schema]**](Schema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applcation/json, application/json


## getRoleUsers

> [Schema1] getRoleUsers(authorization, roleId, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example", // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
  'name': "name_example", // String | Allows you to filter on first name, last name, username, and email address.
  'includeUnassigned': true // Boolean | Optional. Defaults to false. Include users that aren’t assigned to the role.
};
apiInstance.getRoleUsers(authorization, roleId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 
 **name** | **String**| Allows you to filter on first name, last name, username, and email address. | [optional] 
 **includeUnassigned** | **Boolean**| Optional. Defaults to false. Include users that aren’t assigned to the role. | [optional] 

### Return type

[**[Schema1]**](Schema1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applcation/json, application/json


## getRule

> Rule getRule(authorization, appId, ruleId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let ruleId = 56; // Number | The id of the app rule to locate.
apiInstance.getRule(authorization, appId, ruleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **ruleId** | **Number**| The id of the app rule to locate. | 

### Return type

[**Rule**](Rule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScoreInsights

> GetScoreInsights200Response getScoreInsights(authorization, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let opts = {
  'before': "before_example", // String | Optional ISO8601 formatted date string. Defaults to current date. Maximum date is 90 days ago.
  'after': "after_example" // String | Optional ISO8601 formatted date string. Defaults to 30 days ago. Maximum date is 90 days ago.
};
apiInstance.getScoreInsights(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **before** | **String**| Optional ISO8601 formatted date string. Defaults to current date. Maximum date is 90 days ago. | [optional] 
 **after** | **String**| Optional ISO8601 formatted date string. Defaults to 30 days ago. Maximum date is 90 days ago. | [optional] 

### Return type

[**GetScoreInsights200Response**](GetScoreInsights200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> User getUser(authorization, userId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user that you want to return.
apiInstance.getUser(authorization, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user that you want to return. | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserApps

> [GetUserApps200ResponseInner] getUserApps(authorization, userId, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user that you want to return.
let opts = {
  'ignoreVisibility': true // Boolean | Defaults to `false`. When `true` will show all apps that are assigned to a user regardless of their portal visibility setting.
};
apiInstance.getUserApps(authorization, userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user that you want to return. | 
 **ignoreVisibility** | **Boolean**| Defaults to &#x60;false&#x60;. When &#x60;true&#x60; will show all apps that are assigned to a user regardless of their portal visibility setting. | [optional] 

### Return type

[**[GetUserApps200ResponseInner]**](GetUserApps200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAccessTokenClaims

> [ListAccessTokenClaims200ResponseInner] listAccessTokenClaims(authorization, id)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
apiInstance.listAccessTokenClaims(authorization, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 

### Return type

[**[ListAccessTokenClaims200ResponseInner]**](ListAccessTokenClaims200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listActionValues

> [ListConditionValues200ResponseInner] listActionValues(authorization, appId, actionValue)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let actionValue = "actionValue_example"; // String | The value for the selected action.
apiInstance.listActionValues(authorization, appId, actionValue, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **actionValue** | **String**| The value for the selected action. | 

### Return type

[**[ListConditionValues200ResponseInner]**](ListConditionValues200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listActions

> [ListActions200ResponseInner] listActions(authorization, appId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
apiInstance.listActions(authorization, appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 

### Return type

[**[ListActions200ResponseInner]**](ListActions200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAppUsers

> [ListAppUsers200ResponseInner] listAppUsers(authorization, appId, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example" // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
};
apiInstance.listAppUsers(authorization, appId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 

### Return type

[**[ListAppUsers200ResponseInner]**](ListAppUsers200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listApps

> [Schema] listApps(authorization, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example", // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
  'name': "name_example", // String | The name or partial name of the app to search for. When using a partial name you must append a wildcard `*`
  'connectorId': 56, // Number | Returns all apps based off a specific connector. See List Connectors for a complete list of Connector IDs.
  'authMethod': new OneLoginApi.AuthMethod() // AuthMethod | Returns all apps based of a given type.
};
apiInstance.listApps(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 
 **name** | **String**| The name or partial name of the app to search for. When using a partial name you must append a wildcard &#x60;*&#x60; | [optional] 
 **connectorId** | **Number**| Returns all apps based off a specific connector. See List Connectors for a complete list of Connector IDs. | [optional] 
 **authMethod** | [**AuthMethod**](.md)| Returns all apps based of a given type. | [optional] 

### Return type

[**[Schema]**](Schema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAuthorizationServers

> [ListAuthorizationServers200ResponseInner] listAuthorizationServers(authorization)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
apiInstance.listAuthorizationServers(authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 

### Return type

[**[ListAuthorizationServers200ResponseInner]**](ListAuthorizationServers200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listConditionOperators

> [ListConditionOperators200ResponseInner] listConditionOperators(authorization, appId, conditionValue)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let conditionValue = "conditionValue_example"; // String | The value for the selected condition.
apiInstance.listConditionOperators(authorization, appId, conditionValue, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **conditionValue** | **String**| The value for the selected condition. | 

### Return type

[**[ListConditionOperators200ResponseInner]**](ListConditionOperators200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listConditionValues

> [ListConditionValues200ResponseInner] listConditionValues(authorization, appId, conditionValue)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let conditionValue = "conditionValue_example"; // String | The value for the selected condition.
apiInstance.listConditionValues(authorization, appId, conditionValue, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **conditionValue** | **String**| The value for the selected condition. | 

### Return type

[**[ListConditionValues200ResponseInner]**](ListConditionValues200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listConditions

> [ListConditions200ResponseInner] listConditions(authorization, appId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
apiInstance.listConditions(authorization, appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 

### Return type

[**[ListConditions200ResponseInner]**](ListConditions200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listConnectors

> [Connector] listConnectors(authorization, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example", // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
  'name': "name_example", // String | The name or partial name of the connector to search for. When using a partial name you must append a wildcard `*`
  'authMethod': new OneLoginApi.AuthMethod() // AuthMethod | Returns all connectors of a given type.
};
apiInstance.listConnectors(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 
 **name** | **String**| The name or partial name of the connector to search for. When using a partial name you must append a wildcard &#x60;*&#x60; | [optional] 
 **authMethod** | [**AuthMethod**](.md)| Returns all connectors of a given type. | [optional] 

### Return type

[**[Connector]**](Connector.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEnvironmentVariables

> [Envvar] listEnvironmentVariables(authorization, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example" // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
};
apiInstance.listEnvironmentVariables(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 

### Return type

[**[Envvar]**](Envvar.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listHooks

> [Hook] listHooks(authorization, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example" // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
};
apiInstance.listHooks(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 

### Return type

[**[Hook]**](Hook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMappingActionValues

> [ListConditionValues200ResponseInner] listMappingActionValues(authorization, actionValue)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let actionValue = "actionValue_example"; // String | The value for the selected action.
apiInstance.listMappingActionValues(authorization, actionValue, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **actionValue** | **String**| The value for the selected action. | 

### Return type

[**[ListConditionValues200ResponseInner]**](ListConditionValues200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMappingActions

> [ListActions200ResponseInner] listMappingActions(authorization)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
apiInstance.listMappingActions(authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 

### Return type

[**[ListActions200ResponseInner]**](ListActions200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMappingConditionOperators

> [ListMappingConditionOperators200ResponseInner] listMappingConditionOperators(authorization, conditionValue)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let conditionValue = "conditionValue_example"; // String | The value for the selected condition.
apiInstance.listMappingConditionOperators(authorization, conditionValue, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **conditionValue** | **String**| The value for the selected condition. | 

### Return type

[**[ListMappingConditionOperators200ResponseInner]**](ListMappingConditionOperators200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMappingConditionValues

> [ListConditionValues200ResponseInner] listMappingConditionValues(authorization, conditionValue)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let conditionValue = "conditionValue_example"; // String | The value for the selected condition.
apiInstance.listMappingConditionValues(authorization, conditionValue, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **conditionValue** | **String**| The value for the selected condition. | 

### Return type

[**[ListConditionValues200ResponseInner]**](ListConditionValues200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMappingConditions

> [ListMappingConditions200ResponseInner] listMappingConditions(authorization)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
apiInstance.listMappingConditions(authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 

### Return type

[**[ListMappingConditions200ResponseInner]**](ListMappingConditions200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMappings

> [Mapping] listMappings(authorization, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let opts = {
  'enabled': true, // Boolean | Defaults to true. When set to `false` will return all disabled mappings.
  'hasCondition': has_condition=has_role:123456,status:1, // String | Filters Mappings based on their Conditions.
  'hasConditionType': "hasConditionType_example", // String | Filters Mappings based on their condition types.
  'hasAction': has_action=set_groups:123456,set_usertype:*, // String | Filters Mappings based on their Actions.
  'hasActionType': "hasActionType_example" // String | Filters Mappings based on their action types.
};
apiInstance.listMappings(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **enabled** | **Boolean**| Defaults to true. When set to &#x60;false&#x60; will return all disabled mappings. | [optional] [default to true]
 **hasCondition** | **String**| Filters Mappings based on their Conditions. | [optional] 
 **hasConditionType** | **String**| Filters Mappings based on their condition types. | [optional] 
 **hasAction** | **String**| Filters Mappings based on their Actions. | [optional] 
 **hasActionType** | **String**| Filters Mappings based on their action types. | [optional] 

### Return type

[**[Mapping]**](Mapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRiskRules

> listRiskRules(authorization)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
apiInstance.listRiskRules(authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listRoles

> [Role] listRoles(authorization, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example", // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
  'name': "name_example", // String | Optional. Filters by role name.
  'appId': "appId_example", // String | Optional. Returns roles that contain this app name.
  'fields': "fields_example" // String | Optional. Comma delimited list of fields to return.
};
apiInstance.listRoles(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 
 **name** | **String**| Optional. Filters by role name. | [optional] 
 **appId** | **String**| Optional. Returns roles that contain this app name. | [optional] 
 **fields** | **String**| Optional. Comma delimited list of fields to return. | [optional] 

### Return type

[**[Role]**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRules

> [Rule] listRules(authorization, appId, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let opts = {
  'enabled': true, // Boolean | Defaults to true. When set to `false` will return all disabled rules.
  'hasCondition': "hasCondition_example", // String | Filters Rules based on their Conditions.
  'hasConditionType': "hasConditionType_example", // String | Filters Rules based on their condition types.
  'hasAction': "hasAction_example", // String | Filters Rules based on their Actions.
  'hasActionType': "hasActionType_example" // String | Filters Rules based on their action types.
};
apiInstance.listRules(authorization, appId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **enabled** | **Boolean**| Defaults to true. When set to &#x60;false&#x60; will return all disabled rules. | [optional] 
 **hasCondition** | **String**| Filters Rules based on their Conditions. | [optional] 
 **hasConditionType** | **String**| Filters Rules based on their condition types. | [optional] 
 **hasAction** | **String**| Filters Rules based on their Actions. | [optional] 
 **hasActionType** | **String**| Filters Rules based on their action types. | [optional] 

### Return type

[**[Rule]**](Rule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listScopes

> [ListScopes200ResponseInner] listScopes(authorization, id)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
apiInstance.listScopes(authorization, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 

### Return type

[**[ListScopes200ResponseInner]**](ListScopes200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> [User] listUsers(authorization, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let opts = {
  'limit': 56, // Number | The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit.
  'page': 56, // Number | The page number of results to return.
  'cursor': "cursor_example", // String | Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page.
  'createdSince': "createdSince_example", // String | An ISO8601 timestamp value that returns all users created after a given date & time.
  'createdUntil': "createdUntil_example", // String | An ISO8601 timestamp value that returns all users created before a given date & time.
  'updatedSince': "updatedSince_example", // String | An ISO8601 timestamp value that returns all users updated after a given date & time.
  'updatedUntil': "updatedUntil_example", // String | An ISO8601 timestamp value that returns all users updated before a given date & time.
  'lastLoginSince': "lastLoginSince_example", // String | An ISO8601 timestamp value that returns all users that logged in after a given date & time.
  'lastLoginUntil': "lastLoginUntil_example", // String | 
  'firstname': "firstname_example", // String | The first name of the user
  'lastname': "lastname_example", // String | The last name of the user
  'email': "email_example", // String | The email address of the user
  'username': "username_example", // String | The username for the user
  'samaccountname': "samaccountname_example", // String | The AD login name for the user
  'directoryId': "directoryId_example", // String | The ID in OneLogin of the Directory that the user belongs to
  'externalId': "externalId_example", // String | An external identifier that has been set on the user
  'appId': "appId_example", // String | The ID of a OneLogin Application
  'userIds': "userIds_example", // String | A comma separated list of OneLogin User IDs
  'customAttributesAttributeName': "customAttributesAttributeName_example", // String | The short name of a custom attribute. Note that the attribute name is prefixed with custom_attributes.
  'fields': "fields_example" // String | A comma separated list user attributes to return.
};
apiInstance.listUsers(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **limit** | **Number**| The total number of items returned per page. The maximum limit varies between endpoints, see the relevant endpoint documentation for the specific limit. | [optional] 
 **page** | **Number**| The page number of results to return. | [optional] 
 **cursor** | **String**| Set to the value extracted from Before-Cursor or After-Cursor headers to return the previous or next page. | [optional] 
 **createdSince** | **String**| An ISO8601 timestamp value that returns all users created after a given date &amp; time. | [optional] 
 **createdUntil** | **String**| An ISO8601 timestamp value that returns all users created before a given date &amp; time. | [optional] 
 **updatedSince** | **String**| An ISO8601 timestamp value that returns all users updated after a given date &amp; time. | [optional] 
 **updatedUntil** | **String**| An ISO8601 timestamp value that returns all users updated before a given date &amp; time. | [optional] 
 **lastLoginSince** | **String**| An ISO8601 timestamp value that returns all users that logged in after a given date &amp; time. | [optional] 
 **lastLoginUntil** | **String**|  | [optional] 
 **firstname** | **String**| The first name of the user | [optional] 
 **lastname** | **String**| The last name of the user | [optional] 
 **email** | **String**| The email address of the user | [optional] 
 **username** | **String**| The username for the user | [optional] 
 **samaccountname** | **String**| The AD login name for the user | [optional] 
 **directoryId** | **String**| The ID in OneLogin of the Directory that the user belongs to | [optional] 
 **externalId** | **String**| An external identifier that has been set on the user | [optional] 
 **appId** | **String**| The ID of a OneLogin Application | [optional] 
 **userIds** | **String**| A comma separated list of OneLogin User IDs | [optional] 
 **customAttributesAttributeName** | **String**| The short name of a custom attribute. Note that the attribute name is prefixed with custom_attributes. | [optional] 
 **fields** | **String**| A comma separated list user attributes to return. | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeClientApp

> removeClientApp(authorization, id, clientAppId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
let clientAppId = 56; // Number | 
apiInstance.removeClientApp(authorization, id, clientAppId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 
 **clientAppId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeRoleAdmins

> removeRoleAdmins(authorization, roleId, removeRoleUsersRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
let removeRoleUsersRequest = new OneLoginApi.RemoveRoleUsersRequest(); // RemoveRoleUsersRequest | 
apiInstance.removeRoleAdmins(authorization, roleId, removeRoleUsersRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 
 **removeRoleUsersRequest** | [**RemoveRoleUsersRequest**](RemoveRoleUsersRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeRoleUsers

> removeRoleUsers(authorization, roleId, removeRoleUsersRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
let removeRoleUsersRequest = new OneLoginApi.RemoveRoleUsersRequest(); // RemoveRoleUsersRequest | 
apiInstance.removeRoleUsers(authorization, roleId, removeRoleUsersRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 
 **removeRoleUsersRequest** | [**RemoveRoleUsersRequest**](RemoveRoleUsersRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## revokeToken

> GenerateToken400Response revokeToken(authorization, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let opts = {
  'revokeTokenRequest': new OneLoginApi.RevokeTokenRequest() // RevokeTokenRequest | 
};
apiInstance.revokeToken(authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **revokeTokenRequest** | [**RevokeTokenRequest**](RevokeTokenRequest.md)|  | [optional] 

### Return type

[**GenerateToken400Response**](GenerateToken400Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setRoleApps

> [SetRoleApps200ResponseInner] setRoleApps(authorization, roleId, requestBody)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
let requestBody = [null]; // [Number] | 
apiInstance.setRoleApps(authorization, roleId, requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**[SetRoleApps200ResponseInner]**](SetRoleApps200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trackEvent

> trackEvent(authorization, trackEventRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let trackEventRequest = new OneLoginApi.TrackEventRequest(); // TrackEventRequest | 
apiInstance.trackEvent(authorization, trackEventRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **trackEventRequest** | [**TrackEventRequest**](TrackEventRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateAccessTokenClaim

> Id updateAccessTokenClaim(authorization, id, claimId, addAccessTokenClaimRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
let claimId = 56; // Number | 
let addAccessTokenClaimRequest = new OneLoginApi.AddAccessTokenClaimRequest(); // AddAccessTokenClaimRequest | 
apiInstance.updateAccessTokenClaim(authorization, id, claimId, addAccessTokenClaimRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 
 **claimId** | **Number**|  | 
 **addAccessTokenClaimRequest** | [**AddAccessTokenClaimRequest**](AddAccessTokenClaimRequest.md)|  | 

### Return type

[**Id**](Id.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateApp

> Schema updateApp(authorization, appId, schema)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let schema = new OneLoginApi.Schema(); // Schema | 
apiInstance.updateApp(authorization, appId, schema, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **schema** | [**Schema**](Schema.md)|  | 

### Return type

[**Schema**](Schema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAuthorizationServer

> Id updateAuthorizationServer(authorization, id, createAuthorizationServerRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
let createAuthorizationServerRequest = new OneLoginApi.CreateAuthorizationServerRequest(); // CreateAuthorizationServerRequest | 
apiInstance.updateAuthorizationServer(authorization, id, createAuthorizationServerRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 
 **createAuthorizationServerRequest** | [**CreateAuthorizationServerRequest**](CreateAuthorizationServerRequest.md)|  | 

### Return type

[**Id**](Id.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateClientApp

> ClientApp updateClientApp(authorization, id, clientAppId, updateClientAppRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
let clientAppId = 56; // Number | 
let updateClientAppRequest = new OneLoginApi.UpdateClientAppRequest(); // UpdateClientAppRequest | 
apiInstance.updateClientApp(authorization, id, clientAppId, updateClientAppRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 
 **clientAppId** | **Number**|  | 
 **updateClientAppRequest** | [**UpdateClientAppRequest**](UpdateClientAppRequest.md)|  | 

### Return type

[**ClientApp**](ClientApp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEnvironmentVariable

> Envvar updateEnvironmentVariable(authorization, envvarId, updateEnvironmentVariableRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let envvarId = "envvarId_example"; // String | Set to the id of the Hook Environment Variable that you want to fetch.
let updateEnvironmentVariableRequest = new OneLoginApi.UpdateEnvironmentVariableRequest(); // UpdateEnvironmentVariableRequest | 
apiInstance.updateEnvironmentVariable(authorization, envvarId, updateEnvironmentVariableRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **envvarId** | **String**| Set to the id of the Hook Environment Variable that you want to fetch. | 
 **updateEnvironmentVariableRequest** | [**UpdateEnvironmentVariableRequest**](UpdateEnvironmentVariableRequest.md)|  | 

### Return type

[**Envvar**](Envvar.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateHook

> Hook updateHook(authorization, hookId, hook)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let hookId = "hookId_example"; // String | Set to the id of the Hook that you want to return.
let hook = new OneLoginApi.Hook(); // Hook | 
apiInstance.updateHook(authorization, hookId, hook, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **hookId** | **String**| Set to the id of the Hook that you want to return. | 
 **hook** | [**Hook**](Hook.md)|  | 

### Return type

[**Hook**](Hook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMapping

> Number updateMapping(authorization, mappingId, mapping)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let mappingId = 56; // Number | The id of the user mapping to locate.
let mapping = new OneLoginApi.Mapping(); // Mapping | 
apiInstance.updateMapping(authorization, mappingId, mapping, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **mappingId** | **Number**| The id of the user mapping to locate. | 
 **mapping** | [**Mapping**](Mapping.md)|  | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRiskRule

> RiskRule updateRiskRule(authorization, riskRuleId, riskRule)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let riskRuleId = "riskRuleId_example"; // String | 
let riskRule = new OneLoginApi.RiskRule(); // RiskRule | 
apiInstance.updateRiskRule(authorization, riskRuleId, riskRule, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **riskRuleId** | **String**|  | 
 **riskRule** | [**RiskRule**](RiskRule.md)|  | 

### Return type

[**RiskRule**](RiskRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRole

> UpdateRole200Response updateRole(authorization, roleId, role)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let roleId = 56; // Number | Set to the id of the role you want to return.
let role = new OneLoginApi.Role(); // Role | 
apiInstance.updateRole(authorization, roleId, role, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **roleId** | **Number**| Set to the id of the role you want to return. | 
 **role** | [**Role**](Role.md)|  | 

### Return type

[**UpdateRole200Response**](UpdateRole200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRule

> RuleId updateRule(authorization, appId, ruleId, rule)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let appId = 56; // Number | 
let ruleId = 56; // Number | The id of the app rule to locate.
let rule = new OneLoginApi.Rule(); // Rule | 
apiInstance.updateRule(authorization, appId, ruleId, rule, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **appId** | **Number**|  | 
 **ruleId** | **Number**| The id of the app rule to locate. | 
 **rule** | [**Rule**](Rule.md)|  | 

### Return type

[**RuleId**](RuleId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateScope

> Id updateScope(authorization, id, scopeId, addScopeRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let id = 56; // Number | 
let scopeId = 56; // Number | 
let addScopeRequest = new OneLoginApi.AddScopeRequest(); // AddScopeRequest | 
apiInstance.updateScope(authorization, id, scopeId, addScopeRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **id** | **Number**|  | 
 **scopeId** | **Number**|  | 
 **addScopeRequest** | [**AddScopeRequest**](AddScopeRequest.md)|  | 

### Return type

[**Id**](Id.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUser

> User updateUser(authorization, userId, user, opts)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user that you want to return.
let user = new OneLoginApi.User(); // User | 
let opts = {
  'mappings': "mappings_example", // String | Controls how mappings will be applied to the user on creation. Defaults to async.
  'validatePolicy': true // Boolean | Will passwords validate against the User Policy? Defaults to true.
};
apiInstance.updateUser(authorization, userId, user, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user that you want to return. | 
 **user** | [**User**](User.md)|  | 
 **mappings** | **String**| Controls how mappings will be applied to the user on creation. Defaults to async. | [optional] 
 **validatePolicy** | **Boolean**| Will passwords validate against the User Policy? Defaults to true. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyEnrollment

> [Registration] verifyEnrollment(authorization, userId, registrationId, verifyEnrollmentRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user.
let registrationId = 56; // Number | Set to the uuid of the registration. This was included in the response as part of the initial request in Enroll Factor.
let verifyEnrollmentRequest = new OneLoginApi.VerifyEnrollmentRequest(); // VerifyEnrollmentRequest | 
apiInstance.verifyEnrollment(authorization, userId, registrationId, verifyEnrollmentRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user. | 
 **registrationId** | **Number**| Set to the uuid of the registration. This was included in the response as part of the initial request in Enroll Factor. | 
 **verifyEnrollmentRequest** | [**VerifyEnrollmentRequest**](VerifyEnrollmentRequest.md)|  | 

### Return type

[**[Registration]**](Registration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyEnrollmentVoiceProtect

> [Registration] verifyEnrollmentVoiceProtect(authorization, userId, registrationId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user.
let registrationId = 56; // Number | Set to the uuid of the registration. This was included in the response as part of the initial request in Enroll Factor.
apiInstance.verifyEnrollmentVoiceProtect(authorization, userId, registrationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user. | 
 **registrationId** | **Number**| Set to the uuid of the registration. This was included in the response as part of the initial request in Enroll Factor. | 

### Return type

[**[Registration]**](Registration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verifyFactor

> Status2 verifyFactor(authorization, userId, verificationId, verifyFactorRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user.
let verificationId = 56; // Number | The verification_id is returned on activation of the factor or you can get the device_id using the Activate Factor API call.
let verifyFactorRequest = new OneLoginApi.VerifyFactorRequest(); // VerifyFactorRequest | 
apiInstance.verifyFactor(authorization, userId, verificationId, verifyFactorRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user. | 
 **verificationId** | **Number**| The verification_id is returned on activation of the factor or you can get the device_id using the Activate Factor API call. | 
 **verifyFactorRequest** | [**VerifyFactorRequest**](VerifyFactorRequest.md)|  | 

### Return type

[**Status2**](Status2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyFactorSaml

> VerifyFactorSaml200Response verifyFactorSaml(authorization, verifyFactorSamlRequest)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let verifyFactorSamlRequest = new OneLoginApi.VerifyFactorSamlRequest(); // VerifyFactorSamlRequest | 
apiInstance.verifyFactorSaml(authorization, verifyFactorSamlRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **verifyFactorSamlRequest** | [**VerifyFactorSamlRequest**](VerifyFactorSamlRequest.md)|  | 

### Return type

[**VerifyFactorSaml200Response**](VerifyFactorSaml200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyFactorVoice

> [VerifyFactorVoice200ResponseInner] verifyFactorVoice(authorization, userId, verificationId)



### Example

```javascript
import OneLoginApi from 'one_login_api';

let apiInstance = new OneLoginApi.DefaultApi();
let authorization = "authorization_example"; // String | 
let userId = 56; // Number | Set to the id of the user.
let verificationId = 56; // Number | The verification_id is returned on activation of the factor or you can get the device_id using the Activate Factor API call.
apiInstance.verifyFactorVoice(authorization, userId, verificationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **userId** | **Number**| Set to the id of the user. | 
 **verificationId** | **Number**| The verification_id is returned on activation of the factor or you can get the device_id using the Activate Factor API call. | 

### Return type

[**[VerifyFactorVoice200ResponseInner]**](VerifyFactorVoice200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

