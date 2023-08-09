import { ETC } from '../constants/etc.js';

export default class Etc {
  constructor() {}

  render = () => {
    return /* html */ `
    <div class="resume-common-wrapper">
      <h1>ETC</h1>
      ${ETC.map(({ period, title, explanation }) => {
        return `
        <div class="experience-wrapper">
          <span class="experience-period">
            ${period}
          </span> 
          <div>
            <h2>${title}</h2>
            <h4 class="corp-ex">${explanation}</h4>
          </div>
        </div>
        `;
      }).join('')}
    </div>
    `;
  };
}
