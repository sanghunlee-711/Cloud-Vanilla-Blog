const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");
const postList = require("express").Router();

const POST_TYPES = ["post-algorithm", "post-dev", "post-personnel"];
const POSTS_ROOT = path.join(__dirname, "..", "public", "posts");

const sanitizePreview = (text = "") =>
  text
    .replace(/[#>*`~\-\[\]!()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const buildPreview = (content, summary) => {
  if (summary) return summary;

  const cleanText = sanitizePreview(content);
  if (!cleanText) return "";

  return cleanText.length > 200 ? `${cleanText.slice(0, 200)}...` : cleanText;
};

const parsePositiveInteger = (value, fallback) => {
  const parsed = Number.parseInt(value, 10);

  if (Number.isNaN(parsed) || parsed <= 0) {
    return fallback;
  }

  return parsed;
};

const parsePostFile = (type) => (filename) => {
  const slug = filename.replace(".md", "");
  const markdownWithMeta = fs.readFileSync(
    path.join(POSTS_ROOT, type, filename),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    slug,
    frontMatter,
    preview: buildPreview(content, frontMatter.summary),
  };
};

const loadPostsByType = (type) => {
  const files = fs
    .readdirSync(path.join(POSTS_ROOT, type), { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name);

  return files.map(parsePostFile(type));
};

const collectPosts = (type) => {
  if (type === "all") {
    return POST_TYPES.flatMap((postType) => loadPostsByType(postType));
  }

  return loadPostsByType(type);
};

postList.get("/post-list", (req, res) => {
  const requestedType = req.query.type ? req.query.type : "post-dev";
  const type = POST_TYPES.includes(requestedType) || requestedType === "all"
    ? requestedType
    : "post-dev";
  const countPerPage = parsePositiveInteger(req.query.countPerPage, 10);
  const pageNo = parsePositiveInteger(req.query.pageNo, 1);

  const posts = collectPosts(type).sort(
    (a, b) => new Date(b?.frontMatter?.date) - new Date(a?.frontMatter?.date)
  );

  const totalCount = posts.length;
  if (totalCount === 0) {
    return res.json({
      success: true,
      data: [],
      pagination: {
        totalCount,
        countPerPage,
        pageNo: 1,
        totalPageCount: 0,
      },
    });
  }

  const totalPageCount = Math.ceil(totalCount / countPerPage);

  if (pageNo < 1 || pageNo > totalPageCount) {
    return res.json({
      success: false,
      message: "page out of range",
      data: [],
      pagination: {
        totalCount,
        pageNo,
      },
    });
  }

  const start = (pageNo - 1) * countPerPage;
  const end = Math.min(start + countPerPage, totalCount);

  return res.json({
    success: true,
    data: posts.slice(start, end),
    pagination: {
      totalCount,
      countPerPage,
      pageNo,
    },
  });
});

module.exports = postList;
