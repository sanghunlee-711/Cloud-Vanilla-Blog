import Header from './Header.js';
import Nav from './Nav.js';

const HeaderContainer = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('header');
  wrapper.setAttribute('class', 'header');
  if (!document.querySelector('.header')) this.$target.appendChild(wrapper);

  this.render = () => {
    const container = document.createElement('div');
    container.className = 'header_container';
    new Header({ $target: container }).render();
    new Nav({ $target: container }).render();

    wrapper.innerHTML = container.innerHTML;
  };

  this.render();
};

export default HeaderContainer;
