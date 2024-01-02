import ContentLayout from "./components/ContentLayout.js";
import HeaderContainer from "./components/HeaderContainer.js";
import ScrollTopButton from "./components/ScrollTopButton.js";
import TranslationButton from "./components/TranslationButton.js";
import Router from "./routes.js";

const TRANSLATION_WHITE_LIST = ["/resume", "/portfolio"];
class App {
  currentPath = window.location.pathname;

  constructor({ $target }) {
    this.$target = $target;
    //Basic Layout for this app

    new HeaderContainer({ $target: this.$target });
    new ContentLayout({ $target: this.$target });
    new ScrollTopButton({ $target: this.$target });

    new TranslationButton({ $target: this.$target });

    //routing
    new Router({ $target: document.querySelector(".layout-container") });

    // if (process.env.NODE_ENV !== 'development') makeGA();
  }
}

export default App;
