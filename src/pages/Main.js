import AbstractView from '../components/AbstractView.js';

class Main extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Main');
  }

  async getHtml() {
    return `
      <h1>This is Main Of Cloud Lee</h1>
    `;
  }
}
export default Main;
