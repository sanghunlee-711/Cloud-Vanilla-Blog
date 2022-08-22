const About = function ({ $target }) {
  this.$target = $target;

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'about-main-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div>
        <button class="basic-button">See Resume</button>
      </div>
    `;
  };

  this.render();
};

export default About;
