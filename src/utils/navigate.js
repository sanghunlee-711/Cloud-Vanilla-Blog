import { PAGE_ADDRESS } from '../constants/config.js';

export const routeEvent = (to, isReplace = false) => {
  const customRouteEvent = new CustomEvent('routechange', {
    detail: {
      to,
      isReplace,
    },
  });

  dispatchEvent(customRouteEvent);
};

export const addRouteEventListener = (e) => {
  console.log(e.target);
  e.preventDefault();

  const target = e.target;

  // if (!(target instanceof HTMLAnchorElement)) return;
  if (target.href) {
    const targetURL = e.target.href.replace(PAGE_ADDRESS, '');

    routeEvent(targetURL);
  }
};
