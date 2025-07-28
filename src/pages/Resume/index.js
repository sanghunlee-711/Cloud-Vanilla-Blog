import { layerPrint } from "../../common/utils/print.js";
import Profile from "./components/Profile.js";
import Skills from "./components/Skills.js";
import Careers from "./components/Careers.js";
import Projects from "./components/Projects.js";
import Education from "./components/Education.js";
import Etc from "./components/Etc.js";

class Resume {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement("div");
    this.$wrapper.className = "";
    this.$target.appendChild(this.$wrapper);

    this.render();
    this.addEventListeners();
  }

  handlePrint = () => {
    const today = new Date();
    const dateForm = `${today.getFullYear()}.${today.getMonth() + 1}`;
    layerPrint("resume-container", `이상훈-이력서-${dateForm}`);
  };

  render = () => {
    this.$wrapper.innerHTML = /* html */ `
      <div class="print-resume-wrapper">
        <button class="print-button">
          <i class="fa fa-print fa-1x"></i>
        </button>
      </div>
      <div id="resume-container">
        ${new Profile().render()}
        ${new Skills().render()}
        ${new Careers().render()}
        ${new Projects().render()}
        ${new Education().render()}
        ${new Etc().render()}
      </div>
    `;
  };

  addEventListeners = () => {
    const $printButton = this.$wrapper.querySelector(".print-button");

    $printButton.addEventListener("click", () => {
      this.handlePrint();
    });
  };
}

export default Resume;
