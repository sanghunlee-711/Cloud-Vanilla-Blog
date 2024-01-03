const fs = require('fs');
const matter = require('gray-matter');
const marked = require('marked');
const path = require('path');
const postLatest = require('express').Router();

postLatest.get('/post-latest', (req, res) => {
  try {
    //효율이 너무하다..
    const public = 'public';
    const prefix = 'posts';
    const types = ['post-algorithm', 'post-dev', 'post-personnel'];
    let posts = [];

    //3개 타입 게시물 다 가져오기..
    //O(N^2)
    types.forEach((type) => {
      const files = fs.readdirSync(
        path.join(__dirname, '..', public, prefix, type)
      );

      //slug 과 formatter를 posts로부터 가져옴
      posts = [
        ...posts,
        ...files.map((filename) => {
          const slug = filename.replace('.md', '');

          //frontMatter를 가져옴
          const markdownWithMeta = fs.readFileSync(
            path.join(__dirname, '..', public, prefix, type, filename),
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

module.exports = postLatest;
