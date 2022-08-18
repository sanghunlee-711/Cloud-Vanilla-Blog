const HeaderContainer = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('header');
  wrapper.setAttribute('class', 'header');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div class="header_container"></div>
    `;
  };

  this.render();
};

export default HeaderContainer;
