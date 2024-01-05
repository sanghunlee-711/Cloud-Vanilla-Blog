//routing for local development server (devServer.js)

const routes = require("express").Router();

const post = require("./post");
const postList = require("./post-list");

routes.use("/", post);
routes.use("/", postList);

module.exports = routes;
