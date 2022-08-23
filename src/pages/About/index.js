import Resume from './components/Resume/index.js';
const About = function ({ $target }) {
  this.$target = $target;
  this.state = {
    isResumeModal: false,
  };

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'about-main-container');
  this.$target.appendChild(wrapper);

  this.setState = (nextState) => {
    this.state = { ...nextState };
    this.render();
    resume.render();
  };

  const onHandleResumeModal = () => {
    this.setState({ ...this.state, isResumeModal: !this.state.isResumeModal });
  };

  this.render = () => {
    wrapper.innerHTML = `
      <div>
        <div class="resume-container"></div>
        </div>
      </div>
    `;
  };

  this.render();

  const resume = new Resume({
    $target: document.querySelector('.resume-container'),
  });

  wrapper.addEventListener('click', (e) => {
    if (e.target.className !== 'resume-button') return;
    onHandleResumeModal();
  });
};

export default About;
