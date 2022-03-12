import AbstractView from '../../components/AbstractView.js';

class Posts extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts!');
  }

  async getHtml() {
    console.log('@@@@@', 'this is Posts');
    return `
      <h1>This is Posts List Page</h1>
      <p>You are in Post List page! </h1>
    `;
  }
}

export default Posts;
