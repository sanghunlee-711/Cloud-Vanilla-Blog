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
    console.log('data in getHTML', data);
    return `
    <main class="post_container">
      ${data
        .map(
          (
            { slug, frontMatter: { title, date, image, categories, tags } },
            index
          ) => {
            return `
          <a href="/posts/${index}" class="each_post_container" data-link>
            <img src=${image.src} alt=${title} ></img>
            <h1 class="post_title">${title}</h1>
            <span>${date.split(' ')[0]}</span>
            <div class="post_category_wrapper">
              ${categories.map((category) => `<span>${category}</span>`)}
            </div>
          </a>
        `;
          }
        )
        .join(' ')};
    </main>
    `;
  }
}

export default Posts;
