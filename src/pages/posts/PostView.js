import AbstractView from '../../components/AbstractView.js';

class PostsView extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle(`Viewing Posts!${params.id}`);
  }

  async getPostData(slug) {
    const res = await fetch(`http://localhost:3000/each-post/${slug}`);
    const resJson = await res.json();
    const data = await resJson;
    return data;
  }

  async getHtml() {
    const data = await this.getPostData(this.postId);

    return `
        <div class="title-container">
        <h1 class="title"> ${data.frontMatter.title}</h1>
        <div class="title-info">
          <div>
            <span>${data.frontMatter.author}</span>
            <span>${data.frontMatter.date.split(' ')[0]}</span>
          </div>
          <div>
            <a href="/post" data-link>목록</a>
          </div>
        </div>
        </div>
        <div class="hljs">
          ${JSON.parse(data.content)}
        </div>

    `;
  }
}
export default PostsView;
