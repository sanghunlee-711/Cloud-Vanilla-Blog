class TranslationButton {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement("button");
    this.$wrapper.setAttribute("class", "translation-button");
    $target.appendChild(this.$wrapper);

    this.render();
    this.addEventListeners();
  }

  render = () => {
    this.$wrapper.innerHTML = `
    <i class="fas fa-language"></i>
    <ul class="language-list hidden">
        <li>Ko</li>
        <li>Eng</li>
    </ul>
    `;
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener("click", (e) => {
      const value = e.target.textContent;
      console.log(e.target.tagName);
      if (e.target.tagName === "BUTTON" || e.target.tagName === "I") {
        const ulWrapper = this.$wrapper.querySelector(".language-list");
        if (ulWrapper.classList.contains("hidden")) {
          ulWrapper.className = "language-list";
        } else {
          ulWrapper.className = "language-list hidden";
        }
      }

      if (e.target.tagName === "LI") {
        window.localStorage.setItem("cloud-blog-language", value);
        window.location.reload();
      }
    });
  };
}

export default TranslationButton;
