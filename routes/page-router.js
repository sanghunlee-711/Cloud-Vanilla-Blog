const path = require('path');
const fs = require('fs');
const routes = require('express').Router();

/* For SSR paging*/
routes.get('/', (req, res) => {
  const indexPath = path.join('dist', 'index' + '.html');
  fs.readFile(indexPath, (err, file) => {
    res.send(file.toString().replace('<!--app-->', 'LALALA'));
  });
});

routes.get('/about', (req, res) => {
  const indexPath = path.join('dist', 'index' + '.html');
  fs.readFile(indexPath, (err, file) => {
    res.send(file.toString().replace('<!--app-->', 'LALALA'));
  });
});

routes.get('/post', (req, res) => {
  const indexPath = path.join('dist', 'index' + '.html');
  fs.readFile(indexPath, (err, file) => {
    res.send(file.toString().replace('<!--app-->', 'LALALA'));
  });
});

routes.get('/content', (req, res) => {
  const indexPath = path.join('dist', 'index' + '.html');
  fs.readFile(indexPath, (err, file) => {
    res.send(file.toString().replace('<!--app-->', 'LALALA'));
  });
});

routes.get('/guest', (req, res) => {
  const indexPath = path.join('dist', 'index' + '.html');
  fs.readFile(indexPath, (err, file) => {
    res.send(file.toString().replace('<!--app-->', 'LALALA'));
  });
});

module.exports = routes;
