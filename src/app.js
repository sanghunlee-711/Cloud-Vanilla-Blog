import ContentLayout from './components/ContentLayout.js';
import Header from './components/Header.js';
import HeaderContainer from './components/HeaderContainer.js';
import Nav from './components/Nav.js';
import { initialRoutes } from './routes.js';
const App = function ({ $target }) {
  this.$target = $target;
  const headerContainer = document.querySelector('.header_container');
  //Basic Layout for this app
  new HeaderContainer({ $target: this.$target });

  //*todo: 리팩토링필요
  headerContainer &&
    new Header({ $target: headerContainer }) &&
    new Nav({ $target: document.querySelector('.header_container') });

  new ContentLayout({ $target: this.$target });

  //routing
  initialRoutes({ el: document.querySelector('.layout-container') });
};

export default App;
