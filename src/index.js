import Layout from './components/Layout.js';
import { hashRouterPush, initialRoutes } from './routes.js';

const layout = new Layout();
const routerWrapper = document.querySelector('#router-container');

initialRoutes(routerWrapper);

window.onload = () => {
  const hashLinker = document.querySelectorAll('a.nav-link');

  hashLinker.forEach((el) => {
    el.addEventListener('click', (e) => {
      let pathName = e.target.getAttribute('href');
      console.log(pathName);
      pathName = pathName.replace('#', '/');
      hashRouterPush(pathName, routerWrapper);
    });
  });
};
