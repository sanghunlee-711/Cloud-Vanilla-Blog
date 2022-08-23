import Modal from '../../components/Modal.js';
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
    modal.setState(nextState.isResumeModal);
    this.render();
  };

  const onHandleResumeModal = () => {
    console.log('ishere?');
    this.setState({ ...this.state, isResumeModal: !this.state.isResumeModal });
  };

  this.render = () => {
    wrapper.innerHTML = `
      <div>
        <div class="resume-container"></div>
        <button class="basic-button resume-button">See More Information</button>
      </div>
    `;
  };

  this.render();
  console.log('@@?', this.state);
  const modal = new Modal({
    isVisible: this.state.isResumeModal,
    Component: Resume,
    handleModal: onHandleResumeModal,
  });
  // const resume = new Resume({
  //   $target: document.querySelector('#modal'),
  // });

  wrapper.addEventListener('click', (e) => {
    if (!e.target.classList.contains('resume-button')) return;
    onHandleResumeModal();
  });
};

export default About;
