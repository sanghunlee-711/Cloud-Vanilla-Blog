import { ROUTES } from '../constants/route.js';

const Nav = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('nav');
  wrapper.setAttribute('class', 'nav');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <h1>Sanghun(Cloud) Lee</h1>
      <ul class="nav_list">
        ${ROUTES.filter((el) => el.name !== 'Content')
          .map((el) => {
            return `
            <li>
              <a href = "${el.path}">${el.name.toUpperCase()}</a>
            </li>
          `;
          })
          .join('')}
      </ul>
    `;
  };

  this.render();
};

export default Nav;
