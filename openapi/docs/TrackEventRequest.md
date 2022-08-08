# OneLoginApi.TrackEventRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verb** | **String** | Verbs are used to distinguish between different types of events. | 
**ip** | **String** | The IP address of the User&#39;s request. | 
**userAgent** | **String** | The user agent of the User&#39;s request. | 
**user** | [**RiskUser**](RiskUser.md) |  | 
**source** | [**Source**](Source.md) |  | [optional] 
**session** | [**Session**](Session.md) |  | [optional] 
**device** | [**RiskDevice**](RiskDevice.md) |  | [optional] 
**fp** | **String** | Set to the value of the __tdli_fp cookie. | [optional] 
**published** | **String** | Date and time of the event in IS08601 format. Useful for preloading old events. Defaults to date time this API request is received. | [optional] 


