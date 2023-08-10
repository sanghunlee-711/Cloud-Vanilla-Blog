import { EXPERIENCE } from '../constants/experience.js';
import ExperienceList from './ExperiencsList.js';

export default class Careers {
  constructor() {}

  render = () => {
    return /* html */ `
    <div class="resume-common-wrapper">
      <h1>Careers</h1>
      ${EXPERIENCE.map(
        (
          { period, corporation, coprEx, list, skill, tenure, explanation },
          index
        ) => {
          return /* html */ `
          <div class="experience-wrapper">
            <div>
              <span class="tenure">${tenure}</span>
              <span class="experience-period">
                ${period}
              </span>
              <span class="experience-explanation">
                ${explanation}
              </span>
              <span class="tenure">Skills</span>
              <ul class="experience-skill">
                ${skill
                  .map((skill) => {
                    return `
                      <li>
                        ${skill}
                      </li>
                    `;
                  })
                  .join('')}
              </ul>
            </div>
            <div>
              <h2>${corporation}</h2>
              <h4 class="corp-ex">${coprEx}</h4>
              ${new ExperienceList(list).render()}
            </div>
          </div>
          ${index !== EXPERIENCE.length - 1 ? `<hr class="divider">` : ''}
        `;
        }
      ).join('')}
    </div>
    `;
  };
}
