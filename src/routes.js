//ref: https://github.dev/kdydesign/spa-router
import Home from './pages/Home.js';
import PostsTest from './pages/posts/Posts-test.js';

export const routes = [
  { path: '/', component: Home },
  { path: '#posts', component: PostsTest },
];

const locationHandler = async () => {
  let location = window.location.hash.replace('#', '');
  if (location.length === 0) location = '/';
  console.log(location);
  let route = routes.filter((el) => el.path === location)[0];
  console.log(route);
  // if (!route.length) route = routes[0];
  const routeWrapper = document.querySelector('#router-container');
  const Comp = route.component;
  //render in router-container
  new Comp({ $target: routeWrapper });
};

export { locationHandler };
