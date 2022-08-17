const Home = function ({ $target }) {
  this.$target = $target;

  this.render = function () {
    const el = `this is main page!`;
    this.$target.innerHTML = el;
  };
  this.render();
};
export default Home;
