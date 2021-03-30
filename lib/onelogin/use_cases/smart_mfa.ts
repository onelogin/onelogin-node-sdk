import { HTTPClient } from '../../http_clients/interface'
import { OneLoginResponse } from '../interface'

export default class OneLoginSmartMFA {
  client: HTTPClient

  constructor( client: HTTPClient ){
    this.client = client
  }

  CheckMFARequired = async (request: SmartSMSRequest | SmartEmailRequest): Promise<OneLoginResponse<SmartMFAResponse>> => {
    let response = await this.client.Do({
      url: "api/2/smart-mfa/",
      data: request,
      method: "post",
      headers: {'Content-Type': 'application/json'}
    })
    if( response.status >= 400 ) {
      console.log("OneLogin Returned an Error", response)
      return { data: null, error: "OneLogin Returned an Error" }
    }
    return { data: response.data }
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
    return { ...response.data }
  }
}

export interface SmartMFAContext {
  user_agent: string
  ip: string
  session_id?: string
  device_id?: string
  device_fingerprint?: string
}

export interface SmartMFARequest {
  user_identifier: string
  context: SmartMFAContext
}

export interface SmartSMSRequest extends SmartMFARequest {
  phone: string
}

export interface SmartEmailRequest extends SmartMFARequest {
  email: string
}

export interface OTP {
  state_token: string
  otp_token: string
}

export interface SmartMFAResponse {
  user_id: number | string
  risk: {
    score: number
    reasons: string[]
  }
  mfa: {
    otp_sent: boolean
    state_token: string
    state_token_expires_at?: string
    verify_url?: string
    factor_type?: string
  }
}
