import { SHOW_ROUTE } from '../constants/route.js';
import { addRouteEventListener } from '../utils/navigate.js';

const BurgerNavPopup = function ({ $target, handleModal }) {
  this.$target = $target;
  const $wrapper = document.createElement('ul');
  $wrapper.className = 'burger_list';
  this.$target.appendChild($wrapper);

  this.render = () => {
    $wrapper.innerHTML = `
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

  this.addEventListeners = () => {
    $wrapper.addEventListener('click', (e) => {
      const target = e.target;
      if (target instanceof HTMLAnchorElement) {
        addRouteEventListener(e);
        handleModal(false);
      }
    });
  };

  this.render();
  this.addEventListeners();
};

export default BurgerNavPopup;
