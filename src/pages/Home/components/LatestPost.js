import { API_ADDRESS, PAGE_ADDRESS } from '../../../constants/config.js';

const LatestPost = function ({ $target }) {
  this.$target = $target;

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'main-post-container');
  this.$target.appendChild(wrapper);

  this.data = [];

  this.setListData = (nextData) => {
    this.data = [...nextData];
    this.render();
  };

  const getPostData = async () => {
    const res = await fetch(`${API_ADDRESS}/post-list?countPerPage=2&pageNo=1`);
    const resJson = await res.json();

    const data = await resJson.data;
    this.setListData(data);
  };

  const setPreview = (html) => {
    const regEx = /(<([^>]+)>)/gi;
    return html.replace(regEx, '').slice(0, 120) + '...';
  };

  const onSeeMore = () => {
    window.location.assign(`${PAGE_ADDRESS}/#post`);
  };

  this.render = () => {
    wrapper.innerHTML = `
    <main class="post_container">
    <div class="see-more">
      <h1>Latest Post</h1>
      <button class="basic-button" data-id="see-more">See more post</button>
    </div>
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
  </main>
    `;
  };

  getPostData();

  wrapper.addEventListener('click', (e) => {
    if (
      e.target.className !== 'basic-button' ||
      e.target.dataset.id !== 'see-more'
    )
      return;
    onSeeMore(e);
  });
};

export default LatestPost;
