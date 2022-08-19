import { API_ADDRESS } from '../constants/config.js';
const Post = function ({ $target }) {
  this.$target = $target;
  this.data = [];

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'Post-main-container');
  this.$target.appendChild(wrapper);

  this.setListData = (nextData) => {
    this.data = [...nextData];
    this.render();
  };

  const getPostData = async () => {
    const res = await fetch(`${API_ADDRESS}/post-list`);
    const resJson = await res.json();
    const data = await resJson;
    this.setListData(data);
  };

  const setPreview = (html) => {
    const regEx = /(<([^>]+)>)/gi;
    return html.replace(regEx, '').slice(0, 200) + '...';
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
  </main>
    `;
  };

  getPostData();
};

export default Post;
