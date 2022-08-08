# OneLoginApi.EnrollFactorRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**factorId** | **Number** | The identifier of the factor to enroll the user with. | 
**displayName** | **String** | A name for the users device. | 
**expiresIn** | **String** | Defaults to 120. Valid values are: 120-900 seconds. | [optional] 
**verified** | **Boolean** | Defaults to false. | [optional] 
**redirectTo** | **String** | Redirects MagicLink success page to specified URL after 2 seconds. | [optional] 
**customMessage** | **String** | A message template that will be sent via SMS. Max length of the message after template items are inserted is 160 characters including the OTP code. | [optional] 


