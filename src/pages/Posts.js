import { PostCard } from '../components/PostCard.js';
import { POST_SELECT_MAP } from '../constants/common.js';
import { API_ADDRESS } from '../constants/config.js';

export class Posts {
  constructor({ $target }) {
    this.$target = $target;
    this.data = [];
    this.$wrapper = document.createElement('main');
    this.$wrapper.setAttribute('class', 'post-main-container');
    $target.appendChild(this.$wrapper);

    this.state = {
      currentPage: 1,
      contentIncrease: 3,
      totalItemCount: 1,
      sortKey: POST_SELECT_MAP[0].key,
    };

    this.getPostData();
    this.render();
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

      const data = await resJson.data;
      const pageState = await resJson.pagination;
      this.setListData([...this.data, ...data]);

      this.setState({
        ...this.state,
        totalItemCount: pageState.totalCount,
        currentPage: pageState.pageNo,
      });
    } catch (e) {
      console.error('포스팅 데이터 불러오기 에러 발생');
      window.location.href = '/';
    }
  };

  handleInfiniteScroll = async () => {
    const endOfPage =
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 10;

    if (endOfPage) {
      //페이지가 끝이면 끝내면 되긴 함.

      if (
        this.state.currentPage * this.state.contentIncrease <=
        this.state.totalItemCount
      ) {
        this.setState({
          ...this.state,
          currentPage: ++this.state.currentPage,
        });
        await this.getPostData();
      }
    }
  };

  onSelectPostMenu = async (value) => {
    this.setListData([]);
    this.setState({
      ...this.state,
      currentPage: 1,
      contentIncrease: 3,
      totalItemCount: 1,
      sortKey: value,
    });
    await this.getPostData();
  };

  render = () => {
    this.$wrapper.innerHTML = `
    <main class="post_container">
    <ul class="post-selector-container">
      ${POST_SELECT_MAP.map(({ name, key }) => {
        return `
          <li class="post-selector ${
            key === this.state.sortKey ? 'active' : ''
          }" data-key=${key}>
            ${name}
          </li>
        `;
      }).join('')}
    </ul>
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
      <section class="pagination"></section>
  </main>
    `;
  };

  addEventListener = () => {
    window.addEventListener('scroll', this.handleInfiniteScroll);

    this.$target.addEventListener('click', (e) => {
      if (e.target.classList.contains('post-selector')) {
        this.onSelectPostMenu(e.target.dataset.key);
      }

      addRouteEventListener(e);
    });
  };
}
