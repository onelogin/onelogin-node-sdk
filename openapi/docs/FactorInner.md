# OneLoginApi.FactorInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | MFA device identifier. | [optional] 
**status** | **String** | accepted : factor has been verified. pending: registered but has not been verified. | [optional] 
**_default** | **Boolean** | True &#x3D; is user&#39;s default MFA device for OneLogin. | [optional] 
**authFactorName** | **String** | \&quot;Official\&quot; authentication factor name, as it appears to administrators in OneLogin. | [optional] 
**typeDisplayName** | **String** | Authentication factor display name as it appears to users upon initial registration, as defined by admins at Settings &gt; Authentication Factors. | [optional] 
**userDisplayName** | **String** | Authentication factor display name assigned by users when they enroll the device. | [optional] 
**expiresAt** | **String** | A short lived token that is required to Verify the Factor. This token expires based on the expires_in parameter passed in. | [optional] 
**factorData** | [**FactorInnerFactorData**](FactorInnerFactorData.md) |  | [optional] 



## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `accepted` (value: `"accepted"`)




