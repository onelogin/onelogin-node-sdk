# OneLoginApi.GenerateMfaToken200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfaToken** | **String** | Token can function as a temporary MFA token. It can be used to authenticate for any app when valid. | [optional] 
**reusable** | **Boolean** | true indcates the token can be used multiple times. false indicates the token is invalid after a single use | [optional] 
**expiresAt** | **String** | Defines the expiration time and date for the token. Format is UTC time. | [optional] 
**deviceId** | **String** | Defines the expiration time and date for the token. Format is UTC time. | [optional] 


