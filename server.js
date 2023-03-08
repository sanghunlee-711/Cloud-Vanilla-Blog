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
app.options('*', cors());

app.get('/post', (req, res) => {
  const slug = req.query.slug;
  if (!slug) res.send(400);

  const type = req.query.type ? req.query.type : 'post-dev';
  const markdonwWithMeta = fs.readFileSync(
    path.join(type, slug + '.md'),
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
  const type = req.query.type ? req.query.type : 'post-dev';
  const countPerPage = req.query.countPerPage ? +req.query.countPerPage : 10;
  const pageNo = req.query.pageNo ? +req.query.pageNo : 0;

  //파일을 루트의 post directoriy로부터 가져옴
  //readdirsync에서 특정 갯수만 가져오는 것이 불가능하므로 서버에서 핸들링하는걸로 ..(효율 최악일듯)
  const files = fs.readdirSync(path.join(type));
  //slug 과 formatter를 posts로부터 가져옴
  let posts = files
    .map((filename) => {
      const slug = filename.replace('.md', '');

      //frontMatter를 가져옴
      const markdownWithMeta = fs.readFileSync(
        path.join(type, filename),
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
  const start = pageCondition
    ? (pageNo - 2) * countPerPage
    : (pageNo - 1) * countPerPage;
  const end = pageCondition ? totalCount : countPerPage * pageNo;

  if (pageCondition) {
    return res.json({
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
    return res.json({
      success: true,
      data: posts.slice(start, end),
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

app.get('/post-latest', (req, res) => {
  try {
    //효율이 너무하다..
    const types = ['post-algorithm', 'post-dev', 'post-personnel'];
    let posts = [];

    //3개 타입 게시물 다 가져오기..
    //O(N^2)
    types.forEach((type) => {
      const files = fs.readdirSync(path.join(type));
      //slug 과 formatter를 posts로부터 가져옴
      posts = [
        ...posts,
        ...files.map((filename) => {
          const slug = filename.replace('.md', '');

          //frontMatter를 가져옴
          const markdownWithMeta = fs.readFileSync(
            path.join(type, filename),
            'utf-8'
          );

          //gray-matter라이브러리가 알아서 md파일을 객체화 해줌
          const { data: frontMatter, content } = matter(markdownWithMeta);

          return {
            slug,
            frontMatter,
            content: JSON.stringify(marked.parse(content)),
          };
        }),
      ];
    });

    //정렬..
    posts.sort(
      (a, b) => new Date(b?.frontMatter?.date) - new Date(a?.frontMatter?.date)
    );

    res.json({
      success: true,
      data: posts.slice(0, 3),
    });
  } catch (e) {
    res.json({
      success: false,
      data: null,
    });
  }
});

app.listen(4000, () => console.log(`Server is running on ${4000}`));
