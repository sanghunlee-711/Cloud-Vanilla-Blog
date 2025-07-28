import Loader from "../../../../components/Loader.js";
import { addRouteEventListener } from "../../../../common/utils/navigate.js";
import { PostCard } from "../../../../components/PostCard.js";
import { $ELEMENT } from "./constants/element.js";
import { getLatestPostData } from "./utils/api.js";

class LatestPost {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement("main");
    this.$wrapper.setAttribute("class", $ELEMENT.MAIN_POST_CONTAINER);
    $target.appendChild(this.$wrapper);

    this.state = [];

    this.getPostData();
    this.render();
    this.addEventListeners();
  }

  setState = (nextState) => {
    this.state = [...nextState];
    this.render();
  };

  getPostData = async () => {
    const loader = new Loader({ $target: this.$target });

    loader.handleLoader(true);
    await getLatestPostData({
      onSuccess: (data) => {
        this.setState(data);
        loader.handleLoader(false);
      },
      onError: (e) => {
        console.error(e);
        loader.handleLoader(false);
      },
    });
  };

  template = () => {
    return `
    <main class="${$ELEMENT.POST_CONTAINER}">
      <div class="${$ELEMENT.SEE_MORE}">
        <h1>Latest Post</h1>
        <a href="/post" class="basic-button" data-id="route">See more post</a>
      </div>
      <ul class="${$ELEMENT.POST_LIST_CONTAINER}">
      ${this.state
        .map(
          ({
            slug,
            frontMatter: { title, date, image, categories, folder, summary },
            content,
          }) => {
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
        .join("")}
        </ul>
    </main>
    `;
  };

  render = () => {
    this.$wrapper.innerHTML = this.template();
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener("click", (e) => {
      addRouteEventListener(e);
    });
  };
}

export default LatestPost;
