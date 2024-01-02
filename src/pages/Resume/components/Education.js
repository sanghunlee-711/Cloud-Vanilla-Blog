import { EDUCATION } from "../constants/etc.js";

export default class Education {
  render = () => {
    return /* html */ `
    <div class="resume-common-wrapper">
      <h1>EDUCATION</h1>
      ${EDUCATION.map(({ period, title, explanation }) => {
        return `
        <div class="experience-wrapper">
          <div>
            <span class="experience-period">
              ${period}
            </span> 
          </div>
          <div>
            <h2>${title}</h2>
            <h4 class="corp-ex">${explanation}</h4>
          </div>
        </div>
        `;
      }).join("")}
    </div>
    `;
  };
}
