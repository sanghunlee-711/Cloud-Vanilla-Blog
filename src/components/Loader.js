class Loader {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('div');
    this.$wrapper.setAttribute('id', 'global-loader');
    $target.appendChild(this.$wrapper);

    this.render();
  }

  handleLoader(isShow) {
    if (isShow) {
      document.getElementById('global-loader').style.display = 'flex';
    } else {
      document.getElementById('global-loader').style.display = 'none';
    }
  }

  render() {
    this.$wrapper.innerHTML = /* html */ `
      <div class='loader'></div>
    `;
  }
}

export default Loader;
