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
    created_at: '2017-09-30T18:20:31.102Z',
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

userNames.forEach(function(username)
{
    _users.push(
    {
        id: 10000000 + _users.length,
        firstname: username.first,
        lastname: username.last,
        email: username.first.toLowerCase() + '@pulp.com',
        username: username.first.toLowerCase(),
        openid_name: username.first.toLowerCase(),
        created_at: new Date().toISOString()
    });
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
    describe('get token', function()
    {
        it('fails with invalid credentials (live site)', function(done) 
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

        it('fails with invalid credentials', function(done) 
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
                nock.cleanAll();
                done();
            });
        });

        it('succeeds', function(done) 
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
                nock.cleanAll();
                issuedToken = tokenInfo.access_token;
                done();
            });
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

        it.skip('getUserApps', function(done)
        {

        });

        it.skip('createUser', function(done)
        {

        });

        it.skip('deleteUser', function(done)
        {

        });

        afterEach(function()
        {
            // Nock should be clean after each test, but in case of a failure, we'll clean it after each
            // test just to make sure it doesn't corrupt any subsequent tests.
            //
            nock.cleanAll();
        });
    });
});
