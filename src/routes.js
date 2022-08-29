import { ROUTES } from './constants/route.js';

function renderHTML(el, route) {
  el.innerHTML = '';

  const Component = route.components;

  if (route.name === 'Content') {
    new Component({
      $target: el,
      contentId: getContentId().contentId,
      type: getContentId().type,
    });
  } else {
    new Component({
      $target: el,
    });
  }
}

const getContentId = () => {
  const hashLocation = window.location.hash;
  console.log('@@@@@', hashLocation);
  if (!hashLocation.includes('#contentId=')) return null;

  const [contentId, type] = hashLocation.split('&');
  return { contentId: contentId.split('=')[1], type: type.split('=')[1] };
};

function getHashRoute() {
  let route = ROUTES[0];

  ROUTES.forEach((hashRoute) => {
    const hashLocation = window.location.hash;

    if (getContentId()) {
      route = ROUTES.filter((el) => el.name === 'Content')[0];
      return route;
    }

    if (hashLocation === hashRoute.path) {
      route = hashRoute;
    }
  });
  return route;
}

export function initialRoutes({ el }) {
  // renderHTML(el, ROUTES[0]);

  window.addEventListener('hashchange', () => {
    return renderHTML(el, getHashRoute());
  });
  //얘가 두번 렌더링 시키는 이유일듯..
  //*todo: 리팩토링 필요
  window.onload = () => {
    return renderHTML(el, getHashRoute());
  };
}
