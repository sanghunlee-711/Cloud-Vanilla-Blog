import { $ELEMENT } from '../../../../constants/element.js';

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
    window.open('https://github.com/sanghunlee-711', '_blank');
  };

  render = () => {
    wrapper.innerHTML = `
      <div class="see-more">
        <h1>Github Contribution</h1>
        <button class="basic-button" data-id="see-github">See more code</button>
      </div>
      <img class="github-chart" src="https://ghchart.rshah.org/000C1C/sanghunlee-711"/>

    `;
  };

  addEventListener = () => {
    this.$wrapper.addEventListener('click', (e) => {
      const isContributionButton =
        e.target.className !== 'basic-button' ||
        e.target.dataset.id !== 'see-github';

      if (!isContributionButton) return;
      this.onSeeMore(e);
    });
  };
}

export default Contribution;
