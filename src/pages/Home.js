const Home = function ({ $target }) {
  this.$target = $target;

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'home-main-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div>
        Home!
      </div>
    `;
  };

  this.render();
};

export default Home;
