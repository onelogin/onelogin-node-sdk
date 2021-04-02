# OneLogin Node.js SDK

This SDK will let you execute all the API methods, version/2, described at https://developers.onelogin.com/api-docs/2/getting-started/dev-overview.

The SDK also covers common use cases with OneLogin including PKCE and Smart MFA integration with React, Angular and Vue.

## Development Status

This module is under development and accepting PRs from the community.

## Getting started

You'll need a OneLogin account and a set of API credentials before you get started.

If you don't have an account you can [sign up for a free developer account here](https://www.onelogin.com/developer-signup).

From the admin panel of your OneLogin account, select Developers > API Credentials and click New Credential to create an API credential.

| Value         | Description |
| ------------- | ----------- |
| client_id     | Required unless using for frontend (see PKCE): A valid OneLogin API client_id |
| client_secret | Required unless using for frontend (see PKCE): A valid OneLogin API client_secret |
| region        | Optional if not using baseURL: 'us' or 'eu'. |
| baseURL       | Optional if not using a region: Should look like `https://api.<region>.onelogin.com` |

## CRUD Resources

Currently this SDK supports the following resources:

| Resource | Description | Docs |
| -------- | ----------- | ---- |
| Apps     | The OneLogin App Resource (e.g. an OIDC or SAML application) | https://developers.onelogin.com/api-docs/2/apps/overview |
| Users    | Representation of a User in OneLogin | https://developers.onelogin.com/api-docs/2/users/overview |

```
import Client from "@onelogin/sdk";

const onelogin = new Client({
  clientID: abc-123-def-456,
  clientSecret: 654-fed-321-cba,
  region: "us"
});

let newApp = onelogin.apps.Create({
  name: "new app",
  connector_id: 123
})                                                       // creates a new SAML app

newApp.name= "updated app"
onelogin.apps.Update(newApp)                             // updates the app in OneLogin

let apps = onelogin.apps.Query()                         // list all apps
let samlApps = onelogin.apps.Query({connector_id: 123})  // list SAML apps (connector_id = 123)
let awsApp = onelogin.apps.FindByID(newApp.ID)           // aws app with id = 123
onelogin.apps.Destroy(newApp.ID)                         // destroys the app in OneLogin

```

## Use Cases

### PKCE (OAuth Login) For SPA (React, Vue, Angular) and Mobile Apps

This SDK supports integrating OneLogin as the IdP for PKCE https://developers.onelogin.com/blog/pkce-dust-react-app

PKCE is a useful auth flow for apps that don't have a secure means for storing client secret and prevents auth_code intercept attacks https://tools.ietf.org/html/rfc7636

For this flow, you'll need to create a OIDC App in OneLogin and configure it to use PKCE in the SSO setting by setting the Token Endpoint value to None (PKCE)

Then, note down the Client ID for the app (different from the OneLogin API credential Client ID)

Finally under Configuration, specify one or more redirect urls to be allowed. http://localhost:3000 is also allowed for local development.

```
import Client from "@onelogin/sdk";

const onelogin = new Client({region: "us"}); // client id and secret are not required here

let pkceClient = onelogin.pkce.Configure({
  redirectURL: "http://localhost:3000",
  clientID: oidc-123-client-3456
});

let loginLink = document.getElementById("loginLink")         // some <a> tag
pkceClient.CreateAuthURL().then(url => loginLink.href = url) // establish link for user to click to go to login page

let accessToken = ""
let urlParams = new URLSearchParams(location.search);
let code = urlParams['code']; // code returned after successful login
pkceClient.GetAccessTokenAsync(code).then(token => accessToken = token)

let me = null
pkceClient.GetUserInfoAsync(accessToken).then(user => me = user)

```

### Smart MFA for Deno / NodeJS Backend

This SDK comes with the methods required to support the Smart MFA scenario. This scenario checks a User's behavior analytics with Vigilance A.I. to determine if an additional factor such as Email or SMS is required.

Generally one of 2 things should happen:

1. User is checked against Vigilance and no action required
2. User is checked but requires additional factor. In this case you'll get a MFA token in the response of the `CheckMFARequired` function to validate later.
  * Finally as shown in `/otp` we combine the MFA token with the supplied OTP collected from the client and use that to determine if a user has rightful access

```
const onelogin = new Client({
  clientID: abc-123-def-456,
  clientSecret: 654-fed-321-cba,
  region: "us"
});

// implement these routes
router.post('/signup', signupRoute)
router.post('/login', loginRoute)
router.post('/otp', otpRoute)

signupRoute = async (req: Request, res: Response) => {
  try {
    let existingUser = this.userDB.Read(req.body.email)
    if( existingUser ) {
      return res.status(400).json({
        error: `User with id ${req.body.email} exists!`
      })
    }

    let { email: user_identifier, phone, password } = req.body
    let context = {
      user_agent: req.headers["user-agent"],
      ip: req.connection.remoteAddress
    }

    let { data, error } = await onelogin.smartMFA.CheckMFARequired({
      user_identifier, phone, context
    })

    if( error ) return res.status(error.httpStatusCode).json(error.data)

    this.userDB.Upsert({
      phone,
      password,
      id: user_identifier,
      email: user_identifier
    })

    console.log(`Completed Risk Assessment for ${user_identifier}`)
    return res.status(200).json(data.mfa)

  } catch( err ) {
    console.log("An unknown error occurred", err)
    return res.status(500).send(err.message)
  }
}

loginRoute = async (req: Request, res: Response) => {
  try {
    let user = this.userDB.Read(req.body.email)
    if( !user ) {
      return res.status(400).json({
        error: `User with id ${req.body.email} not found!`
      })
    }

    if( !user.validated(req.body.password) ) {
      return res.status(400).json({ error: `Wrong password` })
    }

    let { email: user_identifier, phone } = user
    let context = {
      user_agent: req.headers["user-agent"],
      ip: req.connection.remoteAddress
    }

    let { data, error } = await onelogin.smartMFA.CheckMFARequired({
      user_identifier, phone, context
    })

    if( error ) return res.status(error.httpStatusCode).json(error.data)
    console.log(`Completed Risk Assessment for ${user_identifier}`)
    return res.status(200).json(data.mfa)

  } catch( err ) {
    console.log("An unknown error occurred", err)
    return res.status(500).send(err.message)
  }
}

otpRoute = async (req: Request, res: Response) => {
  try {
    let data = await onelogin.smartMFA.ValidateOTP( { ...req.body } )
    console.log("OTP Validation Done!")
    return res.status(200).json(data)

  } catch( err ) {
    console.log("An unknown error occurred", err)
    return res.status(500).send(err.message)
  }
}

```
