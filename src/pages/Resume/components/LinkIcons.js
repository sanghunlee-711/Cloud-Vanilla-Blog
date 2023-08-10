export default class LinkIcons {
  constructor({ deployLink, githubLink }) {
    this.deployLink = deployLink;
    this.githubLink = githubLink;
  }

  render() {
    return /* html */ `
      ${
        this.deployLink
          ? `<a href=${this.deployLink} target="_blank"><i class="fa fa-globe experience-list-link-icon"></i></a>`
          : ''
      }
      ${
        this.githubLink
          ? `<a href=${this.githubLink} target="_blank"><i class="fab fa-github experience-list-link-icon"></i></a>`
          : ''
      }
    `;
  }
}
