// const express = require('express');
const { getAuthorizationUrl, authCallbackMiddleware, authRefreshMiddleware, getUserProfile } = require('../services/aps.js');

// let router = express.Router();
module.exports = (app) => {

    app.use(function(req,res,next){
        console.log("howdy")
        res.header('Access-Control-Allow-Origin', '*')
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
        }
    )

    app.get('/api/auth/login', function (req, res) {
        // res.header('Access-Control-Allow-Origin', '*')
        // res.send(getAuthorizationUrl())
        res.set('Access-Control-Allow-Origin', '*')
        const authUrl = getAuthorizationUrl();
        res.send(authUrl);
        // res.redirect(getAuthorizationUrl());
    });
    
    app.get('/api/auth/logout', function (req, res) {
        req.session = null;
        res.redirect('/');
    });
    
    app.get('/api/auth/callback', authCallbackMiddleware, function (req, res) {
        res.redirect('/');
    });
    
    app.get('/api/auth/token', authRefreshMiddleware, function (req, res) {
        res.json(req.publicOAuthToken);
    });
    
    app.get('/api/auth/profile', authRefreshMiddleware, async function (req, res, next) {
        try {
            const profile = await getUserProfile(req.internalOAuthToken);
            res.json({ name: `${profile.firstName} ${profile.lastName}` });
        } catch (err) {
            next(err);
        }
    });
}