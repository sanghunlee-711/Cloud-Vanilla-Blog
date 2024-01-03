//routing for local development server (devServer.js)

const routes = require('express').Router();

const post = require('./post');
const postList = require('./post-list');
const postLatest = require('./post-latest');

// routes.get('/', async function (req, res) {
//   //homepage route returns some HTML
//   res.send(`<h1>Reached home!</h1>
//             <br>
//             <a href='/books'>Books</a>`);
// });

routes.use('/', post);
routes.use('/', postList);
routes.use('/', postLatest);

module.exports = routes;
