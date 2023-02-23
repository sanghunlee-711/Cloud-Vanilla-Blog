import { SHOW_ROUTE } from '../constants/route.js';

const BurgerNavPopup = function ({ $target, handleModal }) {
  this.$target = $target;
  const wrapper = document.createElement('ul');
  wrapper.className = 'burger_list';
  this.$target.appendChild(wrapper);

  /**
   * todo
   * 경로 맞춰서 path모양 바꾸깅
   * 여기랑 다른 nav도
   */

  this.render = () => {
    wrapper.innerHTML = `
        ${SHOW_ROUTE.map((el) => {
          return `
            <li>
              <a class="burger-target"  href = "${
                el.path
              }">${el.name.toUpperCase()}</a>
            </li>
          `;
        }).join('')}
    `;
  };

  this.render();
};

export default BurgerNavPopup;
