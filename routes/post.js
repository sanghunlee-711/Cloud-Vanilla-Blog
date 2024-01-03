const fs = require('fs');
const matter = require('gray-matter');
const marked = require('marked');
const path = require('path');
const post = require('express').Router();

post.get('/post', async function (req, res) {
  const prefix = 'posts';
  const slug = req.query.slug;
  if (!slug) res.send(400);

  const type = req.query.type ? req.query.type : 'post-dev';
  const markdonwWithMeta = fs.readFileSync(
    path.join(prefix, type, slug + '.md'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdonwWithMeta);

  res.json({
    slug,
    frontMatter,
    content: JSON.stringify(marked.parse(content.toString())),
  });
});

module.exports = post;
