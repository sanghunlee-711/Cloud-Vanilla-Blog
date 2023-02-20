import * as EXPLANATION from './constant.js';

class Explanation {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('div');
    $target.appendChild(this.$wrapper);

    this.render();
  }

  render = () => {
    this.$wrapper.innerHTML = `
    <div class="resume-common-wrapper">
      <h1>EXPLANAITON</h1>
      <p>
      ${EXPLANATION.INTRODUCTION}
      </p>
    </div>
    `;
  };
}

export default Explanation;
