const DisqusCommentBox = function ({ $target }) {
  this.$target = $target;

  this.redner = () => {
    wrapper.innerHTML = `
    <div id="disqus_thread"></div>
    `;
  };
};
