import { SHOW_ROUTE } from '../common/constants/route.js';
import BurgerNavPopup from './BurggerNavPopup.js';

import Modal from './Modal.js';

class Nav {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('nav');
    this.$wrapper.setAttribute('class', 'nav');
    $target.appendChild(this.$wrapper);

    this.state = {
      isBurger: false,
    };

    this.render();
    this.renderModal();
    this.addListeners();
  }

  setState = (nextState) => {
    this.state = nextState;
    this.renderModal();
  };

  handleBurgerButton = (visible = !this.state.isBurger) => {
    this.setState({ ...this.state, isBurger: visible });
  };

  render = () => {
    this.$wrapper.innerHTML = `
      <h1>Sanghun Lee</h1>
      <ul class="nav_list">
        ${SHOW_ROUTE.map((el) => {
          return `
            <li>
              <a href="${el.path}" data-id="route">${el.name.toUpperCase()}</a>
            </li>
          `;
        }).join('')}
      </ul>
      <button class="burger-button" role="button">
        <div class="burger-button-line"></div>
        <div class="burger-button-line"></div>
        <div class="burger-button-line"></div>
      </button>
    `;
  };

  renderModal = () => {
    new Modal({
      isVisible: this.state.isBurger,
      Component: BurgerNavPopup,
      handleModal: this.handleBurgerButton.bind(this),
    });
  };

  addListeners = () => {
    document.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('burger-button') ||
        e.target.classList.contains('burger-button-line')
      ) {
        this.handleBurgerButton();
      }
    });
  };
}

export default Nav;
