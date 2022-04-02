// import * as marked from 'marked';
import AbstractView from '../../components/AbstractView.js';
class Posts extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts!');
    this.data = [];
  }

  async getPostData() {
    // const res = await fetch(`${process.env.SERVER_ADDRESS}/post-list`);
    const res = await fetch(`http://localhost:3000/post-list`);
    const resJson = await res.json();
    const data = await resJson;
    return data;
  }

  setPreview(html) {
    const regEx = /(<([^>]+)>)/gi;
    return html.replace(regEx, '').slice(0, 500) + '...';
  }

  async getHtml() {
    const data = await this.getPostData();
    console.log('undefined??', data);
    return `  
    <main class="post_container">
      ${data
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
              <a href="/posts/${slug}"  data-link>
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
        .join(' ')};
    </main>
    `;
  }
}

export default Posts;
