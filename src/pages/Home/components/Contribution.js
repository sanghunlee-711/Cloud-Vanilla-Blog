const Contribution = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'contribution-wrapper');
  this.$target.appendChild(wrapper);

  const onSeeMore = () => {
    window.open('https://github.com/sanghunlee-711', '_blank');
  };

  this.render = () => {
    wrapper.innerHTML = `
      <div class="see-more">
        <h1>Github Contribution</h1>
        <button class="basic-button" data-id="see-github">See more code</button>
      </div>
      <img class="github-chart" src="https://ghchart.rshah.org/000C1C/sanghunlee-711"/>

    `;
  };

  this.render();

  wrapper.addEventListener('click', (e) => {
    if (
      e.target.className !== 'basic-button' ||
      e.target.dataset.id !== 'see-github'
    )
      return;
    onSeeMore(e);
  });
};

export default Contribution;
