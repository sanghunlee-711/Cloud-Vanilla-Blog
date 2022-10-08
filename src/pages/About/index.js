import { PAGE_ADDRESS } from '../../constants/config.js';
import Explanation from './components/Explanation/index.js';
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
  };

  const onMovetoResume = () => {
    window.location.assign(`${PAGE_ADDRESS}/#resume`);
  };

  const onMovetoPost = () => {
    window.location.assign(`${PAGE_ADDRESS}/#post`);
  };

  this.render = () => {
    const buttonWrapper = document.createElement('div');
    const resumeButton = document.createElement('button');
    const postButton = document.createElement('button');
    resumeButton.className = 'resume-button basic-button';
    resumeButton.textContent = '이력서 보기';
    postButton.className = 'post-button basic-button';
    postButton.textContent = '다양한 게시글 보기';

    buttonWrapper.append(resumeButton, postButton);

    new Explanation({
      $target: wrapper,
    });

    wrapper.appendChild(buttonWrapper);
  };

  this.render();

  wrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('resume-button')) {
      onMovetoResume();
    }

    if (e.target.classList.contains('post-button')) {
      onMovetoPost();
    }
  });
};

export default About;
