import AbstractView from '../../components/AbstractView.js';
class Posts extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts!');
    this.init();
  }

  async init() {
    const res = await fetch('/post-list');
    const resJson = await res.json();
    const data = await resJson;
    console.log('get md file list and detail from src/post', data);
  }

  async getHtml() {
    return `
      <h1>This is Posts List Page</h1>
      <p>You are in Post List page! </h1>
    `;
  }
}

export default Posts;
