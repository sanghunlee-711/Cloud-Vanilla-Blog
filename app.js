const express = require('express');
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
// app.use(express.static('posts'));
app.options('*', cors());

module.exports = app;
