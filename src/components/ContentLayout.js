const ContentLayout = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'layout-container');

  if (!document.querySelector('.layout-container'))
    this.$target.appendChild(wrapper);

  this.render = () => {};

  this.render();
};

export default ContentLayout;
