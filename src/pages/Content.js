const Content = function ({ $target, contentId }) {
  this.$target = $target;
  this.contentId = contentId;
  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'content-main-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    console.log('is render?');
    wrapper.innerHTML = `
      <div>
        This is Page for Post number : ${this.contentId}
      </div>
    `;
  };
  this.render();
};

export default Content;
