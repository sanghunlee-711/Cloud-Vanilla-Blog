class ContentLayout {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement("main");

    this.render();
  }

  render = () => {
    this.$wrapper.setAttribute("class", "layout-container");
    this.$target.appendChild(this.$wrapper);
  };
}

export default ContentLayout;
