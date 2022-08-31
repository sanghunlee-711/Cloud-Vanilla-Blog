import { resetDisqus } from '../../utils/index.js';

const GuestBook = function ({ $target }) {
  this.$target = $target;
  this.title = 'guest-book-cloud';
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'guest-book-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div class="guest-book-wrapper">
        <h1>This is Guest book</h1>
        <h2>
          Please feel free to comment on this blog and contents.
        </h2>
      </div>
      <div id="disqus_thread"></div>
    `;

    resetDisqus(
      `https://blog.cloud-sanghun.com/#!${this.title}`,
      `https://blog.cloud-sanghun.com/#!${this.title}`,
      this.title,
      'ko'
    );
  };
  this.render();
};

export default GuestBook;
