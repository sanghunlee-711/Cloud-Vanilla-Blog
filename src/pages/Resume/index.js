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

  layerPrint = () => {
    const elem = 'resume-container';
    const printWindow = window.open('', 'PRINT', 'height=400,width=600');

    printWindow.document.write(
      '<html><head><title>' + document.title + '</title>'
    );
    printWindow.document.write(`
    <link href="styles/resume.css" rel="stylesheet">
    <link href="styles/style.css" rel="stylesheet">
    <link href="styles/post.css" rel="stylesheet">
    <link href="styles/mdStyle.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/eb264fff85.js" crossorigin="anonymous"></script>
    `);
    printWindow.document.write('</head><body >');
    // printWindow.document.write('<h1>' + document.title + '</h1>');
    printWindow.document.write(document.getElementById(elem).innerHTML);
    printWindow.document.write('</body></html>');

    printWindow.document.close(); // necessary for IE >= 10

    setTimeout(() => {
      printWindow.focus(); // necessary for IE >= 10*/
      printWindow.print();
      printWindow.close();
    }, 1000);

    return true;
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
          <div class="resume-education-wrapper">
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
              <h4>${company}</h4>
              
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

  addEventListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      if (e.target.classList.contains('print-resume')) {
        this.layerPrint();
      }
    });
  };
}

export default Resume;
