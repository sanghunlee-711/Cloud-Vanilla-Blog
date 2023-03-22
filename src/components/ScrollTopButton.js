class ScrollTopButton {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('button');
    this.$wrapper.setAttribute('class', 'scroll-top-button');
    $target.appendChild(this.$wrapper);

    this.render();
    this.addEventListeners();
  }

  render = () => {
    this.$wrapper.innerHTML = `
    <i class="fas fa-arrow-up"></i>
    `;
  };

  addEventListeners = () => {
    const $root = document.querySelector('#root');

    this.$wrapper.addEventListener('click', () => {
      $root.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  };
}

export default ScrollTopButton;
