const express = require('express');
const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
const app = express();

app.use('/src', express.static(path.resolve(__dirname, 'src')));

app.get('/post-list', (req, res) => {
  //파일을 루트의 post directoriy로부터 가져옴
  const files = fs.readdirSync(path.join('src/post'));

  //slug 과 formatter를 posts로부터 가져옴
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    //frontMatter를 가져옴
    const markdownWithMeta = fs.readFileSync(
      path.join('src/post', filename),
      'utf-8'
    );

    //gray-matter라이브러리가 알아서 md파일을 객체화 해줌
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });
  res.json(posts);
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server is running on ${process.env.PORT || 3000}`)
);
