import ContentLayout from './components/ContentLayout.js';
import HeaderContainer from './components/HeaderContainer.js';
import { initialRoutes } from './routes.js';
import { makeGA } from './utils/index.js';

const App = function ({ $target }) {
  this.$target = $target;

  //Basic Layout for this app
  new HeaderContainer({ $target: this.$target });
  new ContentLayout({ $target: this.$target });

  //routing
  initialRoutes({ el: document.querySelector('.layout-container') });
  if (process.env.NODE_ENV !== 'development') makeGA();
};

export default App;
