import { ROUTES } from './constants/route.js';

export default class Router {
  constructor({ $target }) {
    this.$target = $target;
    this.routeList = ROUTES;
    // this.doInitialRouting();
    this.addEventListener();
  }

  renderHTML = ({ $element, routeObject }) => {
    $element.innerHTML = '';

    const Component = routeObject.components;

    new Component({
      $target: $element,
    });
  };

  doInitialRouting = () => {
    this.renderHTML({
      $element: this.$target,
      routeObject: this.routeList[0],
    });
  };

  getRouteObject = () => {
    let route = this.routeList[0];

    this.routeList.forEach((historyRoute) => {
      const url = new URL(window.location);
      const pathName = url.pathname;

      const { path } = historyRoute;

      if (pathName === path) route = historyRoute;
    });

    return route;
  };

  addEventListener = () => {
    window.addEventListener('routechange', (event) => {
      const {
        detail: { to, isReplace },
      } = event;

      const isChangeComponent =
        isReplace === false || detail.to !== location.pathname;

      if (isChangeComponent) window.history.pushState(null, '', to);
      else window.history.replaceState(null, '', to);

      this.renderHTML({
        $element: this.$target,
        routeObject: this.getRouteObject(),
      });
    });

    window.addEventListener('popstate', () => {
      this.renderHTML({
        $element: this.$target,
        routeObject: this.getRouteObject(),
      });
    });

    window.onload = () => {
      this.renderHTML({
        $element: this.$target,
        routeObject: this.getRouteObject(),
      });
    };
  };
}
