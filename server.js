const express = require('express');
const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
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
  breaks: false,
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
app.options('*', cors());

app.get('/each-post/:slug', (req, res) => {
  const slug = req.params.slug;

  const markdonwWithMeta = fs.readFileSync(
    path.join('post-dev', slug + '.md'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdonwWithMeta);

  res.json({
    slug,
    frontMatter,
    content: JSON.stringify(marked.parse(content.toString())),
  });
});

app.get('/post-list', (req, res) => {
  //파일을 루트의 post directoriy로부터 가져옴
  const files = fs.readdirSync(path.join('post-dev'));

  //slug 과 formatter를 posts로부터 가져옴
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    //frontMatter를 가져옴
    const markdownWithMeta = fs.readFileSync(
      path.join('post-dev', filename),
      'utf-8'
    );

    //gray-matter라이브러리가 알아서 md파일을 객체화 해줌
    const { data: frontMatter, content } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
      content: JSON.stringify(marked.parse(content)),
    };
  });
  res.json(posts);
});

app.listen(4000, () => console.log(`Server is running on ${4000}`));
