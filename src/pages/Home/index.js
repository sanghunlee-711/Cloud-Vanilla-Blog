import LatestPost from './components/LatestPost';

const Home = function ({ $target }) {
  this.$target = $target;

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'home-main-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div>
        <section class="latest-post"></section>
      </div>
    `;
  };

  this.render();
  const postContainer = document.querySelector('.latest-post');
  if (postContainer) {
    const latestPost = new LatestPost({
      $target: postContainer,
    });
  }
};

export default Home;
