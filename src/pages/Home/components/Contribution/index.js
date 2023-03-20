import { $ELEMENT } from './constants/element.js';
import { LINK } from './constants/link.js';

class Contribution {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('div');
    this.$wrapper.setAttribute('class', $ELEMENT.CONTRIBUTION_WRAPPER);
    $target.appendChild(this.$wrapper);

    this.render();
    this.addEventListener();
  }

  onSeeMore = () => {
    window.open(LINK.GITHUB, '_blank');
  };

  template = () => {
    return `
    <div class="${$ELEMENT.SEE_MORE}">
      <h1>Github Contribution</h1>
      <button class="basic-button" data-id="${$ELEMENT.SEE_GITHUB}">See more code</button>
    </div>
    <img class="${$ELEMENT.GITHUB_CHART}" src="${LINK.GITHUB_CHART}" alt="github-commit-log"/>
    `;
  };

  render = () => {
    this.$wrapper.innerHTML = this.template();
  };

  addEventListener = () => {
    this.$wrapper.addEventListener('click', (e) => {
      if (e.target.dataset.id === $ELEMENT.SEE_GITHUB) {
        this.onSeeMore(e);
      }
    });
  };
}

export default Contribution;
