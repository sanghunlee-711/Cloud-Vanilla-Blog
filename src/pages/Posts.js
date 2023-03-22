import { PostCard } from '../components/PostCard.js';
import { POST_SELECT_MAP } from '../constants/common.js';
import { API_ADDRESS } from '../constants/config.js';
import { addRouteEventListener, routeEvent } from '../utils/navigate.js';
export class Posts {
  constructor({ $target }) {
    this.$target = $target;
    this.data = [];
    this.$wrapper = document.createElement('main');
    this.$wrapper.setAttribute('class', 'post-main-container');
    $target.appendChild(this.$wrapper);
    this.urlParams = new URLSearchParams(window.location.search);
    this.state = {
      currentPage: 1,
      contentIncrease: 3,
      totalItemCount: 1,
      sortKey: this.urlParams.get('type') || POST_SELECT_MAP[0].key,
      isContinue: false,
    };

    this.getPostData();

    this.addEventListener();
  }

  setListData = (nextData) => {
    this.data = [...nextData];
    this.render();
  };

  setState = (nextState) => {
    this.state = nextState;
  };

  getPostData = async () => {
    try {
      const res = await fetch(
        `${API_ADDRESS}/post-list?type=${this.state.sortKey}&countPerPage=${this.state.contentIncrease}&pageNo=${this.state.currentPage}`
      );
      const resJson = await res.json();

      const data = resJson.data;
      const pageState = resJson.pagination;
      const isContinue = resJson.success;

      this.setListData([...this.data, ...data]);

      this.setState({
        ...this.state,
        totalItemCount: pageState.totalCount,
        currentPage: pageState.pageNo,
        isContinue,
      });
    } catch (e) {
      console.error('포스팅 데이터 불러오기 에러 발생', e);
    }
  };

  handleInfiniteScroll = async () => {
    const isStop =
      this.state.totalItemCount <= this.data.length ||
      this.state.totalItemCount <= this.state.currentPage * 3 ||
      !this.state.isContinue; //얘는 임시방편..

    if (isStop) return;

    const endOfPage =
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 10;

    if (endOfPage) {
      let timer = null;
      if (
        this.state.currentPage * this.state.contentIncrease <=
        this.state.totalItemCount
      ) {
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            this.setState({
              ...this.state,
              currentPage: ++this.state.currentPage,
            });
            this.getPostData();
          }, 400);
        }
      }
    }
  };

  onChangePostType = (value) => {
    const targetURL = `/post?type=${value}`;
    this.setListData([]);
    this.setState({
      ...this.state,
      currentPage: 1,
      contentIncrease: 3,
      totalItemCount: 1,
      sortKey: value,
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
            key === this.state.sortKey ? 'selected' : ''
          } value=${key} data-key=${key}>
            ${name}
          </option>
        `;
      }).join('')}
      </select>
      <ul class="post-list-container">
      ${this.data
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
        .join('')}
      </ul>
  </div>
    `;
  };

  addEventListener = () => {
    //* Todo: need debounce
    window.addEventListener('scroll', this.handleInfiniteScroll);

    this.$wrapper.addEventListener('change', (e) => {
      if (e.target.classList.contains('post-selector')) {
        this.onChangePostType(e.target.value);
      }
    });

    this.$wrapper.addEventListener('click', (e) => {
      addRouteEventListener(e);
    });
  };
}
