import { WELL_KNOWN_LIST, SKILL } from '../constants/skills.js';

export default class Skills {
  constructor() {}

  render() {
    return /* html */ `
    <div class="resume-common-wrapper">
      <div class="resume-common-title-wrapper">
        <h1>SKILL</h1>
        <ul class="resume-skill-introduce">
          <li class="resume-wellknown">Well Known</li>
          <li class="resume-knowledgeable">Knowledgeable</li>
        </ul>
      </div>
        ${SKILL.map(({ title, skill }, idx) => {
          return `
          <div class="skill-wrapper">
            <h2>${title}</h2>
            <ul>
            ${skill
              .map((name) => {
                return `
                <li class="${
                  WELL_KNOWN_LIST.includes(name)
                    ? 'resume-wellknown'
                    : 'resume-knowledgeable'
                }">
                  ${name}
                </li>
              `;
              })
              .join('')}
            </ul>
          </div>
          ${idx !== SKILL.length - 1 ? '<hr class="divider">' : ''}
          `;
        }).join('')}
    </div>
    `;
  }
}
