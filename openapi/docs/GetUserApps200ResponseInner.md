# OneLoginApi.GetUserApps200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The App ID | [optional] 
**iconUrl** | **String** | A url for the icon that represents the app in the OneLogin portal | [optional] 
**extension** | **Boolean** | Boolean that indicates if the OneLogin browser extension is required to launch this app. | [optional] 
**loginId** | **Number** | Unqiue identifier for this user and app combination. | [optional] 
**name** | **String** | The name of the app. | [optional] 
**provisioningStatus** | **String** |  | [optional] 
**provisioningState** | **String** | If provisioning is enabled this indicates the state of provisioning for the given user. | [optional] 
**provisioningEnabled** | **Boolean** | Indicates if provisioning is enabled for this app. | [optional] 



## Enum: ProvisioningStatusEnum


* `enabling` (value: `"enabling"`)

* `disabling` (value: `"disabling"`)

* `enabling_pending_approval` (value: `"enabling_pending_approval"`)

* `disabling_pendding_approval` (value: `"disabling_pendding_approval"`)

* `enabled` (value: `"enabled"`)

* `disabled` (value: `"disabled"`)

* `disabling_failed` (value: `"disabling_failed"`)

* `enabling_failed` (value: `"enabling_failed"`)





## Enum: ProvisioningStateEnum


* `unknown` (value: `"unknown"`)

* `provisioning` (value: `"provisioning"`)

* `modifying` (value: `"modifying"`)

* `deleting` (value: `"deleting"`)

* `provisioning_pending_approval` (value: `"provisioning_pending_approval"`)

* `deleting_pending_approval` (value: `"deleting_pending_approval"`)

* `modifying_pending_approval` (value: `"modifying_pending_approval"`)

* `linking` (value: `"linking"`)

* `provisioned` (value: `"provisioned"`)

* `deleted` (value: `"deleted"`)

* `modifying_failed` (value: `"modifying_failed"`)

* `provisioning_failed` (value: `"provisioning_failed"`)

* `deleting_failed` (value: `"deleting_failed"`)

* `linking_failed` (value: `"linking_failed"`)

* `disabled` (value: `"disabled"`)

* `nonexistent` (value: `"nonexistent"`)

* `modifying_pending_approval_then_disabled` (value: `"modifying_pending_approval_then_disabled"`)




