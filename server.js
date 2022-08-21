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

app.get('/post/:slug', (req, res) => {
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
  //페이지 크기
  const countPerPage = req.query.countPerPage ? +req.query.countPerPage : 10;
  const pageNo = req.query.pageNo ? +req.query.pageNo : 0;

  //파일을 루트의 post directoriy로부터 가져옴
  //readdirsync에서 특정 갯수만 가져오는 것이 불가능하므로 서버에서 핸들링하는걸로 ..(효율 최악일듯)
  const files = fs.readdirSync(path.join('post-dev'));
  //slug 과 formatter를 posts로부터 가져옴
  let posts = files
    .map((filename) => {
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
    })
    .reverse();

  //*todo: 리팩토링 필요
  const totalCount = posts.length;
  const pageCondition = countPerPage * pageNo > totalCount;
  let start = pageCondition
    ? (pageNo - 2) * countPerPage
    : (pageNo - 1) * countPerPage;
  let end = pageCondition ? totalCount : countPerPage * pageNo;

  if (pageCondition) {
    res.json({
      success: false,
      message: 'page out of range',
      data: [],
      pagination: {
        totalCount,
        pageNo,
      },
    });
  }

  if (pageNo > 0) {
    posts = posts.slice(start, end);
    res.json({
      success: true,
      data: posts,
      pagination: {
        totalCount,
        countPerPage,
        pageNo,
      },
    });
  }

  res.json({
    success: true,
    data: posts,
  });
});

app.get('/post-personnel', (req, res) => {
  //파일을 루트의 post directoriy로부터 가져옴
  const files = fs.readdirSync(path.join('post-personnel'));

  //slug 과 formatter를 posts로부터 가져옴
  const posts = files
    .map((filename) => {
      const slug = filename.replace('.md', '');

      //frontMatter를 가져옴
      const markdownWithMeta = fs.readFileSync(
        path.join('post-personnel', filename),
        'utf-8'
      );

      //gray-matter라이브러리가 알아서 md파일을 객체화 해줌
      const { data: frontMatter, content } = matter(markdownWithMeta);

      return {
        slug,
        frontMatter,
        content: JSON.stringify(marked.parse(content)),
      };
    })
    .reverse();

  res.json(posts);
});

app.listen(4000, () => console.log(`Server is running on ${4000}`));
