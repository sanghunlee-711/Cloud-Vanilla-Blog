const Header = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('section');
  wrapper.setAttribute('class', 'header_profile');
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div class="header_profile_wrapper">
        <img src="/static/images/profile/selfie_japan.jpeg" alt="profile_image" />
        <ul>
          <li>
            <a>
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-google"></i>
            </a>
          </li>
        </ul>
      </div>
    `;
  };

  this.render();
};

export default Header;
