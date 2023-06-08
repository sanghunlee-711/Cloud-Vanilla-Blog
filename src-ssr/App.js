import { NavigationBar } from './common/components/csr/NavigationBar.js';
import { Router } from './router.js';

export const App = ({ req }) => {
  // const path = req.path;

  return /* html */ `
    <header>
      <a href="/">SSR Blog!!</a>
      ${NavigationBar()}
    </header>
    ${Router(req)?.render()}
    <footer>
      Test SSR Blog with SSR Sample 
    </footer>
  `;
};
