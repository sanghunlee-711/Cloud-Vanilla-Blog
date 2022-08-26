import { API_ADDRESS } from '../constants/config.js';

const Post = function ({ $target }) {
  this.$target = $target;
  this.data = [];
  this.pageState = {
    currentPage: 1,
    totalItemCount: 2,
    pagePerItemCount: 3,
  };
  this.state = {
    currentPage: 1,
    contentIncrease: 3,
    totalItemCount: 1,
  };

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'Post-main-container');
  this.$target.appendChild(wrapper);

  this.setListData = (nextData) => {
    this.data = [...nextData];
    this.render();
  };

  this.setPageState = (nextState) => {
    this.state = nextState;
  };

  const getPostData = async () => {
    const res = await fetch(
      `${API_ADDRESS}/post-list?countPerPage=${this.state.contentIncrease}&pageNo=${this.state.currentPage}`
    );
    const resJson = await res.json();

    const data = await resJson.data;
    const pageState = await resJson.pagination;
    this.setListData([...this.data, ...data]);

    this.setPageState({
      ...this.state,
      totalItemCount: pageState.totalCount,
      currentPage: pageState.pageNo,
    });
  };

  const handleInfiniteScroll = async () => {
    const endOfPage =
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 10;

    if (endOfPage) {
      //페이지가 끝이면 끝내면 되긴 함.

      if (
        this.state.currentPage * this.state.contentIncrease <=
        this.state.totalItemCount
      ) {
        this.setPageState({
          ...this.state,
          currentPage: ++this.state.currentPage,
        });
        await getPostData();
      }
    }
  };

  const setPreview = (html) => {
    const regEx = /(<([^>]+)>)/gi;
    return html.replace(regEx, '').slice(0, 200) + '...';
  };

  this.setPageState = function (nextState) {
    this.state = nextState;
  };

  this.render = () => {
    wrapper.innerHTML = `
    <main class="post_container">
    ${this.data
      .map(
        (
          {
            slug,
            frontMatter: { title, date, image, categories, tags },
            content,
          },
          index
        ) => {
          return `
          <article class="each_post_container">
            <a href="#contentId=${slug}"  data-link class="nav_link">
              <div class="title_image" style="background-image:url(${
                image.src
              })"></div>
              <div class="each_post_contents">
                <h1 class="post_title">${title}</h1>
                <div class="each_post_profile">
                  <img src="../../static/images/profile/selfie_japan.jpeg" alt="profile_image">
                <div class ="each_post_profile_detail">
                  <span>Cloud Lee</span>
                  <div>
                    <div class="post_category_wrapper">
                      ${categories.map(
                        (category) => `<span>${category}</span>`
                      )}
                    </div>
                    <span class="each_post_profile_detail_date">${
                      date.split(' ')[0]
                    }</span>
                  </div>
                </div>
                </div>
                <div class="preview_content">
                    ${setPreview(JSON.parse(content))}
                </div>
              </div>
            </a>
        </article>
      `;
        }
      )
      .join('')}
      <section class="pagination"></section>
  </main>
    `;
  };

  getPostData();

  window.addEventListener('scroll', handleInfiniteScroll);
  //when unmount remove event listener;
  window.addEventListener('hashchange', () => {
    window.removeEventListener('scroll', handleInfiniteScroll);
  });
};

export default Post;
