const Header = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('section');
  wrapper.setAttribute('class', 'header_profile');
  if (!document.querySelector('.header_profile')) {
    this.$target.appendChild(wrapper);
  }

  this.render = () => {
    wrapper.innerHTML = `
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

  this.render();
};

export default Header;
