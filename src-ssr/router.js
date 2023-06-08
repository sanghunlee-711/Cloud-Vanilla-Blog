import { ROUTE_MAP } from './common/constants/router.js';

export const Router = (path) => {
  const Component = ROUTE_MAP.has(path) ? ROUTE_MAP.get(path) : null;
  console.log('@@@@@', Component);
  if (!Component) return '404 NotFound';
  return Component();
};
