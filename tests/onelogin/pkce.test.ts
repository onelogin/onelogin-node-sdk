import { PKCE } from '../../lib/onelogin/pkce/pkce';
import { expect, GoodClient, BadClient } from '../main.test'

const IDP_URL = "https://idp.com"
const REDIRECT_URL = "https://myapp.com/login"
const CLIENT_ID = "clientID"
const CODE_CHALLENGE = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" // from byte array of 32 zeros

const EXPECTED_AUTH_URL =
  `${IDP_URL}/auth?code_challenge=${CODE_CHALLENGE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&code_challenge_method=S256&response_type=code&scope=openid`

Object.defineProperty(global, "crypto", {
  value: {
    subtle: {
      digest: () => new Uint8Array(new ArrayBuffer(32))
    }
  }
});

describe('With a Good Client', () => {
  let config = {
    idpURL: IDP_URL,
    redirectURL: REDIRECT_URL,
    clientID: CLIENT_ID
  };

  it('Creates an Auth URL', async () => {
    let httpClient = new GoodClient()
    let pkceClient = new PKCE(httpClient)
    let result = await pkceClient.CreateAuthURL(config)
    expect(result).to.equal(EXPECTED_AUTH_URL)
  });

  it('Fetches an Access Token', async () => {
    let httpClient = new GoodClient({token: "token", refresh_token: "refresh"})
    let pkceClient = new PKCE(httpClient)
    let result = await pkceClient.GetAccessToken("code", config)
    expect(result).to.eql({token: "token", refresh_token: "refresh"})
  });

  it('Refrshes an Access Token', async () => {
    let httpClient = new GoodClient({token: "new_token", refresh_token: "new_refresh"})
    let pkceClient = new PKCE(httpClient)
    let result = await pkceClient.RefreshAccessToken("refresh", config)
    expect(result).to.eql({token: "new_token", refresh_token: "new_refresh"})
  });

  it('Returns user info', async () => {
    let httpClient = new GoodClient({username: "marsalus.wallace"})
    let pkceClient = new PKCE(httpClient)
    let result = await pkceClient.GetUserInfo("token", config)
    expect(result).to.eql({username: "marsalus.wallace"})
  });
})

describe('With a Bad Client', () => {
  let config = {
    idpURL: IDP_URL,
    redirectURL: REDIRECT_URL,
    clientID: CLIENT_ID
  };

  it('Still can create an Auth URL', async () => {
    let httpClient = new BadClient()
    let pkceClient = new PKCE(httpClient)
    let result = await pkceClient.CreateAuthURL(config)
    expect(result).to.equal(EXPECTED_AUTH_URL)
  });

  it('Cant fetch an Access Token', async () => {
    let httpClient = new BadClient()
    let pkceClient = new PKCE(httpClient)
    let result = await pkceClient.GetAccessToken("code", config)
    expect(result).to.eql({ message: 'uh oh!' })
  });

  it('Cant refrsh an Access Token', async () => {
    let httpClient = new BadClient()
    let pkceClient = new PKCE(httpClient)
    let result = await pkceClient.RefreshAccessToken("refresh", config)
    expect(result).to.eql({ message: 'uh oh!' })
  });

  it('Cant return user info', async () => {
    let httpClient = new BadClient()
    let pkceClient = new PKCE(httpClient)
    let result = await pkceClient.GetUserInfo("token", config)
    expect(result).to.eql({ message: 'uh oh!' })
  });
})
