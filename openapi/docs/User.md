# OneLoginApi.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**username** | **String** | A username for the user. | [optional] 
**email** | **String** | A valid email for the user. | [optional] 
**firstname** | **String** | The user&#39;s first name. | [optional] 
**lastname** | **String** | The user&#39;s last name. | [optional] 
**title** | **String** | The user&#39;s job title. | [optional] 
**department** | **String** | The user&#39;s department. | [optional] 
**company** | **String** | The user&#39;s company. | [optional] 
**comment** | **String** | Free text related to the user. | [optional] 
**groupId** | **Number** | The ID of the Group in OneLogin that the user is assigned to. | [optional] 
**roleIds** | **[Number]** | A list of OneLogin Role IDs of the user | [optional] 
**phone** | **String** | The E.164 format phone number for a user. | [optional] 
**state** | **Number** |  | [optional] 
**status** | **Number** |  | [optional] 
**directoryId** | **Number** | The ID of the OneLogin Directory of the user. | [optional] 
**trustedIdpId** | **Number** | The ID of the OneLogin Trusted IDP of the user. | [optional] 
**managerAdId** | **String** | The ID of the user&#39;s manager in Active Directory. | [optional] 
**managerUserId** | **String** | The OneLogin User ID for the user&#39;s manager. | [optional] 
**samaccountName** | **String** | The user&#39;s Active Directory username. | [optional] 
**memberOf** | **String** | The user&#39;s directory membership. | [optional] 
**userprincipalname** | **String** | The principle name of the user. | [optional] 
**distinguishedName** | **String** | The distinguished name of the user. | [optional] 
**externalId** | **String** | The ID of the user in an external directory. | [optional] 
**activatedAt** | **String** |  | [optional] 
**lastLogin** | **String** |  | [optional] 
**invitationSentAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**preferredLocaleCode** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**customAttributes** | **Object** |  | [optional] 
**invalidLoginAttempts** | **Number** |  | [optional] 
**lockedUntil** | **String** |  | [optional] 
**passwordChangedAt** | **String** |  | [optional] 
**password** | **String** | The password to set for a user. | [optional] 
**passwordConfirmation** | **String** | Required if the password is being set. | [optional] 
**passwordAlgorithm** | **String** | Use this when importing a password that&#39;s already hashed. Prepend the salt value to the cleartext password value before SHA-256-encoding it | [optional] 
**salt** | **String** | The salt value used with the password_algorithm. | [optional] 



## Enum: StateEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)





## Enum: StatusEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `7` (value: `7`)

* `8` (value: `8`)




