/**
  OneLoginResponse
  @describe The envelope for the response data from repository hits where OneLogin is the backing data store.
  @field data - the body of the response (e.g. in a GET this would be the json that comes back)
  @field error - a string indicating what happened. Usually that the resource was not retrieved or updated.
*/
export interface OneLoginResponse<T> {
    data: T;
    error?: String;
}
