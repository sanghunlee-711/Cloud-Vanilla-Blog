import { API_ADDRESS } from '../constants/config.js';
import { getContentId, resetDisqus } from '../utils/index.js';

const Content = function ({ $target }) {
  this.$target = $target;
  this.contentId = getContentId().contentId;
  this.type = getContentId().type;

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'content-main-container');
  this.$target.appendChild(wrapper);

  this.data = {};

  this.setData = (nextData) => {
    this.data = { ...nextData };
    this.render();
  };

  this.getPostData = async (slug) => {
    const res = await fetch(
      `${API_ADDRESS}/post?slug=${this.contentId}&type=${this.type}`
    );
    const resJson = await res.json();
    const data = await resJson;
    // loadCommentBox(`${this.type || 'error'}_${this.contentId || 'error'}`);
    this.setData(data);
  };

  this.render = () => {
    const data = this.data;
    const { src, width, height } = this.data.frontMatter.image;

    wrapper.innerHTML = `
      <div class="title-container">
      <h1 class="title"> ${data.frontMatter.title}</h1>
      <div class="title-info">
        <div>
          <span>${data.frontMatter.author}</span>
          <span>${data.frontMatter.date.split(' ')[0]}</span>
        </div>
        <div>
          <a href="#post"> 목록 </a>
        </div>
      </div>
      </div>
      <div style="display: flex; justify-content:center; margin-bottom:24px">
        <img src=${src} 
          alt="post-title-image" 
          style="width: ${width}px; height: ${height}px">
      </div>
      <div class="hljs">
        ${JSON.parse(data.content)}
      </div>
      <div id="disqus_thread"></div>
    `;

    resetDisqus(
      `https://blog.cloud-sanghun.com/#!${data.frontMatter.title}`,
      `https://blog.cloud-sanghun.com/#!${data.frontMatter.title}`,
      data.frontMatter.title,
      'ko'
    );
  };

  this.getPostData();
};

export default Content;
