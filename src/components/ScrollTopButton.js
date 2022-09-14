const ScrollTopButton = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('button');
  wrapper.setAttribute('class', 'scroll-top-button');
  this.render = () => {
    wrapper.innerHTML = `
    <i class="fas fa-arrow-up"></i>
    `;
    this.$target.appendChild(wrapper);
  };
  this.render();

  wrapper.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};

export default ScrollTopButton;
