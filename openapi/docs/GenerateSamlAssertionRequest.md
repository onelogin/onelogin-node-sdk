# OneLoginApi.GenerateSamlAssertionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usernameOrEmail** | **String** | Set this to the username or email of the OneLogin user accessing the app for which you want to generate a SAML token. | 
**password** | **String** | Password of the OneLogin user accessing the app for which you want to generate a SAML token. | 
**appId** | **String** | App ID of the app for which you want to generate a SAML token. This is the app ID in OneLogin. | 
**subdomain** | **String** | Set to the subdomain of the OneLogin user accessing the app for which you want to generate a SAML token. | 
**ipAddress** | **String** | Whitelisted IP address, if MFA is required and you need to honor IP address whitelisting defined in MFA policies. | [optional] 


