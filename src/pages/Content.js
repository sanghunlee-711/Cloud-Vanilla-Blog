import { getContentId, resetDisqus } from '../utils/index.js';
import { addRouteEventListener } from '../utils/navigate.js';

class Content {
  constructor({ $target }) {
    this.$target = $target;
    this.contentId = getContentId().contentId;
    this.type = getContentId().type;
    this.$wrapper = document.createElement('main');
    this.$wrapper.setAttribute('class', 'content-main-container');
    $target.appendChild(this.$wrapper);

    this.data = {};

    this.getPostData();
    this.addEventListeners();
  }

  setData = (nextData) => {
    this.data = { ...nextData };
    this.render();
  };

  getPostData = async () => {
    try {
      const res = await fetch(
        `${process.env.API_ADDRESS}/post?slug=${this.contentId}&type=${this.type}`
      );
      const resJson = await res.json();
      const data = await resJson;
      this.setData(data);
    } catch (e) {
      console.error('게시물 데이터 불러오기 에러', e);
    }
  };

  render = () => {
    const {
      image: { src, width, height },
      title,
      author,
      date,
    } = this.data.frontMatter;

    this.$wrapper.innerHTML = `
      <div class="title-container">
      <h1 class="title"> ${title}</h1>
      <div class="title-info">
        <div>
          <span>${author}</span>
          <span>${date?.split(' ')[0]}</span>
        </div>
        <div>
          <a href="/post"> 목록 </a>
        </div>
      </div>
      </div>
      <div style="display: flex; justify-content:center; margin-bottom:24px">
        <img src=${src} 
          alt="post-title-image" 
          style="width: ${width}px; height: ${height}px">
      </div>
      <div class="hljs">
        ${JSON.parse(this.data.content)}
      </div>
      <div id="disqus_thread"></div>
    `;

    resetDisqus(title);
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      addRouteEventListener(e);
    });
  };
}

export default Content;
