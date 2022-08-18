import ContentLayout from './components/ContentLayout.js';
import Header from './components/Header.js';
import HeaderContainer from './components/HeaderContainer.js';
import Nav from './components/Nav.js';
import { initialRoutes } from './routes.js';
const App = function ({ $target }) {
  this.$target = $target;

  //Basic Layout for this app
  new HeaderContainer({ $target: this.$target });
  new Header({ $target: document.querySelector('.header_container') });
  new Nav({ $target: document.querySelector('.header_container') });
  new ContentLayout({ $target: this.$target });

  //routing
  initialRoutes({ el: document.querySelector('.layout-container') });
};

export default App;
