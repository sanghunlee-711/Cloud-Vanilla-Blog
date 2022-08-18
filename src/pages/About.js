const About = function ({ $target }) {
  this.$target = $target;

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'about-main-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div>
      About!
      </div>
    `;
  };

  this.render();
};

export default About;
