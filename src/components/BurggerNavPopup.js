import { SHOW_ROUTE } from '../constants/route.js';

const BurgerNavPopup = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('ul');
  wrapper.className = 'burger-contaier';
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <ul class="burger_list">
        ${SHOW_ROUTE.map((el) => {
          return `
            <li>
              <a href = "${el.path}">${el.name.toUpperCase()}</a>
            </li>
          `;
        }).join('')}
      </ul>
    `;
  };

  this.render();
};

export default BurgerNavPopup;
