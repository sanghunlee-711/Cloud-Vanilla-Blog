const express = require("express");
const app = express();
const marked = require("marked");
const hljs = require("highlight.js");
const cors = require("cors");
const routes = require("./routes/router");
const pageRoutes = require("./routes/pages/index");

marked.setOptions({
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  baseUrl: null,
  breaks: true,
  extensions: null,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  langPrefix: "hljs language-",
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
app.use(express.static("dist"));
// app.use(express.static('posts'));
app.options("*", cors());

app.use("/api/", routes); //for API backend
app.use("/", pageRoutes); //for SSR frontend

if (process.env.NODE_ENV === "production") {
  app.listen(4000, function () {
    console.log("Server started. Go to http://localhost:4000/");
  });
}

module.exports = app;
