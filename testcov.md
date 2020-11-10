
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

> onelogin-node-sdk@1.0.0 coverage /Users/dominickcaponi/workspace/onelogin_stuff/onelogin-node-sdk
> nyc -r text -e .ts -x "tests/**/*.test.ts" npm run test


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

  Do
An error was returned from the Remote. Request failed with status code 500
HTTP POST to /api/2/apps complete: 200 - null
    ✓ executes a successful request
An error was returned from the Remote. Request failed with status code 400
HTTP POST to /api/2/apps complete: 400 - null
    ✓ handles a 4xx or 5xx response

  Happy Paths
    ✓ Indexes the Apps
    ✓ Retrieves an App by ID
    ✓ Creates an App
    ✓ Updates an App
    ✓ Destroys an App

  Sad Paths
    ✓ Returns an empty array if index reports an error
    ✓ Throws an error if ReadResource fails
    ✓ Throws an error if Create fails
    ✓ Throws an error if no ID given on Update
    ✓ Throws an error if Update fails
    ✓ Throws an error if Delete fails

  With a Good Client
    ✓ Retrieves the index when API returns one result
    ✓ Retrieves an item
    ✓ Retrieves an with ID on URL
    ✓ Writes an item
    ✓ Updates an item
    ✓ Destroys an item

  When the API Client is broken
There was a problem retrieving all the results uh oh!
    ✓ Retrieves the index
There was a problem reading the resource uh oh!
    ✓ Retrieves an item
There was a problem writing the resource uh oh!
    ✓ Writes an item
There was a problem writing the resource uh oh!
    ✓ Updates an item
There was a problem destorying the resource uh oh!
    ✓ Destroys an item


  30 passing (52ms)

------------------------------|---------|----------|---------|---------|-------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------------|---------|----------|---------|---------|-------------------
All files                     |   97.73 |     89.8 |     100 |   97.37 |                   
 http_clients                 |   92.31 |    94.74 |     100 |   91.89 |                   
  onelogin_http_client.ts     |   92.31 |    94.74 |     100 |   91.89 | 87-88,113         
 http_clients/client_adapters |     100 |      100 |     100 |     100 |                   
  axios_client_adapter.ts     |     100 |      100 |     100 |     100 |                   
 onelogin/apps                |     100 |      100 |     100 |     100 |                   
  apps.ts                     |     100 |      100 |     100 |     100 |                   
 repositories                 |     100 |    81.82 |     100 |     100 |                   
  http_repository.ts          |     100 |    81.82 |     100 |     100 | 35,44,81-83       
------------------------------|---------|----------|---------|---------|-------------------

> onelogin-node-sdk@1.0.0 coverage /Users/dominickcaponi/workspace/onelogin_stuff/onelogin-node-sdk
> nyc -r text -e .ts -x "tests/**/*.test.ts" npm run test


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

  Do
An error was returned from the Remote. Request failed with status code 500
HTTP POST to /api/2/apps complete: 200 - null
    ✓ executes a successful request
An error was returned from the Remote. Request failed with status code 400
HTTP POST to /api/2/apps complete: 400 - null
    ✓ handles a 4xx or 5xx response

  Happy Paths
    ✓ Indexes the Apps
    ✓ Retrieves an App by ID
    ✓ Creates an App
    ✓ Updates an App
    ✓ Destroys an App

  Sad Paths
    ✓ Returns an empty array if index reports an error
    ✓ Throws an error if ReadResource fails
    ✓ Throws an error if Create fails
    ✓ Throws an error if no ID given on Update
    ✓ Throws an error if Update fails
    ✓ Throws an error if Delete fails

  With a Good Client
    ✓ Retrieves the index when API returns one result
    ✓ Retrieves an item
    ✓ Retrieves an with ID on URL
    ✓ Writes an item
    ✓ Updates an item
    ✓ Destroys an item

  When the API Client is broken
There was a problem retrieving all the results uh oh!
    ✓ Retrieves the index
There was a problem reading the resource uh oh!
    ✓ Retrieves an item
There was a problem writing the resource uh oh!
    ✓ Writes an item
There was a problem writing the resource uh oh!
    ✓ Updates an item
There was a problem destorying the resource uh oh!
    ✓ Destroys an item


  30 passing (55ms)

------------------------------|---------|----------|---------|---------|-------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------------|---------|----------|---------|---------|-------------------
All files                     |   97.73 |     89.8 |     100 |   97.37 |                   
 http_clients                 |   92.31 |    94.74 |     100 |   91.89 |                   
  onelogin_http_client.ts     |   92.31 |    94.74 |     100 |   91.89 | 87-88,113         
 http_clients/client_adapters |     100 |      100 |     100 |     100 |                   
  axios_client_adapter.ts     |     100 |      100 |     100 |     100 |                   
 onelogin/apps                |     100 |      100 |     100 |     100 |                   
  apps.ts                     |     100 |      100 |     100 |     100 |                   
 repositories                 |     100 |    81.82 |     100 |     100 |                   
  http_repository.ts          |     100 |    81.82 |     100 |     100 | 35,44,81-83       
------------------------------|---------|----------|---------|---------|-------------------
