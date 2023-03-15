import Modal from '../../components/Modal.js';
import { addRouteEventListener } from '../../utils/navigate.js';
import Resume from '../Resume/index.js';
import Explanation from './components/Explanation/index.js';

class About {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('main');
    this.$wrapper.setAttribute('class', 'about-main-container');
    $target.appendChild(this.$wrapper);

    this.state = {
      isResumeModal: false,
    };

    this.render();
    this.addEventListeners();
    this.renderModal();
  }

  handleModal = (visible) => {
    this.setState({ ...this.state, isResumeModal: visible });
  };

  renderModal = () => {
    new Modal({
      isVisible: this.state.isResumeModal,
      Component: Resume,
      handleModal: this.handleModal.bind(this),
    });
  };

  setState = (nextState) => {
    this.state = { ...nextState };
    this.renderModal();
  };

  render = () => {
    const buttonWrapper = document.createElement('div');
    const resumeButton = document.createElement('button');
    const postButton = document.createElement('a');

    resumeButton.className = 'resume-button basic-button';
    resumeButton.textContent = 'Resume';
    // resumeButton.href = '/resume';
    postButton.className = 'post-button basic-button';
    postButton.textContent = 'More Post';
    postButton.href = '/post';

    buttonWrapper.append(resumeButton, postButton);
    buttonWrapper.append(postButton);

    new Explanation({
      $target: this.$wrapper,
    });

    this.$wrapper.appendChild(buttonWrapper);
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      addRouteEventListener(e);
      if (e.target.classList.contains('resume-button')) {
        this.handleModal(true);
      }
    });
  };
}

export default About;
