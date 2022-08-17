import AbstractView from '../components/AbstractView.js';

class Portfolio extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Portfolio');
  }

  async getHtml() {
    return `
      <h1>This is Portfolio Of Cloud Lee</h1>
    `;
  }
}
export default Portfolio;
