import * as EXPLANATION from './constant.js';

const Explanation = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('div');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
    <div class="resume-common-wrapper">
      <h1>EXPLANAITON</h1>
      <p>
      ${EXPLANATION.INTRODUCTION}
      </p>
    </div>
    `;
  };
  this.render();
};

export default Explanation;
