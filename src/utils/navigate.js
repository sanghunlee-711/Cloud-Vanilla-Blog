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

  if (target.href && target.href.length) {
    const targetURL = e.target.href;

    routeEvent(targetURL);
  }
};
