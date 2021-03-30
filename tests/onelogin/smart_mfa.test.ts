import { expect, GoodClient, BadClient } from '../main.test'
import OneLoginSmartMFA from '../../lib/onelogin/use_cases/smart_mfa'

describe('With a Good Client', () => {
  it('Checks if MFA is required', async () => {
    let httpClient = new GoodClient()
    let mfaService = new OneLoginSmartMFA(httpClient)
    let result = await mfaService.CheckMFARequired({
      user_identifier: "test@test.com",
      phone: "15554206969",
      context: {ip: "123.123.123.123", user_agent: "chrome"}
    })
    expect(result.data).to.eql({name: "stuff", id: 123})
  })
  it('Verifies the OTP Token', async () => {
    let httpClient = new GoodClient()
    let mfaService = new OneLoginSmartMFA(httpClient)
    let result = await mfaService.ValidateOTP({state_token: "asdf", otp_token: "1234"})
    expect(result).to.eql({name: "stuff", id: 123})
  })
})

describe('With a Bad Client', () => {
  it('Returns an error when trying to check if MFA is required', async () => {
    let httpClient = new BadClient()
    let mfaService = new OneLoginSmartMFA(httpClient)
    expect( mfaService.CheckMFARequired({
      user_identifier: "test@test.com",
      phone: "15554206969",
      context: {ip: "123.123.123.123", user_agent: "chrome"}
    }) ).to.eventually.throw()
  })
  it('Returns an error when validating the OTP Token', async () => {
    let httpClient = new BadClient()
    let mfaService = new OneLoginSmartMFA(httpClient)
    expect( mfaService.ValidateOTP({state_token: "asdf", otp_token: "1234"}))
      .to.eventually.throw()
  })
})
