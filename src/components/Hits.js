class Hits {
  constructor({ $target }) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.$target.innerHTML = /* html */ `
      <div class="hits-wrapper">
        <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.cloud-sanghun.com&count_bg=%23C9C9C9&title_bg=%23555555&icon=googlecloud.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
      <div>
  `;
  }
}

export default Hits;
