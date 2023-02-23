import { SHOW_ROUTE } from '../constants/route.js';
import { addRouteEventListener } from '../utils/navigate.js';

const BurgerNavPopup = function ({ $target, handleModal }) {
  this.$target = $target;
  const $wrapper = document.createElement('ul');
  $wrapper.className = 'burger_list';
  this.$target.appendChild($wrapper);

  /**
   * todo
   * 경로 맞춰서 path모양 바꾸깅
   * 여기랑 다른 nav도
   */

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
      // if (e.target.classList.contains('burger-target')) {
      //   handleModal();
      // }
      const target = e.target;
      if (target instanceof HTMLAnchorElement) {
        handleModal();
        addRouteEventListener(e);
      }
    });
  };

  this.render();
  this.addEventListeners();
};

export default BurgerNavPopup;
