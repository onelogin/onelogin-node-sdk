# OneLoginApi.Mapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** | The name of the mapping. | 
**enabled** | **Boolean** | Indicates if the mapping is enabled or not. | 
**match** | **String** | Indicates how conditions should be matched. | 
**position** | **Number** | Indicates the order of the mapping. When &#x60;null&#x60; this will default to last position. | 
**conditions** | [**[Condition]**](Condition.md) | An array of conditions that the user must meet in order for the mapping to be applied. | [optional] 
**actions** | [**[Action]**](Action.md) | An array of actions that will be applied to the users that are matched by the conditions. | 



## Enum: MatchEnum


* `all` (value: `"all"`)

* `any` (value: `"any"`)




