import { addRouteEventListener } from '../../common/utils/navigate.js';
import Explanation from './components/Explanation/index.js';

class About {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('main');
    this.$wrapper.setAttribute('class', 'about-main-container');
    $target.appendChild(this.$wrapper);

    // this.state = {
    //   isResumeModal: false,
    //   modalType: 'resume',
    // };

    this.render();
    this.addEventListeners();
    // this.renderModal();
  }

  // handleModal = (visible) => {
  //   this.setState({ ...this.state, isResumeModal: visible });
  // };

  // renderModal = (type) => {
  //   new Modal({
  //     isVisible: this.state.isResumeModal,
  //     Component: type === 'resume' ? Resume : PortFolio,
  //     handleModal: this.handleModal.bind(this),
  //   });
  // };

  setState = (nextState) => {
    this.state = { ...nextState };
    // this.renderModal(this.state.modalType);
  };

  render = () => {
    const buttonWrapper = document.createElement('div');
    const resumeButton = document.createElement('a');
    const portfolioButton = document.createElement('a');
    const postButton = document.createElement('a');

    resumeButton.className = 'resume-button basic-button';
    resumeButton.textContent = 'Resume';
    resumeButton.setAttribute('data-id', 'route');
    resumeButton.href = '/resume';

    portfolioButton.className = 'portfolio-button basic-button';
    portfolioButton.textContent = 'Portfolio';
    portfolioButton.setAttribute('data-id', 'route');
    portfolioButton.href = '/portfolio';

    postButton.className = 'post-button basic-button';
    postButton.textContent = 'More Post';
    postButton.setAttribute('data-id', 'route');
    postButton.href = '/post';

    buttonWrapper.append(resumeButton, portfolioButton, postButton);
    // buttonWrapper.append(postButton);

    new Explanation({
      $target: this.$wrapper,
    });

    this.$wrapper.appendChild(buttonWrapper);
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      addRouteEventListener(e);
      // if (e.target.classList.contains('resume-button')) {
      //   this.setState({ ...this.state, modalType: 'resume' });
      //   this.handleModal(true);
      // }

      // if (e.target.classList.contains('portfolio-button')) {
      //   this.setState({ ...this.state, modalType: 'portfolio' });
      //   this.handleModal(true);
      // }
    });
  };
}

export default About;
