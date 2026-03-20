class Header {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement("section");
    this.$wrapper.setAttribute("class", "header_profile");
    $target.appendChild(this.$wrapper);

    this.render();
  }

  render = () => {
    this.$wrapper.innerHTML = /* html */ `
    <div class="header_profile_wrapper">
      <img src="/static/images/profile/selfie_japan.jpeg" alt="profile_image" />
      <h2>Sanghun Lee</h2>
      <p>Developer Blog</p>
      <ul>
      ${[]
        .map((el) => {
          return /* html */ `
        <li>
          <a href="${el?.href}" target="_blank" aria-label="See More SNS Contents">
            <i class="${el?.class}"></i>
          </a>
        </li>
        `;
        })
        .join("")}
      </ul>
    </div>
  `;
  };
}

export default Header;
