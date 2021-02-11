/**
  Error
  @describe The error envelope for communicating to the caller that something went wrong
*/
export interface OneLoginError<T = object> {
  message: String
}

export interface OneLoginResponse<T> {
  data: T
  error?: String
}
