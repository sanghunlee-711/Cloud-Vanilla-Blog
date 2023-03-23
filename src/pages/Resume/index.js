import { layerPrint } from '../../common/utils/print.js';
import * as RESUME from './constant.js';

class Resume {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('div');
    this.$wrapper.className = '';
    this.$target.appendChild(this.$wrapper);

    this.render();
    this.addEventListeners();
  }

  handlePrint = () => {
    const today = new Date();
    const dateForm = `${today.getFullYear()}.${today.getMonth() + 1}`;
    layerPrint('resume-container', `이상훈-이력서-${dateForm}`);
  };

  render = () => {
    this.$wrapper.innerHTML = `
      <div class="print-resume-wrapper">
        <button class="print-resume">
          <i class="fa fa-print fa-1x"></i>
        </button>
      </div>
      <div id="resume-container">
        <div class="resume-common-wrapper">
          <h1>INTRODUCTION</h1>
          <div class="resume-header">
          <img src="https://avatars.githubusercontent.com/u/57477415?v=4" alt="profile">
          <div>
            <h1>이상훈</h1>
            <ul>
            ${RESUME.LINKS.map(({ icon, href, name }) => {
              return `
                <li>
                  <i class="${icon}"></i>
                  <a href="${href}" target="_blank">${name}</a>                
                </li>
              `;
            }).join('')}
            </ul>
          </div>
        </div>
          <p class="resume-introduction">
          ${RESUME.INTRODUCTION}
          </p>
        </div>
        <div class="resume-common-wrapper">
          <h1>SKILL</h1>
            ${RESUME.SKILL.map(({ title, skill }, idx) => {
              return `
              <div class="skill-wrapper">
                <h2>${title}</h2>
                <ul>
                ${skill
                  .map((name) => {
                    return `
                    <li>
                      ${name}
                    </li>
                  `;
                  })
                  .join('')}
                </ul>
              </div>
              ${idx !== RESUME.SKILL.length - 1 ? '<hr class="divider">' : ''}
              `;
            }).join('')}
        </div>
        <div class="resume-common-wrapper">
        <h1>Careers</h1>
        ${RESUME.EXPERIENCE.map(
          (
            { period, corporation, coprEx, list, skill, tenure, explanation },
            index
          ) => {
            return `
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
                <h2>${corporation}</h2>
                <h4 class="corp-ex">${coprEx}</h4>
                <ul class="experience-list-wrapper">
                  ${list
                    .map(({ title, detailList, link }) => {
                      return `
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
            ${
              index !== RESUME.EXPERIENCE.length - 1
                ? `<hr class="divider">`
                : ''
            }
          `;
          }
        ).join('')}
      </div>
      <div class="resume-common-wrapper">
        <h1>PROJECT</h1>
        ${RESUME.PROJECT.map(
          ({ period, title, company, list, explanation, skill, link }) => {
            return `
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
                    return `
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

      <div class="resume-common-wrapper">
        <h1>EDUCATION</h1>
        ${RESUME.EDUCATION.map(({ period, title, explanation }) => {
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
        }).join('')}
      </div>
      <div class="resume-common-wrapper">
        <h1>ETC</h1>
        ${RESUME.ETC.map(({ period, title, explanation }) => {
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
    </div>
    `;
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      if (e.target.classList.contains('print-resume')) {
        this.handlePrint();
      }
    });
  };
}

export default Resume;
