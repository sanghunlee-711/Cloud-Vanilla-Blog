const ROUTE_PATH = ['/', '#posts'];

const Nav = function ({ $target }) {
  this.$target = $target;

  this.render = function () {
    const nav = document.createElement('nav');
    const el = `
    <ul>
    ${ROUTE_PATH.map((el) => {
      return `
        <li>
          <a href=${el} class="nav_link">${el
        .replace('#', '')
        .toUpperCase()}</a>
        </li>
      `;
    }).join('')}
    </ul>
    `;
    nav.innerHTML = el;
    this.$target.appendChild(nav);
  };

  this.render();
};

export default Nav;
