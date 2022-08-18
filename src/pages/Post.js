const POST_MAP = [
  { id: 1, content: 'Content 1' },
  { id: 2, content: 'Content 2' },
];

const Post = function ({ $target }) {
  this.$target = $target;

  const wrapper = document.createElement('main');
  wrapper.setAttribute('class', 'Post-main-container');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div>
        <ul>
          ${POST_MAP.map((el) => {
            return `
              <li data-id=${el.id}>
                <a href="#contentId=${el.id}">${el.content}</a>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    `;
  };

  this.render();
};

export default Post;
