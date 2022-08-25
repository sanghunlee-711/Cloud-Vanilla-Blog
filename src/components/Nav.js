import { SHOW_ROUTE } from '../constants/route.js';
import BurgerNavPopup from './BurggerNavPopup.js';
import Modal from './Modal.js';

const Nav = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('nav');
  wrapper.setAttribute('class', 'nav');
  this.$target.appendChild(wrapper);

  this.state = {
    isBurger: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    modal.setState(nextState.isBurger);
  };

  const handleBurgerButton = () => {
    const button = document.querySelector('.burger-button');
    this.setState({ ...this.state, isBurger: !this.state.isBurger });
  };

  this.render = () => {
    wrapper.innerHTML = `
      <h1>Sanghun(Cloud) Lee</h1>
      <ul class="nav_list">
        ${SHOW_ROUTE.map((el) => {
          return `
            <li>
              <a href = "${el.path}">${el.name.toUpperCase()}</a>
            </li>
          `;
        }).join('')}
      </ul>
      <button class="burger-button">
        <div class="burger-button-line"></div>
        <div class="burger-button-line"></div>
        <div class="burger-button-line"></div>
      </button>
    `;
  };

  this.render();

  const modal = new Modal({
    isVisible: this.state.isBurger,
    Component: BurgerNavPopup,
    handleModal: handleBurgerButton,
  });

  wrapper.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('burger-button') ||
      e.target.classList.contains('burger-button-line')
    ) {
      handleBurgerButton();
    }
  });

  window.addEventListener('hashchange', () => {
    this.setState({ ...this.state, isBurger: false });
  });
};

export default Nav;
