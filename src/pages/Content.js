const Content = function ({ $target, contentId }) {
  this.$target = $target;
  this.contentId = contentId;
  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'content-main-container');
  this.$target.appendChild(wrapper);

  this.data = {};

  this.setData = (nextData) => {
    this.data = { ...nextData };
    this.render();
  };

  this.getPostData = async (slug) => {
    console.log({ slug });
    const res = await fetch(
      `http://localhost:4000/each-post/${this.contentId}`
    );
    const resJson = await res.json();
    const data = await resJson;
    this.setData(data);
    // return data;
  };

  this.render = () => {
    const data = this.data;
    const { src, width, height } = this.data.frontMatter.image;

    wrapper.innerHTML = `
      <div class="title-container">
      <h1 class="title"> ${data.frontMatter.title}</h1>
      <div class="title-info">
        <div>
          <span>${data.frontMatter.author}</span>
          <span>${data.frontMatter.date.split(' ')[0]}</span>
        </div>
        <div>
          <a href="#post"> 목록 </a>
        </div>
      </div>
      </div>
      <div style="display: flex; justify-content:center; margin-bottom:24px">
        <img src=${src} 
          alt="post-title-image" 
          style="width: ${width}px; height: ${height}px">
      </div>
      <div class="hljs">
        ${JSON.parse(data.content)}
      </div>
    `;
  };
  // this.render();
  this.getPostData();
};

export default Content;
