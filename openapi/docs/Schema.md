# OneLoginApi.Schema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Apps unique ID in OneLogin. | [optional] 
**connectorId** | **Number** | ID of the apps underlying connector. | [optional] 
**name** | **String** | App name. | [optional] 
**description** | **String** | Freeform description of the app. | [optional] 
**notes** | **String** | Freeform notes about the app. | [optional] 
**policyId** | **Number** | The security policy assigned to the app. | [optional] 
**brandId** | **Number** | The custom login page branding to use for this app. Applies to app initiated logins via OIDC or SAML. | [optional] 
**iconUrl** | **String** | A link to the apps icon url. | [optional] 
**visible** | **Boolean** | Indicates if the app is visible in the OneLogin portal. | [optional] 
**authMethod** | **Number** | An ID indicating the type of app. | [optional] 
**tabId** | **Number** | ID of the OneLogin portal tab that the app is assigned to. | [optional] 
**createdAt** | **String** | The date the app was created. | [optional] 
**updatedAt** | **String** | The date the app was last updated. | [optional] 
**roleIds** | **[Number]** | List of Role IDs that are assigned to the app. On App Create or Update the entire array is replaced with the values provided. | [optional] 
**allowAssumedSignin** | **Boolean** | Indicates whether or not administrators can access the app as a user that they have assumed control over. | [optional] 
**provisioning** | [**SchemaProvisioning**](SchemaProvisioning.md) |  | [optional] 
**sso** | **Object** |  | [optional] 
**configuration** | **Object** |  | [optional] 
**parameters** | **Object** |  | [optional] 
**enforcementPoint** | **Object** |  | [optional] 



## Enum: AuthMethodEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `6` (value: `6`)

* `7` (value: `7`)

* `8` (value: `8`)




