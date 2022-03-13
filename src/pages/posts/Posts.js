import AbstractView from '../../components/AbstractView.js';
class Posts extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts!');
    this.data = [];
  }

  async init() {
    const res = await fetch('/post-list');
    const resJson = await res.json();
    const data = await resJson;
    return data;
  }

  async getHtml() {
    const data = await this.init();
    console.log('this.posts in get HTML', this.posts);
    return `
      <h1>This is Posts List Page</h1>
      ${data.map(
        (
          { slug, frontMatter: { title, date, excerpt, cover_Image } },
          index
        ) => {
          return `
          <a href="/posts/${index}" class="post_container" data-link>
            <h1>${title}</h1>
            <img src=${cover_Image} alt=${title} ></img>
            <span>${date}</span>
          </a>
        `;
        }
      )}
    `;
  }
}

export default Posts;
