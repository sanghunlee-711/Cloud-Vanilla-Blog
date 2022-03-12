import AbstractView from '../../components/AbstractView.js';

class PostsView extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle(`Viewing Posts!${params.id}`);
  }

  async getHtml() {
    return `
        <h1>Post</h1>
        <p>You are viewing post #${this.postId}.</p>
    `;
  }
}
export default PostsView;
