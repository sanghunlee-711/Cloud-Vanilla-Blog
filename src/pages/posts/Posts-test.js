// import * as marked from 'marked';
const PostsTest = function ({ $target }) {
  this.$target = $target;
  this.dataState = [];
  const postContainer = document.createElement('main');
  postContainer.setAttribute('class', 'post_container');
  this.$target.appendChild(postContainer);

  this.setDataState = function (nextState) {
    this.dataState = [...nextState];
    this.render();
  };

  this.getPostData = async function () {
    // const res = await fetch(`${process.env.SERVER_ADDRESS}/post-list`);
    const res = await fetch(`http://localhost:4000/post-list`);
    const resJson = await res.json();
    const data = await resJson;
    return data;
  };

  this.setPreview = function (html) {
    const regEx = /(<([^>]+)>)/gi;
    return html.replace(regEx, '').slice(0, 500) + '...';
  };

  this.render = async function () {
    const list = `  
    
      ${this.dataState
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
              <a href="/posts/${slug}"  data-link class="nav_link">
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
                      ${this.setPreview(JSON.parse(content))}
                  </div>
                </div>
              </a>
          </article>
        `;
          }
        )
        .reverse()
        .join(' ')}
    
    `;
    postContainer.innerHTML = list;
  };

  const data = this.getPostData();
  this.setDataState(data);
  this.render();
};

export default PostsTest;
