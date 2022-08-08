# OneLoginApi.Rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** | The name of the rule. | [optional] 
**match** | **String** | Indicates how conditions should be matched. | [optional] 
**enabled** | **Boolean** | Indicates if the rule is enabled or not. | [optional] 
**position** | **Number** | Indicates the order of the rule. When &#x60;null&#x60; this will default to last position. | [optional] 
**conditions** | [**[Condition]**](Condition.md) | An array of conditions that the user must meet in order for the rule to be applied. | [optional] 
**actions** | [**[Action]**](Action.md) | An array of actions that will be applied to the users that are matched by the conditions. | [optional] 



## Enum: MatchEnum


* `all` (value: `"all"`)

* `any` (value: `"any"`)




