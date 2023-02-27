class Header {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('section');
    this.$wrapper.setAttribute('class', 'header_profile');
    $target.appendChild(this.$wrapper);

    this.render();
  }

  render = () => {
    this.$wrapper.innerHTML = `
    <div class="header_profile_wrapper">
      <img src="/static/images/profile/selfie_japan.jpeg" alt="profile_image" />
      <ul>
        <li>
          <a href="https://www.instagram.com/hun__hoon/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/sanghunlee-711" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="mailto:cloudlee711@gmail.com">
            <i class="fab fa-google"></i>
          </a>
        </li>
      </ul>
    </div>
  `;
  };
}

export default Header;
