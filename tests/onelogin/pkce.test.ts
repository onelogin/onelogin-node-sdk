import PKCE from '../../lib/onelogin/use_cases/pkce';
import { expect, GoodClient, BadClient } from '../main.test'

const IDP_URL = "https://test.com/oidc/2"
const REDIRECT_URL = "https://myapp.com/login"
const CLIENT_ID = "clientID"
const CODE_CHALLENGE = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" // from byte array of 32 zeros

const EXPECTED_AUTH_URL =
  `${IDP_URL}/auth?code_challenge=${CODE_CHALLENGE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&code_challenge_method=S256&response_type=code&scope=openid`

const EXPECTED_OVERRIDE_AUTH_URL =
  `${IDP_URL}/auth?code_challenge=${CODE_CHALLENGE}&client_id=${CLIENT_ID}&redirect_uri=https://override.com&code_challenge_method=S256&response_type=code&scope=openid`

Object.defineProperty(global, "crypto", {
  value: {
    subtle: {
      digest: () => new Uint8Array(new ArrayBuffer(32))
    }
  }
});

describe('With a Good Client', () => {
  beforeEach(() => localStorage.clear())
  let config = {
    redirectURL: REDIRECT_URL,
    clientID: CLIENT_ID
  };

  describe('Creates an Auth URL', () => {
    let httpClient = new GoodClient()
    let pkceClient = new PKCE(httpClient).Configure(config)

    it('Creates an Auth URL from config data', async () => {
      let result = await pkceClient.CreateAuthURL()
      expect(result).to.equal(EXPECTED_AUTH_URL)
    });

    it('Creates an Auth URL with override', async () => {
      let result = await pkceClient.CreateAuthURL("https://override.com")
      expect(result).to.equal(EXPECTED_OVERRIDE_AUTH_URL)
    });
  });

  it('Fetches an Access Token', async () => {
    let httpClient = new GoodClient({token: "token", refresh_token: "refresh"})
    let pkceClient = new PKCE(httpClient).Configure(config)
    let result = await pkceClient.GetAccessTokenAsync("code")
    expect(result).to.eql({token: "token", refresh_token: "refresh"})
  });

  it('Refrshes an Access Token', async () => {
    let httpClient = new GoodClient({token: "new_token", refresh_token: "new_refresh"})
    let pkceClient = new PKCE(httpClient).Configure(config)
    let result = await pkceClient.RefreshAccessTokenAsync("refresh_token")
    expect(result).to.eql({token: "new_token", refresh_token: "new_refresh"})
  });

  it('Returns user info', async () => {
    let httpClient = new GoodClient({username: "marsalus.wallace"})
    let pkceClient = new PKCE(httpClient).Configure(config)
    let result = await pkceClient.GetUserInfoAsync("access_token")
    expect(result).to.eql({username: "marsalus.wallace"})
  });
})

describe('With a Bad Client', () => {
  beforeEach(() => localStorage.clear())
  let config = {
    redirectURL: REDIRECT_URL,
    clientID: CLIENT_ID
  };

  it('Still can create an Auth URL', async () => {
    let httpClient = new BadClient()
    let pkceClient = new PKCE(httpClient).Configure(config)
    let result = await pkceClient.CreateAuthURL()
    expect(result).to.equal(EXPECTED_AUTH_URL)
  });

  it('Cant fetch an Access Token', async () => {
    let httpClient = new BadClient()
    let pkceClient = new PKCE(httpClient).Configure(config)
    let result = await pkceClient.GetAccessTokenAsync("code")
    expect(result).to.eql({ message: 'uh oh!' })
  });

  it('Cant refrsh an Access Token', async () => {
    let httpClient = new BadClient()
    let pkceClient = new PKCE(httpClient).Configure(config)
    let result = await pkceClient.RefreshAccessTokenAsync("refresh")
    expect(result).to.eql({ message: 'uh oh!' })
  });

  it('Cant return user info', async () => {
    let httpClient = new BadClient()
    let pkceClient = new PKCE(httpClient).Configure(config)
    let result = await pkceClient.GetUserInfoAsync("token")
    expect(result).to.eql({ message: 'uh oh!' })
  });
})
