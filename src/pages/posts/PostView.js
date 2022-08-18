import AbstractView from '../../components/AbstractView.js';

class PostsView extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle(`Viewing Posts!${params.id}`);
  }

  async getPostData(slug) {
    const res = await fetch(`http://localhost:4000/each-post/${slug}`);
    const resJson = await res.json();
    const data = await resJson;

    return data;
  }

  // style="color:red; background-color:tan;
  async getHtml() {
    const data = await this.getPostData(this.postId);

    const { src, width, height } = data.frontMatter.image;
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
        <div style="display: flex; justify-content:center; margin-bottom:24px">
          <img src=${src} 
            alt="post-title-image" 
            style="width: ${width}px; height: ${height}px">
        </div>
        <div class="hljs">
          ${JSON.parse(data.content)}
        </div>
    `;
  }
}
export default PostsView;
