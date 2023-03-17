import { SHOW_ROUTE } from '../common/constants/route.js';
import { addRouteEventListener } from '../utils/navigate.js';

class BurgerNavPopup {
  constructor({ $target, handleModal }) {
    this.$target = $target;

    this.$wrapper = document.createElement('ul');
    this.$wrapper.className = 'burger-list';
    this.handleModal = handleModal;
    $target.appendChild(this.$wrapper);

    this.render();
    this.addEventListeners();
  }

  render = () => {
    this.$wrapper.innerHTML = `
        ${SHOW_ROUTE.map((el) => {
          return `
            <li>
              <a class="burger-target"  href="${
                el.path
              }">${el.name.toUpperCase()}</a>
            </li>
          `;
        }).join('')}
    `;
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      const target = e.target;
      if (target instanceof HTMLAnchorElement) {
        addRouteEventListener(e);
        this.handleModal(false);
      }
    });
  };
}

export default BurgerNavPopup;
