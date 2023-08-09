import { PROJECT } from '../constants/projects.js';

export default class Projects {
  constructor() {}

  render = () => {
    return /* html */ `
    <div class="resume-common-wrapper">
      <h1>PROJECT</h1>
      ${PROJECT.map(
        ({ period, title, company, list, explanation, skill, link }) => {
          return /* html */ `
        <div class="experience-wrapper">
          <div>
              <span class="experience-period">
                ${period}
              </span>
              <span class="experience-explanation">
                ${explanation}
              </span>
              <span class="tenure">Skills</span>
              <ul class="experience-skill">
                ${skill
                  .map((s) => {
                    return `
                      <li>
                        ${s}
                      </li>
                    `;
                  })
                  .join('')}
              </ul>
          </div>
          <div>
            <h2>
            ${title}
            ${
              link
                ? `<a href=${link} target="_blank"><i class="fa fa-globe experience-list-link-icon"></i></a>`
                : ''
            }
            </h2>
            <h4 class="corp-ex">${company}</h4>
            <ul class="experience-list-wrapper">
              ${list
                .map(({ title, detailList, link }) => {
                  return /* html */ `
                  <li>
                    ${title} ${
                    link
                      ? `<a href=${link} target="_blank"><i class="fa fa-globe experience-list-link-icon"></i></a>`
                      : ''
                  }
                    <ul class="experience-detail-list-wrapper">
                    ${detailList
                      .map((detail) => {
                        return `
                        <li>
                          ${detail}
                        </li>
                      `;
                      })
                      .join('')}
                    </ul>
                  </li>
                `;
                })
                .join('')}
            </ul>
          </div>
        </div>
        `;
        }
      ).join('')}
    </div>
    `;
  };
}
