var request = require('supertest');
var assert = require('chai').assert;
var crypto = require('crypto');
var nock = require('nock');

var OneLogin = require('../lib/onelogin');

var clientId = crypto.randomBytes(32).toString('hex');
var clientSecret = crypto.randomBytes(32).toString('hex');

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
            nock('https://api.us.onelogin.com')
            .post('/auth/oauth2/v2/token')
            .reply(function(uri, requestBody) 
            {
                assert(this.req.headers['authorization']);
                assert.notMatch(this.req.headers['authorization'], new RegExp('client_id:' + clientId + ', client_secret:' + clientSecret));

                return [ 201, errAuthFailure ];
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
            var _tokenInfo = 
            { 
                access_token: crypto.randomBytes(32).toString('hex'),
                created_at: '2017-09-30T18:20:31.102Z',
                expires_in: 36000,
                refresh_token: crypto.randomBytes(32).toString('hex'),
                token_type: 'bearer',
                account_id: 111111 
            }

            nock('https://api.us.onelogin.com')
            .post('/auth/oauth2/v2/token')
            .reply(function(uri, requestBody) 
            {
                 assert(this.req.headers['authorization']);
                 assert.match(this.req.headers['authorization'], new RegExp('client_id:' + clientId + ', client_secret:' + clientSecret));

                 assert.equal(this.req.headers['content-type'], 'application/json');

                 assert.deepEqual({ "grant_type": "client_credentials" }, requestBody);

                 return [ 201, _tokenInfo ];
            });

            var oneLogin = new OneLogin(clientId, clientSecret, "us");
            oneLogin.getToken(function(err, tokenInfo)
            {
                assert.ifError(err);
                assert.deepEqual(tokenInfo, _tokenInfo);
                nock.cleanAll();
                done();
            });
        });
    });
});
