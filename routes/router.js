//routing for local development server (devServer.js)

const routes = require('express').Router();

const post = require('./post');
const postList = require('./post-list');
const postLatest = require('./post-latest');

routes.use('/', post);
routes.use('/', postList);
routes.use('/', postLatest);

module.exports = routes;
