import { ROUTE_MAP } from './common/constants/router.js';

export const Router = (request) => {
  const path = request?.path;

  const Component = ROUTE_MAP.has(path) ? ROUTE_MAP.get(path) : null;

  if (!Component)
    return {
      render: () => {
        return '404 NotFound';
      },
    };
  return new Component(request);
};
