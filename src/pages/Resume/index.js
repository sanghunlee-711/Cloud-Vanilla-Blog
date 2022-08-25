import * as RESUME from './constant.js';

const Resume = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('div');
  wrapper.className = '';
  this.$target.appendChild(wrapper);

  this.render = () => {
    wrapper.innerHTML = `
      <div id="resume-container">
        <div class="resume-header">
          <img src="/static/images/profile/selfie_japan.jpeg" alt="profile">
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
        <div class="resume-common-wrapper">
          <h1>INTRODUCTION</h1>
          <p>
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
        <h1>Experience</h1>
        ${RESUME.EXPERIENCE.map(
          ({ period, corporation, coprEx, list, skill, tenure }, index) => {
            return `
            <div class="experience-wrapper">
              <div>
                <h3>${period}</h3>
                <span class="tenure">${tenure}</span>
              </div>
              <div>
                <h2>${corporation}</h2>
                <h4 class="corp-ex">${coprEx}</h4>
                <ul>
                  ${list
                    .map((exp) => {
                      return `
                      <li>
                        ${exp}
                      </li>
                    `;
                    })
                    .join('')}
                    <li class="skill-title">Skill Keywords</li>
                    <ul class="experience-skill">
                      ${skill
                        .map((s) => {
                          return `
                            <li>${s}</li>
                          `;
                        })
                        .join('')}
                    </ul>
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
        ${RESUME.PROJECT.map(({ period, title, company, list }) => {
          return `
          <div class="resume-education-wrapper">
            <div>
              <h3>${period}</h3>
            </div>
            <div>
              <h2>${title}</h2>
              <h4>${company}</h4>
              <ul>
                ${list
                  .map(({ explanation, subList, href }) => {
                    return `
                    <li>
                      ${
                        href.length
                          ? `<a href=${href} target="_blank">${explanation}</a>`
                          : explanation
                      }
                    </li>
                    ${
                      subList.length
                        ? `<ul>
                        ${subList.map(({ subExplanation, href }) => {
                          return `
                          ${
                            href.length
                              ? `<a href=${href} target="_blank">${subExplanation}</a>`
                              : subExplanation
                          }
                          `;
                        })}
                      </ul>`
                        : ''
                    }
                  `;
                  })
                  .join('')}
              </ul>
            </div>
          </div>
          `;
        }).join('')}
      </div>

      <div class="resume-common-wrapper">
        <h1>EDUCATION</h1>
        ${RESUME.EDUCATION.map(({ period, title, explanation }) => {
          return `
          <div class="resume-education-wrapper">
            <div>
              <h3>${period}</h3>
            </div>
            <div>
              <h2>${title}</h2>
              <h4>${explanation}</h4>
            </div>
          </div>
          `;
        }).join('')}
      </div>
      <div class="resume-common-wrapper">
        <h1>ETC</h1>
        ${RESUME.ETC.map(({ period, title, explanation }) => {
          return `
          <div class="resume-education-wrapper">
            <div>
              <h3>${period}</h3>
            </div>
            <div>
              <h2>${title}</h2>
              <h4>${explanation}</h4>
            </div>
          </div>
          `;
        }).join('')}
      </div>
    </div>
    `;
  };

  this.render();
  changeHeader();
};

export default Resume;
