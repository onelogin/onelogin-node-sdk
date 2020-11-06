
> onelogin-node-sdk@1.0.0 coverage /Users/dominickcaponi/workspace/onelogin_stuff/onelogin-node-sdk
> nyc -r text -e .ts -x "*.test.ts" npm run test


> onelogin-node-sdk@1.0.0 test /Users/dominickcaponi/workspace/onelogin_stuff/onelogin-node-sdk
> mocha -r ts-node/register tests/**/*.test.ts



  onelogin client configuration
    ✓ configures the onelogin http client correctly
    ✓ raises an error if client id is missing

  getAccessToken
    ✓ gets access token
    ✓ returns a memoized access token if the token is still valid
    ✓ refreshes access token
    ✓ raises an error if OneLogin is down


  6 passing (30ms)

Unable to authenticate request to OneLogin. Request failed with status code 500
Unable to authenticate request to OneLogin. Cannot read property 'access_token' of undefined
-------------------------------|---------|----------|---------|---------|-------------------
File                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------------|---------|----------|---------|---------|-------------------
All files                      |     100 |    94.74 |   89.29 |     100 |                   
 lib                           |     100 |    94.74 |   76.92 |     100 |                   
  axios_client.ts              |     100 |      100 |     100 |     100 |                   
  onelogin_http_client.ts      |     100 |    94.74 |      50 |     100 | 41                
 tests/http_clients            |     100 |      100 |     100 |     100 |                   
  onelogin_http_client.test.ts |     100 |      100 |     100 |     100 |                   
-------------------------------|---------|----------|---------|---------|-------------------
