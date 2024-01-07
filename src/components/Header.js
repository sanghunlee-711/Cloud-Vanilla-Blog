const LINK_LIST = [
  {
    class: 'fab fa-instagram',
    href: 'https://www.instagram.com/hun__hoon/',
  },
  {
    class: 'fab fa-github',
    href: 'https://github.com/sanghunlee-711',
  },
  {
    class: 'fab fa-google',
    href: 'mailto:cloudlee711@gmail.com',
  },
];

class Header {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('section');
    this.$wrapper.setAttribute('class', 'header_profile');
    $target.appendChild(this.$wrapper);

    this.render();
  }

  render = () => {
    this.$wrapper.innerHTML = /* html */ `
    <div class="header_profile_wrapper">
      <img src="/static/images/profile/selfie_japan.jpeg" alt="profile_image" />
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
        .join('')}
      </ul>
    </div>
  `;
  };
}

export default Header;
