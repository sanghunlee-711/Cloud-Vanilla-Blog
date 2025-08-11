import { PROFILE_LINK } from "../constants/links.js";
import { INTRODUCTION } from "../constants/introductions.js";

export default class Profile {
  constructor() {}

  render = () => {
    return /* html */ `
      <div class="resume-common-wrapper">
        <h1>INTRODUCTION</h1>
        <div class="resume-links-wrapper">
          <h1>이상훈</h1>
          <ul class="resume-links">
          ${PROFILE_LINK.map(({ icon, href, name }) => {
            return `
              <li>
                <a href="${href}" target="_blank">
                  <i class="${icon}"></i>
                </a>
              </li>
            `;
          }).join("")}
          </ul>
        </div>
      </div>
        <p class="resume-introduction">
        ${INTRODUCTION}
        </p>
      </div>
    `;
  };
}
