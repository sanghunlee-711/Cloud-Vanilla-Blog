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
  e.preventDefault();

  const target = e.target;
  console.log({ target });
  if (!(target instanceof HTMLAnchorElement)) return;

  const targetURL = e.target.href.replace(PAGE_ADDRESS, '');
  console.log({ targetURL });
  routeEvent(targetURL);
};
