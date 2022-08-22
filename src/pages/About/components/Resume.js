const Resume = function ({ $target }) {
  this.$target = $target;

  const wrapper = document.createElement('section');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      
    `;
  };

  this.render();
};
