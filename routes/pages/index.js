//routing for local development server (devServer.js)

const routes = require('express').Router();

const home = require('./home');
const about = require('./about');
const content = require('./content');
const guest = require('./guest');
const post = require('./post');

routes.use('/', home);
routes.use('/', about);
routes.use('/', content);
routes.use('/', guest);
routes.use('/', post);

module.exports = routes;
