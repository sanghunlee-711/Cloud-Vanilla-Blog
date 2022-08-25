const HeaderContainer = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('header');
  wrapper.setAttribute('class', 'header');
  this.$target.appendChild(wrapper);
  // let prev = window.pageYOffset;

  this.render = () => {
    wrapper.innerHTML = `
      <div class="header_container"></div>
    `;
  };

  this.render();

  // window.addEventListener('scroll', (e) => {
  //   let curr = window.pageYOffset;

  //   if (prev < curr) {
  //     wrapper.classList.add('hide-header');
  //   } else {
  //     wrapper.classList.remove('hide-header');
  //   }
  //   prev = curr;
  // });
};

export default HeaderContainer;
