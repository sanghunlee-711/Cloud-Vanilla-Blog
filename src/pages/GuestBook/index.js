import { makeDisqus } from '../../common/utils/disqus';

export default class GuestBook {
  constructor({ $target }) {
    this.$target = $target;
    this.title = 'guest-book-cloud';
    this.wrapper = document.createElement('div');
    this.$target.appendChild(this.wrapper);
    this.wrapper.setAttribute('class', 'guest-book-container');

    this.render();
    makeDisqus();
  }

  render = () => {
    this.wrapper.innerHTML = `
      <div class="guest-book-wrapper">
        <h1>This is Guest book</h1>
        <h2>
          Please feel free to comment on this blog and contents.
        </h2>
      </div>
      <div id="disqus_thread"></div>
    `;
  };
}
