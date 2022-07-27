//ref: https://github.dev/kdydesign/spa-router
import Home from './pages/Main.js';
import PostsTest from './pages/posts/Posts-test.js';

export const routes = [
  { path: '/', component: Home },
  { path: '#posts', component: PostsTest },
];

// get hash history route
//hash를 사용하면 경로가 먼저 이동하고 경로값을 본 뒤 렌더를 바꿔주는 방식임.
function getHashRoute(pathName) {
  let route = routes[0];

  routes.forEach((route, idx) => {
    if (pathName === route.path.replace('#', '')) {
      route = routes[idx];
    }
  });

  return route;
}

const initialRoutes = function ($target) {
  renderInRoute($target, routes[0]);

  window.addEventListener('hashchange', function () {
    return renderInRoute($target, getHashRoute(routes[0].path));
  });
};

// set hash history
function hashRouterPush(pathName, el) {
  renderInRoute(el, getHashRoute(pathName));
}

function renderInRoute($target, route) {
  const Component = route.component;

  new Component({ $target });
}

export { initialRoutes, hashRouterPush };
