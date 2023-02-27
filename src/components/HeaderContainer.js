import { addRouteEventListener } from '../utils/navigate.js';
import Header from './Header.js';
import Nav from './Nav.js';

class HeaderContainer {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('header');
    this.$wrapper.setAttribute('class', 'header');
    this.$navContainer = document.createElement('div');
    this.$wrapper.appendChild(this.$navContainer);
    $target.appendChild(this.$wrapper);

    this.render();
    this.addListeners();
  }

  render = () => {
    this.$navContainer.className = 'header_container';
    new Header({ $target: this.$navContainer });
    new Nav({ $target: this.$navContainer });
  };

  addListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      addRouteEventListener(e);
    });
  };
}

export default HeaderContainer;
