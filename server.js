const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const marked = require('marked');
const hljs = require('highlight.js');
const cors = require('cors');

marked.setOptions({
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  baseUrl: null,
  breaks: true,
  extensions: null,
  gfm: true,
  headerIds: true,
  headerPrefix: '',
  langPrefix: 'hljs language-',
  mangle: true,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  walkTokens: null,
  xhtml: false,
});

app.use(cors());
app.use(express.static('dist'));
app.use(express.static('posts'));
app.options('*', cors());

/* For SSR paging*/
app.get('/', (req, res) => {
  const indexPath = path.join('dist', 'index' + '.html');
  fs.readFile(indexPath, (err, file) => {
    res.send(file.toString().replace('<!--app-->', 'LALALA'));
  });
});

app.get('/about', (req, res) => {
  const indexPath = path.join('dist', 'index' + '.html');
  fs.readFile(indexPath, (err, file) => {
    res.send(file.toString().replace('<!--app-->', 'LALALA'));
  });
});

app.get('/post', (req, res) => {
  const indexPath = path.join('dist', 'index' + '.html');
  fs.readFile(indexPath, (err, file) => {
    res.send(file.toString().replace('<!--app-->', 'LALALA'));
  });
});

app.get('/content', (req, res) => {
  const indexPath = path.join('dist', 'index' + '.html');
  fs.readFile(indexPath, (err, file) => {
    res.send(file.toString().replace('<!--app-->', 'LALALA'));
  });
});

app.get('/guest', (req, res) => {
  const indexPath = path.join('dist', 'index' + '.html');
  fs.readFile(indexPath, (err, file) => {
    res.send(file.toString().replace('<!--app-->', 'LALALA'));
  });
});

//start server locally
app.listen(4000, function () {
  console.log('Server started. Go to http://localhost:4000/');
});

/* For SSR paging*/

module.exports = app;
