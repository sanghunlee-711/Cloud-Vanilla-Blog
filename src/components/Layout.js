import Nav from './Nav.js';

const Layout = function () {
  this.root = document.querySelector('#root');
  this.router = document.createElement('section');

  this.render = function () {
    this.router.setAttribute('id', 'router-container');
    this.root.appendChild(this.router);
  };

  const nav = new Nav({ $target: root });
  this.render();
};

export default Layout;
