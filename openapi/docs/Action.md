# OneLoginApi.Action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | The action to apply | [optional] 
**value** | **[String]** | Only applicable to provisioned and set_* actions. Items in the array will be a plain text string or valid value for the selected action. | [optional] 
**expression** | **String** | A regular expression to extract a value. Applies to provisionable, multi-selects, and string actions. | [optional] 
**scriplet** | **String** | A hash containing scriptlet code that returns a value. | [optional] 
**macro** | **String** | A template to construct a value. Applies to default, string, and list actions. | [optional] 


