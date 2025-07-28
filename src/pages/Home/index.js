import Contribution from './components/Contribution/index.js';
import LatestPost from './components/LatestPost/index.js';
import { $ELEMENT } from './constants/element.js';

class Home {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('main');
    this.$wrapper.setAttribute('class', $ELEMENT.HOME_MAIN_CONTAINER);
    this.$target.appendChild(this.$wrapper);

    this.render();
  }

  template = () => {
    return `
    <div>
      <section class="${$ELEMENT.LATEST_POST_CONTAINER}"></section>
      <section class="${$ELEMENT.RESUME_CONTAINERL}"></section>
    </div>
    `;
  };

  render = () => {
    this.$wrapper.innerHTML = this.template();

    const postContainer = document.querySelector(
      `.${$ELEMENT.LATEST_POST_CONTAINER}`
    );
    const resumeContainer = document.querySelector(
      `.${$ELEMENT.RESUME_CONTAINERL}`
    );

    new LatestPost({
      $target: postContainer,
    });
    new Contribution({ $target: resumeContainer });
  };

  addListeners = () => {};
}

export default Home;
