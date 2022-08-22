import Resume from './components/Resume.js';
const About = function ({ $target }) {
  this.$target = $target;

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'about-main-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div>
        <div class="resume-container"></div>
      </div>
    `;
  };

  this.render();

  document.querySelector('.resume-container') &&
    new Resume({ $target: document.querySelector('.resume-container') });
};

export default About;
