const fs = require('fs');
const matter = require('gray-matter');
const marked = require('marked');
const path = require('path');
const postList = require('express').Router();

postList.get('/post-list', (req, res) => {
  //페이지 크기
  const prefix = 'posts';
  const type = req.query.type ? req.query.type : 'post-dev';
  const countPerPage = req.query.countPerPage ? +req.query.countPerPage : 10;
  const pageNo = req.query.pageNo ? +req.query.pageNo : 0;

  //파일을 루트의 post directoriy로부터 가져옴
  //readdirsync에서 특정 갯수만 가져오는 것이 불가능하므로 서버에서 핸들링하는걸로 ..(효율 최악일듯)

  const files = fs.readdirSync(path.join(prefix, type));

  //slug 과 formatter를 posts로부터 가져옴
  let posts = files
    .map((filename) => {
      const slug = filename.replace('.md', '');

      //frontMatter를 가져옴
      const markdownWithMeta = fs.readFileSync(
        path.join(prefix, type, filename),
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

module.exports = postList;