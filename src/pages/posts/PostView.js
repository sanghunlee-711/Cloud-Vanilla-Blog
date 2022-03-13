import AbstractView from '../../components/AbstractView.js';

class PostsView extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle(`Viewing Posts!${params.id}`);
  }

  async getPostData(slug) {
    const res = await fetch(`/each-post/${slug}`);
    const resJson = res.json();
    const data = await resJson;
    return data;
  }

  async getHtml() {
    const data = await this.getPostData(this.postId);

    return `
        <h1>Post</h1>
        <p>You are viewing post #${this.postId}.</p>
        <div id="each_post_target"></div>
        ${data.content}
    `;
  }
}
export default PostsView;
