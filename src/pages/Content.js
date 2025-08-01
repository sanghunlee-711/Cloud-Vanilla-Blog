import { makeDisqus } from "../common/utils/disqus.js";
import { getContentId } from "../common/utils/index.js";
import { addRouteEventListener } from "../common/utils/navigate.js";
import Loader from "../components/Loader.js";

class Content {
  constructor({ $target }) {
    this.$target = $target;
    this.contentId = getContentId().contentId;
    this.type = getContentId().type;
    this.$wrapper = document.createElement("main");
    this.$wrapper.setAttribute("class", "content-main-container");
    // <div id="disqus_thread"></div>
    this.$disqus = document.createElement("div");
    this.$disqus.setAttribute("id", "disqus_thread");

    $target.appendChild(this.$wrapper);
    $target.appendChild(this.$disqus);
    this.data = {};

    this.getPostData();
    this.addEventListeners();
  }

  setData = (nextData) => {
    this.data = { ...nextData };
    this.render();
  };

  getPostData = async () => {
    const loader = new Loader({ $target: this.$target });

    try {
      loader.handleLoader(true);
      const res = await fetch(
        `/api/post?slug=${this.contentId}&type=${this.type}`
      );
      const resJson = await res.json();
      const data = await resJson;
      this.setData(data);
      loader.handleLoader(false);
    } catch (e) {
      console.error("게시물 데이터 불러오기 에러", e);
      loader.handleLoader(false);
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
      <h1 class="title">${title}</h1>
      <div class="title-info">
        <div>
          <span>${author}</span>
          <span>${date?.split(" ")[0]}</span>
        </div>
        <div>
          <a href="/post" data-id="route"> 목록 </a>
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
    `;

    makeDisqus();
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener("click", (e) => {
      addRouteEventListener(e);
    });
  };
}

export default Content;
