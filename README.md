# OneLogin Node.js SDK

A TypeScript/JavaScript SDK for the OneLogin API, providing a simple interface to manage users, roles, apps, MFA, and more.

## Installation

```bash
npm install @onelogin/sdk
```

## Quick Start

```javascript
// CommonJS
const { DefaultApi, GenerateTokenRequest } = require('@onelogin/sdk');

// ES Module / TypeScript
// import { DefaultApi, GenerateTokenRequest } from '@onelogin/sdk';

const api = new DefaultApi();

// Step 1: Generate an access token
const tokenRequest = new GenerateTokenRequest();
tokenRequest.grantType = 'client_credentials';

// Replace with your OneLogin API credentials
const CLIENT_ID = 'your_client_id_here';
const CLIENT_SECRET = 'your_client_secret_here';

// Note: This SDK uses a custom authorization format for the token endpoint
const authorization = `client_id:${CLIENT_ID},client_secret:${CLIENT_SECRET}`;

(async () => {
  try {
    // Generate token
    const tokenResponse = await api.generateToken(authorization, tokenRequest);
    const accessToken = tokenResponse.body.access_token;
    
    // Step 2: Use the token for API calls (standard Bearer format)
    const authHeader = `Bearer ${accessToken}`;
    
    // Example: List users (first 100)
    const usersResponse = await api.listUsers(authHeader, 100);
    console.log('Users:', usersResponse.body);
  } catch (error) {
    console.error('Error:', error);
  }
})();
```

## Authentication

The OneLogin API uses OAuth 2.0 for authentication. You'll need:

1. **Client ID** and **Client Secret** from your OneLogin admin portal
2. Generate an access token using the `generateToken` method
3. Use the token in the `authorization` parameter for subsequent API calls

## API Reference

The SDK provides access to the full OneLogin API v2. Key features include:

- **User Management**: Create, update, delete, and list users
- **Role Management**: Manage roles and role assignments
- **App Management**: Configure and manage applications
- **MFA**: Enroll, verify, and manage multi-factor authentication
- **Authorization Servers**: Configure OAuth/OIDC settings
- **Risk Management**: Track events and manage risk rules

For complete API documentation, see the [OneLogin API v2 Reference](https://developers.onelogin.com/api-docs/2).

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
