# OneLogin Node.js SDK

A TypeScript/JavaScript SDK for the OneLogin API, providing a simple interface to manage users, roles, apps, MFA, and more.

## Installation

```bash
npm install @onelogin/sdk
```

## Quick Start

```javascript
const { DefaultApi, GenerateTokenRequest } = require('@onelogin/sdk');

const api = new DefaultApi();

// Generate an access token
const tokenRequest = new GenerateTokenRequest();
tokenRequest.grantType = 'client_credentials';

const authorization = `client_id:${CLIENT_ID}, client_secret:${CLIENT_SECRET}`;

api.generateToken(authorization, tokenRequest, (error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const accessToken = data.access_token;
    console.log('Access Token:', accessToken);
    
    // Use the token for subsequent API calls
    const authHeader = `Bearer ${accessToken}`;
    
    // Example: List users
    api.listUsers(authHeader, {}, (err, users) => {
      if (err) {
        console.error('Error listing users:', err);
      } else {
        console.log('Users:', users);
      }
    });
  }
});
```

## Authentication

The OneLogin API uses OAuth 2.0 for authentication. You'll need:

1. **Client ID** and **Client Secret** from your OneLogin admin portal
2. Generate an access token using the `generateToken` method
3. Use the token in the `authorization` parameter for subsequent API calls

// You can use either Client or DefaultApi - they are aliases
var api = new OneLoginApi.Client()
// or
// var api = new OneLoginApi.DefaultApi()

var authorization = "authorization_example"; // {String} 
var userId = 56; // {Number} Set to the id of the user.
var activateFactorRequest = new OneLoginApi.ActivateFactorRequest(); // {ActivateFactorRequest} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.activateFactor(authorization, userId, activateFactorRequest, callback);

- **User Management**: Create, update, delete, and list users
- **Role Management**: Manage roles and role assignments
- **App Management**: Configure and manage applications
- **MFA**: Enroll, verify, and manage multi-factor authentication
- **Authorization Servers**: Configure OAuth/OIDC settings
- **Risk Management**: Track events and manage risk rules

For complete API documentation, see the [OneLogin API documentation](https://developers.onelogin.com/api-docs/2/getting-started/working-with-api-credentials).

## Development

Build the project:

```bash
npm install
npm run build
```

## Support

This is an open source project maintained by OneLogin. For issues, questions, or contributions, please use [GitHub Issues](https://github.com/onelogin/onelogin-node-sdk/issues).

For official OneLogin support, contact [OneLogin Support](https://www.onelogin.com/support).

## License

MIT License - see [LICENSE](LICENSE) file for details.
