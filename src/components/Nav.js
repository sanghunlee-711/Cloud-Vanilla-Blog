import { ROUTES } from '../constants/route.js';

const UNWATCHABLE_LIST = ['Content', 'Resume'];
const SHOW_ROUTE = ROUTES.filter((el) => !UNWATCHABLE_LIST.includes(el.name));

const Nav = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('nav');
  wrapper.setAttribute('class', 'nav');
  this.$target.appendChild(wrapper);

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
    `;
  };

  this.render();
};

export default Nav;
