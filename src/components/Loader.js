class Loader {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.getElementById('global-loader');

    if (!this.$wrapper) {
      this.$wrapper = document.createElement('div');
      this.$wrapper.setAttribute('id', 'global-loader');
      this.$target.appendChild(this.$wrapper);
      this.render();
    }

    if (!this.$wrapper.innerHTML.trim()) {
      this.render();
    }
  }

  handleLoader(isShow) {
    const displayValue = isShow ? 'flex' : 'none';

    if (this.$wrapper.style.display !== displayValue) {
      this.$wrapper.style.display = displayValue;
    }
  }

  render() {
    this.$wrapper.innerHTML = /* html */ `
      <div class='loader'></div>
    `;
  }
}

export default Loader;
