import { HTTPClient } from '../../http_clients/http_interface'
import { SmartSMSRequest, SmartEmailRequest, SmartMFAResponse, OTP } from './model'

export class OneLoginSmartMFA {
  client: HTTPClient

  constructor( client: HTTPClient ){
    this.client = client
  }

  CheckMFARequired = async (request: SmartSMSRequest | SmartEmailRequest): Promise<SmartMFAResponse> => {
    let response = await this.client.Do({
      url: "api/2/smart-mfa/",
      data: request,
      method: "post",
      headers: {'Content-Type': 'application/json'}
    })
    if( response.status >= 400 ) {
      console.log("OneLogin Returned an Error", response)
      throw new Error(`There was a problem ${response.statusText}`)
    }
    return {...response.data}
  }

  ValidateOTP = async (token: OTP): Promise<string | object> => {
    let response = await this.client.Do({
      url: "api/2/verify",
      data: token,
      method: "post"
    })
    if( response.status >= 400 ) {
      console.log("OneLogin Returned an Error", response)
      throw new Error(`There was a problem ${response.statusText}`)
    }
    return {...response.data}
  }
}
