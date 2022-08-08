# OneLoginApi.Hook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Hook unique ID in OneLogin. | [optional] 
**type** | **String** | A string describing the type of hook. e.g. &#x60;pre-authentication&#x60; | 
**disabled** | **Boolean** | Boolean to enable or disable the hook. Disabled hooks will not run. | [default to true]
**timeout** | **Number** | The number of seconds to allow the hook function to run before before timing out. Maximum timeout varies based on the type of hook. | [default to 1]
**envVars** | **[String]** | Environment Variable objects that will be available via process.env.ENV_VAR_NAME in the hook code. | 
**runtime** | **String** | The Smart Hooks supported Node.js version to execute this hook with. | 
**retries** | **Number** | Number of retries if execution fails. | [default to 0]
**packages** | **Object** | An object containing NPM packages that are bundled with the hook function. | 
**_function** | **String** | A base64 encoded string containing the javascript function code. | 
**contextVersion** | **String** | The semantic version of the content that will be injected into this hook. | [optional] 
**status** | **String** | String describing the state of the hook function. When a hook is ready and disabled is false it will be executed. | [optional] 
**options** | [**HookOptions**](HookOptions.md) |  | [optional] 
**conditions** | [**[HookConditionsInner]**](HookConditionsInner.md) | An array of objects that let you limit the execution of a hook to users in specific roles. | [optional] 
**createdAt** | **String** | ISO8601 format date that they hook function was created. | [optional] 
**updatedAt** | **String** | ISO8601 format date that they hook function was last updated. | [optional] 



## Enum: StatusEnum


* `ready` (value: `"ready"`)

* `create-queued` (value: `"create-queued"`)

* `create-running` (value: `"create-running"`)

* `create-failed` (value: `"create-failed"`)

* `update-queued` (value: `"update-queued"`)

* `update-running` (value: `"update-running"`)

* `update-failed` (value: `"update-failed"`)




