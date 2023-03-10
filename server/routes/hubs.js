// const express = require('express');

const { authRefreshMiddleware, getHubs, getProjects, getProjectContents, getItemVersions, getItem} = require('../services/aps.js');

// let router = express.Router();

module.exports = (app) => {

    app.use('/api/hubs', authRefreshMiddleware);
    
    app.get('/api/hubs', async function (req, res, next){
        try{
            const hubs = await getHubs(req.internalOAuthToken);
            res.json(hubs);
        } catch (err){
            console.log(err)
            next(err);
        }
    })
    
    app.get('/api/hubs/:hub_id/projects', async function (req, res, next) {
        try {
            const projects = await getProjects(req.params.hub_id, req.internalOAuthToken);
            res.json(projects);
        } catch (err) {
            next(err);
        }
    });
    
    app.get('/api/hubs/:hub_id/projects/:project_id/contents', async function (req, res, next) {
        try {
            const contents = await getProjectContents(req.params.hub_id, req.params.project_id, req.query.folder_id, req.internalOAuthToken);
            res.json(contents);
        } catch (err) {
            next(err);
        }
    });
    
    app.get('/api/hubs/:hub_id/projects/:project_id/contents/:item_id/versions', async function (req, res, next) {
        try {
            const versions = await getItemVersions(req.params.project_id, req.params.item_id, req.internalOAuthToken);
            res.json(versions);
        } catch (err) {
            next(err);
        }
    });
    
    app.get('/api/hubs/:hub_id/projects/:project_id/contents/:item_id', async function (req, res, next) {
        try{
            const item = await getItem(req.params.project_id, req.params.item_id, req.params.internalOAuthToken);
            res.json(item);
        } catch (err) {
            next(err);
        }
    })
}