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
    </div>
    `;
  };

  render = () => {
    this.$wrapper.innerHTML = this.template();

    const postContainer = document.querySelector(
      `.${$ELEMENT.LATEST_POST_CONTAINER}`
    );
    new LatestPost({
      $target: postContainer,
    });
  };

  addListeners = () => {};
}

export default Home;
