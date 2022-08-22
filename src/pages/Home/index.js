import Resume from './components/Contribution.js';
import LatestPost from './components/LatestPost.js';
const Home = function ({ $target }) {
  this.$target = $target;

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'home-main-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div>
        <section class="latest-post-container"></section>
        <section class="resume-container"></section>
      </div>
    `;
  };

  this.render();

  const postContainer = document.querySelector('.latest-post-container');
  const resumeContainer = document.querySelector('.resume-container');
  if (postContainer && resumeContainer) {
    const latestPost = new LatestPost({
      $target: postContainer,
    });
    new Resume({ $target: resumeContainer });
  }
};

export default Home;
