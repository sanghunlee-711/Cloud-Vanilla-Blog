import { PostCard } from '../../../components/PostCard.js';
import { POST_SELECT_MAP } from '../../../constants/common.js';
import { API_ADDRESS } from '../../../constants/config.js';
import { addRouteEventListener } from '../../../utils/navigate.js';

class LatestPost {
  constructor({ $target }) {
    this.$target = $target;
    this.state = {
      sortKey: POST_SELECT_MAP[0].key,
    };
    this.$wrapper = document.createElement('main');
    this.$wrapper.setAttribute('class', 'main-post-container');
    $target.appendChild(this.$wrapper);

    this.data = [];

    this.getPostData();
    this.render();
    this.addEventListeners();
  }

  setListData = (nextData) => {
    this.data = [...nextData];
    this.render();
  };

  getPostData = async () => {
    const res = await fetch(`/api/post-latest`);
    const resJson = await res.json();

    const data = await resJson.data;
    this.setListData(data);
  };

  render = () => {
    this.$wrapper.innerHTML = `
    <main class="post_container">
    <div class="see-more">
      <h1>Latest Post</h1>
      <a href="/post" class="basic-button" data-id="see-more">See more post</a>
    </div>
    <ul class="post-list-container">
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
            <li>
              ${PostCard({
                imgUrl: image?.src,
                slug,
                sortKey: folder[0],
                title,
                categories,
                date,
                summary,
                content,
              })}
            </li>
          `;
        }
      )
      .join('')}
      </ul>
  </main>
    `;
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      addRouteEventListener(e);
    });
  };
}

export default LatestPost;
