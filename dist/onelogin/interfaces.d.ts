/**
  Error
  @describe The error envelope for communicating to the caller that something went wrong
*/
export interface Error<T = object> {
    data: T;
    httpStatusCode?: number;
}
export interface OneLoginResponse<T> {
    data: T;
    error?: Error;
}
