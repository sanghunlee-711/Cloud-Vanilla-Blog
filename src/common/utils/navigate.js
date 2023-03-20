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
  const target = e.target;

  if (target.dataset.id !== 'route') return;

  e.preventDefault();

  if (target.href && target.href.length) {
    const targetURL = e.target.href;

    routeEvent(targetURL);
  }
};
