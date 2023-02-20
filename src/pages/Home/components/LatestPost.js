import { POST_SELECT_MAP } from '../../../constants/common.js';
import { API_ADDRESS } from '../../../constants/config.js';
import { addRouteEventListener } from '../../../utils/navigate.js';
const LatestPost = function ({ $target }) {
  this.$target = $target;

  this.state = {
    sortKey: POST_SELECT_MAP[0].key,
  };

  const $wrapper = document.createElement('main');
  $wrapper.setAttribute('class', 'main-post-container');
  this.$target.appendChild($wrapper);

  this.data = [];

  this.setListData = (nextData) => {
    this.data = [...nextData];
    this.render();
  };

  const getPostData = async () => {
    const res = await fetch(`${API_ADDRESS}/post-latest`);
    const resJson = await res.json();

    const data = await resJson.data;
    this.setListData(data);
  };

  const setPreview = (html) => {
    const regEx = /(<([^>]+)>)/gi;
    return html.replace(regEx, '').slice(0, 120) + '...';
  };

  this.render = () => {
    $wrapper.innerHTML = `
    <main class="post_container">
    <div class="see-more">
      <h1>Latest Post</h1>
      <a href="/post" class="basic-button" data-id="see-more">See more post</a>
    </div>
    ${this.data
      .map(
        (
          {
            slug,
            frontMatter: {
              title,
              date,
              image,
              categories,
              tags,
              folder,
              summary,
            },
            content,
          },
          index
        ) => {
          return `
          <article class="each_post_container">
            <a href="/content" class="nav_link">
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
                    ${summary || setPreview(JSON.parse(content))}
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

  this.$target.addEventListener('click', (e) => {
    addRouteEventListener(e);
  });
};

export default LatestPost;
