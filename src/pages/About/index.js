import { addRouteEventListener } from '../../utils/navigate.js';
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
  }

  setState = (nextState) => {
    this.state = { ...nextState };
    modal.setState(nextState.isResumeModal);
  };

  render = () => {
    const buttonWrapper = document.createElement('div');
    const resumeButton = document.createElement('a');
    const postButton = document.createElement('a');

    resumeButton.className = 'resume-button basic-button';
    resumeButton.textContent = '이력서 보기';
    resumeButton.href = '/resume';
    postButton.className = 'post-button basic-button';
    postButton.textContent = '다양한 게시글 보기';
    postButton.href = '/post';

    buttonWrapper.append(resumeButton, postButton);

    new Explanation({
      $target: this.$wrapper,
    });

    this.$wrapper.appendChild(buttonWrapper);
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      addRouteEventListener(e);
    });
  };
}

export default About;
