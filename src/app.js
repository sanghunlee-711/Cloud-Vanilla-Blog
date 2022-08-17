import Layout from './components/Layout.js';

const App = function ({ $target }) {
  this.$target = $target;
  const layout = new Layout();
};

export default App;
