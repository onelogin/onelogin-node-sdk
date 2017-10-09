var request = require('supertest');
var assert = require('chai').assert;
var crypto = require('crypto');
var nock = require('nock');

var OneLogin = require('../lib/onelogin');

var clientId = crypto.randomBytes(32).toString('hex');
var clientSecret = crypto.randomBytes(32).toString('hex');

var _tokenInfo = 
{ 
    access_token: crypto.randomBytes(32).toString('hex'),
    created_at: new Date().toISOString(),
    expires_in: 36000,
    refresh_token: crypto.randomBytes(32).toString('hex'),
    token_type: 'bearer',
    account_id: 111111 
}

var _refreshTokenInfo = 
{ 
    access_token: crypto.randomBytes(32).toString('hex'),
    created_at: new Date().toISOString(),
    expires_in: 36000,
    refresh_token: crypto.randomBytes(32).toString('hex'),
    token_type: 'bearer',
    account_id: 111111 
}

var errAuthMissing =
{ 
    "status": 
    {
        "error": true,
        "code": 400,
        "type": "bad request",
        "message": "The authorization information is missing"
    }
}

var errAuthFailure =
{ 
    "status": 
    { 
        "error": true,
        "code": 401,
        "type": 'Unauthorized',
        "message": 'Authentication Failure' 
    } 
}

var _users = []

function createUser(userInfo)
{
    var user =
    {
        id: 10000000 + _users.length,
        firstname: userInfo.first,
        lastname: userInfo.last,
        email: userInfo.email || (userInfo.first.toLowerCase() + '@pulp.com'),
        username: userInfo.username || userInfo.first.toLowerCase(),
        openid_name: userInfo.username || userInfo.first.toLowerCase(),
        created_at: new Date().toISOString()
    }

    return user;
}

var userNames = 
[
    { first: "Vincent", last: "Vega" },
    { first: "Jules", last: "Winnfield" },
    { first: "Winston", last: "Wolf" },
    { first: "Marsellus", last: "Wallace" },
    { first: "Mia", last: "Wallace" },
    { first: "Butch", last: "Coolidge" },
    { first: "Esmarelda", last: "Villalobos" },
    { first: "Antoine", last: "Roccamora" }
]

userNames.forEach(function(userInfo)
{
    _users.push(createUser(userInfo));
});

var _apps = 
[ 
    { 
        id: 707237,
        name: 'G Suite',
        icon: 'https://cdn.onelogin.com/images/icons/square/google_apps/mobile_50.png?1475190219',
        provisioned: 'unknown',
        extension: false,
        login_id: 144538477,
        personal: false 
    },
    { 
        id: 709631,
        name: 'SAML Test Connector (IdP w/attr) - CloudStash',
        icon: 'https://cdn.onelogin.com/images/icons/square/samltestwithattr/mobile_50.png?1456712293',
        provisioned: null,
        extension: false,
        login_id: 144538374,
        personal: false 
    } 
]

describe('OneLogin', function() 
{
    describe('token', function()
    {
        it('getToken fails with invalid credentials (live site)', function(done) 
        {
            var oneLogin = new OneLogin("foo", "bar", "us");
            oneLogin.getToken(function(err, tokenInfo)
            {
                assert(err);
                assert.equal(err.name, 'OneLoginError');
                assert.equal(err.code, errAuthFailure.status.code);
                assert.equal(err.type, errAuthFailure.status.type);
                assert.equal(err.message, errAuthFailure.status.message);
                done();
            });
        });

        it('getToken fails with invalid credentials', function(done) 
        {
            nock('https://api.us.onelogin.com').post('/auth/oauth2/v2/token').reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.notMatch(this.req.headers['authorization'], new RegExp('client_id:' + clientId + ', client_secret:' + clientSecret));

                return [ 200, errAuthFailure ];
            });

            var oneLogin = new OneLogin("foo", "bar", "us");
            oneLogin.getToken(function(err, tokenInfo)
            {
                assert.equal(err.name, 'OneLoginError');
                assert.equal(err.code, errAuthFailure.status.code);
                assert.equal(err.type, errAuthFailure.status.type);
                assert.equal(err.message, errAuthFailure.status.message);
                done();
            });
        });

        it('getToken succeeds', function(done) 
        {
            nock('https://api.us.onelogin.com').post('/auth/oauth2/v2/token').reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.match(this.req.headers['authorization'], new RegExp('client_id:' + clientId + ', client_secret:' + clientSecret));

                assert.equal(this.req.headers['content-type'], 'application/json');
                assert.deepEqual(requestBody, { "grant_type": "client_credentials" });

                return [ 200, _tokenInfo ];
            });

            var oneLogin = new OneLogin(clientId, clientSecret, "us");
            oneLogin.getToken(function(err, tokenInfo)
            {
                assert.ifError(err);
                assert.deepEqual(tokenInfo, _tokenInfo);
                done();
            });
        });

        it('refreshToken succeeds', function(done) 
        {
            // Get token request
            //
            nock('https://api.us.onelogin.com').post('/auth/oauth2/v2/token').reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.match(this.req.headers['authorization'], new RegExp('client_id:' + clientId + ', client_secret:' + clientSecret));

                assert.equal(this.req.headers['content-type'], 'application/json');
                assert.deepEqual(requestBody, { "grant_type": "client_credentials" });

                return [ 200, _tokenInfo ];
            });

            // Refresh token request
            //
            nock('https://api.us.onelogin.com').post('/auth/oauth2/v2/token').reply(function(uri, requestBody) 
            {
                assert.equal(this.req.headers['content-type'], 'application/json');
                assert.deepEqual(requestBody, 
                { 
                    grant_type: "refresh_token",
                    access_token: _tokenInfo.access_token,
                    refresh_token: _tokenInfo.refresh_token
                });

                return [ 200, _refreshTokenInfo ];
            });

            var oneLogin = new OneLogin(clientId, clientSecret, "us");
            oneLogin.getToken(function(err, tokenInfo)
            {
                assert.ifError(err);
                assert.deepEqual(tokenInfo, _tokenInfo);

                var createdAt = _tokenInfo.created_at;
                _tokenInfo.created_at = new Date(Date.parse(_tokenInfo.created_at) - (36001 * 1000)).toISOString();

                oneLogin.refreshTokenIfNeeded(function(err, newTokenInfo)
                {
                    assert.ifError(err);
                    assert.deepEqual(newTokenInfo, _refreshTokenInfo);
                    _tokenInfo.created_at = createdAt;
                    done();
                })
            });
        });

        afterEach(function()
        {
            // Nock should be clean after each test, but in case of a failure, we'll clean it after each
            // test just to make sure it doesn't corrupt any subsequent tests.
            //
            nock.cleanAll();
        });
    });

    describe('users', function()
    {
        beforeEach(function()
        {
            // Each test is going to instantiate the OneLogin object, which means that the first call
            // to a OneLogin API will trigger an auth token request.
            //
            nock('https://api.us.onelogin.com').post('/auth/oauth2/v2/token').reply(function(uri, requestBody) 
            {
                return [ 200, _tokenInfo ];
            });
        });

        it('getUsers', function(done)
        {
            nock('https://api.us.onelogin.com').get('/api/1/users').reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.match(this.req.headers['authorization'], new RegExp('bearer: ' + _tokenInfo.access_token));

                var response = 
                { 
                    status: { error: false, code: 200, type: 'success', message: 'Success' },
                    pagination: { before_cursor: null, after_cursor: null, previous_link: null, next_link: null },
                    data: _users
                } 

                return [ 200, response ];
            });

            var oneLogin = new OneLogin(clientId, clientSecret, "us");
            oneLogin.getUsers(function(err, users)
            {
                assert.ifError(err);
                assert.deepEqual(users, _users);
                done();
            });
        });

        it('getUser', function(done)
        {
            nock('https://api.us.onelogin.com').get('/api/1/users/10000000').reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.match(this.req.headers['authorization'], new RegExp('bearer: ' + _tokenInfo.access_token));

                var response = 
                { 
                    status: { error: false, code: 200, type: 'success', message: 'Success' },
                    data: [ _users[0] ]
                } 

                return [ 200, response ];
            });

            var oneLogin = new OneLogin(clientId, clientSecret, "us");
            oneLogin.getUser(10000000, function(err, user)
            {
                assert.ifError(err);
                assert.deepEqual(user, _users[0]);
                done();
            });
        });

        it('getUserApps', function(done)
        {
            nock('https://api.us.onelogin.com').get('/api/1/users/10000000/apps').reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.match(this.req.headers['authorization'], new RegExp('bearer: ' + _tokenInfo.access_token));

                var response = 
                { 
                    status: { error: false, code: 200, type: 'success', message: 'Success' },
                    data: _apps
                } 

                return [ 200, response ];
            });

            var oneLogin = new OneLogin(clientId, clientSecret, "us");
            oneLogin.getUserApps(10000000, function(err, apps)
            {
                assert.ifError(err);
                assert.deepEqual(apps, _apps);
                done();
            });
        });

        it('createUser', function(done)
        {
            var userParams = 
            {
                username: "diehard",
                firstname: "John",
                lastname: "McClane",
                email: "john@nakatomi.co.jp"
            }

            var createdUser;

            nock('https://api.us.onelogin.com').post('/api/1/users').reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.match(this.req.headers['authorization'], new RegExp('bearer: ' + _tokenInfo.access_token));

                assert.deepEqual(requestBody, userParams);

                var createdUser = createUser(userParams);

                var response = 
                { 
                    status: { error: false, code: 200, type: 'success', message: 'Success' },
                    data: createdUser
                } 

                return [ 200, response ];
            });

            var oneLogin = new OneLogin(clientId, clientSecret, "us");
            oneLogin.createUser(userParams, function(err, user)
            {
                assert.ifError(err);
                assert.deepEqual(user, createdUser);
                done();
            });
        });

        it('deleteUser', function(done)
        {
            nock('https://api.us.onelogin.com').delete('/api/1/users/10000000').reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.match(this.req.headers['authorization'], new RegExp('bearer: ' + _tokenInfo.access_token));

                var response = 
                { 
                    status: { error: false, code: 200, type: 'success', message: 'Success' }
                } 

                return [ 200, response ];
            });

            var oneLogin = new OneLogin(clientId, clientSecret, "us");
            oneLogin.deleteUser(10000000, function(err)
            {
                assert.ifError(err);
                done();
            });
        });

        afterEach(function()
        {
            // Nock should be clean after each test, but in case of a failure, we'll clean it after each
            // test just to make sure it doesn't corrupt any subsequent tests.
            //
            nock.cleanAll();
        });
    });

    describe('async', function()
    {
        it('methods resolve to promises with proper values', function(done)
        {
            nock('https://api.us.onelogin.com').post('/auth/oauth2/v2/token').reply(function(uri, requestBody) 
            {
                return [ 200, _tokenInfo ];
            });

            nock('https://api.us.onelogin.com').get('/api/1/users/10000000').reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.match(this.req.headers['authorization'], new RegExp('bearer: ' + _tokenInfo.access_token));

                var response = 
                { 
                    status: { error: false, code: 200, type: 'success', message: 'Success' },
                    data: [ _users[0] ]
                } 

                return [ 200, response ];
            });

            nock('https://api.us.onelogin.com').get('/api/1/users/10000000/apps').reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.match(this.req.headers['authorization'], new RegExp('bearer: ' + _tokenInfo.access_token));

                var response = 
                { 
                    status: { error: false, code: 200, type: 'success', message: 'Success' },
                    data: _apps
                } 

                return [ 200, response ];
            });

            var oneLogin = new OneLogin(clientId, clientSecret, "us").async();
            oneLogin.getUser(10000000).then(user => 
            {
                assert.deepEqual(user, _users[0]);
                return oneLogin.getUserApps(user.id)
            })
            .then(apps => 
            {
                assert.deepEqual(apps, _apps);
                nock.cleanAll();
                done();
            })
            .catch(function(err)
            {
                assert.ifError(err);
            });
        });
    });

});
