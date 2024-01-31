import Contribution from './components/Contribution/index.js';
import LatestPost from './components/LatestPost/index.js';
import Hits from '../../components/Hits.js';
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
      <div class=${$ELEMENT.HITS_CONTAINER}></div>
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
    const hitsContainer = document.querySelector(`.${$ELEMENT.HITS_CONTAINER}`);

    new LatestPost({
      $target: postContainer,
    });
    new Contribution({ $target: resumeContainer });
    new Hits({ $target: hitsContainer });
  };

  addListeners = () => {};
}

export default Home;
