# OneLogin Node.js SDK

[![Build Status](https://travis-ci.org/BobDickinson/onelogin.svg?branch=master)](https://travis-ci.org/BobDickinson/onelogin)
[![Coverage Status](https://coveralls.io/repos/BobDickinson/onelogin/badge.svg?branch=)](https://coveralls.io/r/BobDickinson/onelogin?branch=master)

This SDK will let you execute all the API methods, version/1, described at https://developers.onelogin.com/api-docs/1/getting-started/dev-overview.

## Development Status

This module is under development and incomplete at this time.

## Getting started

You'll need a OneLogin account and a set of API credentials before you get started.

If you don't have an account you can [sign up for a free developer account here](https://www.onelogin.com/developer-signup).

| Value         | Description |
| ------------- | ----------- |
| client_id     | Required: A valid OneLogin API client_id |
| client_secret | Required: A valid OneLogin API client_secret |
| region        | Optional: 'us' or 'eu'. Defaults to 'us' |

    var oneLogin = require('onelogin')(client_id, client_secret, region);

    // Now you can make requests 
    oneLogin.getUsers(function(err, users) {
        console.log("Users: ", users);
    });

## Callbacks versus Promises / Async

All OneLogin module methods take as their last parameter a [standard Node.js error-first callback](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/).

To get access to these methods, do:

    var oneLogin = require('onelogin')(client_id, client_secret, region);

And call them like this:

    oneLogin.getUser(req.params.id, function(err, user) {
        if (err) {
            // handle err
        } else {
            console.log("User:", user);
        }
    });

The OneLogin module also supplies those same API methods in an asynchronous (promisified) form: instead of taking a callback parameter, each method returns to a promise.  With these methods, you may handle the returned promise explicity, or if you are using a version of Node.js that supports async/await, you may await them.

To get the async version of OneLogin, do:

    var oneLogin = require('onelogin')(client_id, client_secret, region).async();

Then you may use these async methods with explicit promise handling like this:

    oneLogin.getUser(req.params.id).then(user => {
        console.log("User:", user);     
    })
    .catch(function(err){
        // handle err
    });

And if you have access to async/await, you can do:

    try {
        console.log("User:", await oneLogin.getUser(req.params.id));     
    } catch (err) {
        // handle err
    }
