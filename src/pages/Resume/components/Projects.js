import { PROJECT } from '../constants/projects.js';
import ExperienceList from './ExperiencsList.js';

export default class Projects {
  constructor() {}

  render = () => {
    return /* html */ `
    <div class="resume-common-wrapper">
      <h1>PROJECT</h1>
      ${PROJECT.map(
        ({
          period,
          title,
          company,
          list,
          explanation,
          skill,
          deployLink,
          githubLink,
        }) => {
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
              deployLink
                ? `<a href=${deployLink} target="_blank"><i class="fa fa-globe experience-list-link-icon"></i></a>`
                : ''
            }
            ${
              githubLink
                ? `<a href=${githubLink} target="_blank"><i class="fab fa-github experience-list-link-icon"></i></a>`
                : ''
            }
            </h2>
            <h4 class="corp-ex">${company}</h4>
            ${new ExperienceList(list).render()}
          </div>
        </div>
        `;
        }
      ).join('')}
    </div>
    `;
  };
}
