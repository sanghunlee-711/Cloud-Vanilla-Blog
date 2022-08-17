import AbstractView from '../components/AbstractView.js';

class Resume extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Resume');
  }

  async getHtml() {
    return `
      <h1>This is Resume Of Cloud Lee</h1>
    `;
  }
}
export default Resume;
