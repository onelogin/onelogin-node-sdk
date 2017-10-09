var clients = require('restify-clients');
var lodash = require('lodash');
var promisify = require('es6-promisify');

function OneLoginError(status) 
{
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = status.code;
    this.type = status.type;
    this.message = status.message || status.type;
};

require('util').inherits(OneLoginError, Error);

function extractErrorFromResponse(err, payload)
{
    if (payload && payload.status && payload.status.error)
    {
        return new OneLoginError(payload.status);
    }
    return err;
}

module.exports = function(client_id, client_secret, shard)
{
    var _accessTokenInfo;
    var _client;

    function updateAccessToken(accessTokenInfo)
    {
        if (accessTokenInfo)
        {
            // { 
            //     access_token: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            //     created_at: '2017-09-30T18:20:31.102Z',
            //     expires_in: 36000,
            //     refresh_token: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            //     token_type: 'bearer',
            //     account_id: 111111 
            // }
            //
            _accessTokenInfo = accessTokenInfo;
            _client = clients.createJsonClient(
            {
                url: 'https://api.' + shard + '.onelogin.com',
                headers: 
                {
                    'Authorization': 'bearer: ' + _accessTokenInfo.access_token
                }
            });
        }
    }

    var oneLoginApi = {}

    oneLoginApi.getToken = function(callback)
    {
        var tokenClient = clients.createJsonClient(
        {
            url: 'https://api.' + shard + '.onelogin.com',
            headers: 
            {
                'Authorization': 'client_id:' + client_id + ', client_secret:' + client_secret
            }
        });

        tokenClient.post('/auth/oauth2/v2/token', { grant_type: "client_credentials" }, function (err, req, res, obj)
        {
            err = extractErrorFromResponse(err, obj);
            if (!err)
            {
                updateAccessToken(obj);
            }
            callback(err, obj);
        });
    }

    oneLoginApi.refreshTokenIfNeeded = function(callback)
    {
        var issuedAt = new Date(_accessTokenInfo.created_at);
        var expiresAt = new Date(issuedAt.getTime() + (_accessTokenInfo.expires_in * 1000));
        var now = new Date();

        if (now > expiresAt)
        {
            // Create a client without the (now expired) bearer auth token
            //
            var refreshClient = clients.createJsonClient(
            {
                url: 'https://api.' + shard + '.onelogin.com'
            });

            var payload =
            { 
                grant_type: "refresh_token", 
                access_token: _accessTokenInfo.access_token, 
                refresh_token: _accessTokenInfo.refresh_token 
            }

            refreshClient.post('/auth/oauth2/v2/token', payload, function (err, req, res, obj)
            {
                err = extractErrorFromResponse(err, obj);
                if (!err)
                {
                    updateAccessToken(obj);
                }
                callback(err, obj);
            });
        }
        else
        {
            callback();
        }
    }

    function ensureToken(errCallback, callback)
    {
        if (!_accessTokenInfo)
        {
            oneLoginApi.getToken(function (err)
            {
                if (err)
                {
                    /* istanbul ignore next */
                    errCallback(err);
                }
                else
                {
                    callback();
                }
            });
        }
        else
        {
            oneLoginApi.refreshTokenIfNeeded(function (err)
            {
                if (err)
                {
                    /* istanbul ignore next */
                    errCallback(err);
                }
                else
                {
                    callback();
                }
            });
        }
    }

    /* ------------------------------ Users -------------------------------- */

    oneLoginApi.getUsers = function(callback)
    {
        ensureToken(callback, function()
        {
            // !!! Need pagination support
            _client.get('/api/1/users', function (err, req, res, obj)
            {
                err = extractErrorFromResponse(err, obj);
                var users = obj && obj.data;
                callback(err, users);
            });
        })
    }

    oneLoginApi.getUser = function(userId, callback)
    {
        ensureToken(callback, function()
        {
            _client.get('/api/1/users/' + userId, function (err, req, res, obj)
            {
                err = extractErrorFromResponse(err, obj);
                var user = obj && obj.data && obj.data.length && obj.data[0];
                callback(err, user);
            });
        })
    }

    oneLoginApi.getUserApps = function(userId, callback)
    {
        ensureToken(callback, function()
        {
            _client.get('/api/1/users/' + userId + "/apps", function (err, req, res, obj)
            {
                err = extractErrorFromResponse(err, obj);
                var apps = obj && obj.data;
                callback(err, apps);
            });
        })
    }

    oneLoginApi.createUser = function(params, callback)
    {
        ensureToken(callback, function()
        {
            _client.post('/api/1/users', params, function (err, req, res, obj)
            {
                err = extractErrorFromResponse(err, obj);
                var user = obj && obj.data && obj.data.length && obj.data[0];
                callback(err, user);
            });
        })
    }

    oneLoginApi.deleteUser = function(userId, callback)
    {
        ensureToken(callback, function()
        {
            _client.del('/api/1/users/' + userId , function (err, req, res, obj)
            {
                err = extractErrorFromResponse(err, obj);
                callback(err);
            });
        })
    }

    /* --------------------------------------------------------------------- */

    oneLoginApi.async = function()
    {
        var asyncApi = {};

        lodash.functions(oneLoginApi).forEach(fnName =>
        {
            if (fnName !== 'async')
            {
                asyncApi[fnName] = promisify(oneLoginApi[fnName], oneLoginApi);
            }
        });

        return asyncApi;
    }

    return oneLoginApi;
}
