import { addRouteEventListener } from '../utils/navigate.js';
import Header from './Header.js';
import Nav from './Nav.js';

class HeaderContainer {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('header');
    this.$wrapper.setAttribute('class', 'header');

    this.render();
    this.addListeners();
  }

  render = () => {
    new Header({ $target: this.$wrapper });
    new Nav({ $target: this.$wrapper });
    this.$target.appendChild(this.$wrapper);
  };

  addListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      addRouteEventListener(e);
    });
  };
}

export default HeaderContainer;
