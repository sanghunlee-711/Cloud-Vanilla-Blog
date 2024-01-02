import { POST_SELECT_MAP } from "../../common/constants/common.js";
import {
  addRouteEventListener,
  routeEvent,
} from "../../common/utils/navigate.js";
import { PostCard } from "../../components/PostCard.js";

class Posts {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement("main");
    this.$wrapper.setAttribute("class", "post-main-container");
    this.$endOfPage = document.createElement("p");
    this.$endOfPage.setAttribute("class", "end-of-page");
    this.$endOfPage.textContent = "End Of Contents";

    $target.appendChild(this.$wrapper);
    $target.appendChild(this.$endOfPage);

    this.urlParams = new URLSearchParams(window.location.search);
    this.state = {
      currentPage: 1,
      contentIncrease: 3,
      totalItemCount: 1,
      sortKey: this.urlParams.get("type") || POST_SELECT_MAP[0].key,
      isContinue: false,
      list: [],
    };

    // this.render();
    this.addEventListener();
    this.getPostData();
  }

  setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  getPostData = async () => {
    try {
      const res = await fetch(
        `/api/post-list?type=${this.state.sortKey}&countPerPage=${this.state.contentIncrease}&pageNo=${this.state.currentPage}`
      );
      const resJson = await res.json();

      const data = resJson.data;
      const pageState = resJson.pagination;
      const isContinue = resJson.success;

      this.setState({
        ...this.state,
        totalItemCount: pageState.totalCount,
        currentPage: ++pageState.pageNo,
        isContinue,
        list: [...this.state.list, ...data],
      });
    } catch (e) {
      console.error("포스팅 데이터 불러오기 에러 발생", e);
    }
  };

  handleInfiniteScroll = async () => {
    const isStop =
      this.state.totalItemCount <= this.state.list.length ||
      this.state.totalItemCount <= this.state.currentPage * 3 ||
      !this.state.isContinue; //얘는 임시방편..

    if (isStop) return;

    await this.getPostData();
  };

  onChangePostType = (value) => {
    const targetURL = `/post?type=${value}`;

    this.setState({
      ...this.state,
      currentPage: 1,
      contentIncrease: 3,
      totalItemCount: 1,
      sortKey: value,
      list: [],
    });

    routeEvent(targetURL);
  };

  render = () => {
    this.$wrapper.innerHTML = `
    <div class="post_container">
      <select class="post-selector">
      ${POST_SELECT_MAP.map(({ name, key }) => {
        return `
          <option ${
            key === this.state.sortKey ? "selected" : ""
          } value=${key} data-key=${key}>
            ${name}
          </option>
        `;
      }).join("")}
      </select>
      <ul class="post-list-container">
      ${this.state.list
        .map(
          ({
            slug,
            frontMatter: { title, date, image, categories, tags, summary },
            content,
          }) => {
            return `
            <li>
              ${PostCard({
                imgUrl: image?.src,
                slug,
                sortKey: this.state.sortKey,
                title,
                categories,
                date,
                summary,
                content,
              })}
          </li>
        `;
          }
        )
        .join("")}
      </ul>
  </div>
    `;
  };

  addEventListener = () => {
    const $endOfPage = document.querySelector(".end-of-page");
    const $root = document.querySelector("#root");

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          this.handleInfiniteScroll();
        });
      },
      { root: $root, threshold: 0.3 }
    );

    this.observer.observe($endOfPage);

    this.$wrapper.addEventListener("change", (e) => {
      if (e.target.classList.contains("post-selector")) {
        this.onChangePostType(e.target.value);
      }
    });

    this.$wrapper.addEventListener("click", (e) => {
      const target = e.target;
      if (target instanceof HTMLAnchorElement) {
        window.removeEventListener(this.handleInfiniteScroll);
        addRouteEventListener(e);
      }
    });
  };
}

export default Posts;
