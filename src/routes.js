import { ROUTES } from './constants/route.js';
function renderHTML(el, Component) {
  el.innerHTML = '';
  if (Component.name === 'Content') {
    new Component({
      $target: el,
      contentId: getContentId(),
    });
  } else {
    new Component({
      $target: el,
    });
  }
}

const getContentId = () => {
  const hashLocation = window.location.hash;
  if (!hashLocation.includes('#contentId=')) return null;

  const [_, contentId] = hashLocation.split('=');
  return contentId;
};

function getHashRoute() {
  let route = ROUTES[0].components;

  ROUTES.forEach((hashRoute) => {
    const hashLocation = window.location.hash;

    if (getContentId()) {
      route = ROUTES.filter((el) => el.name === 'Content')[0].components;
      return route;
    }

    if (hashLocation === hashRoute.path) {
      route = hashRoute.components;
    }
  });
  return route;
}

export function initialRoutes({ el }) {
  renderHTML(el, ROUTES[0].components);

  window.addEventListener('hashchange', () => {
    return renderHTML(el, getHashRoute());
  });
  window.onload = () => {
    renderHTML(el, getHashRoute());
  };
}
