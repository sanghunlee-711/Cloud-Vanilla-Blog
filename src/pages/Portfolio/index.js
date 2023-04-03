import { layerPrint } from '../../common/utils/print.js';
import { PORTFOLIO_LIST } from './constants/portfolio/index.js';

class PortFolio {
  constructor({ $target }) {
    this.$target = $target;
    this.$wrapper = document.createElement('div');
    $target.appendChild(this.$wrapper);

    this.render();
    this.addEventListeners();
  }

  handlePrint = () => {
    const today = new Date();
    const dateForm = `${today.getFullYear()}.${today.getMonth() + 1}`;
    layerPrint('portfolio-container', `이상훈-포트폴리오-${dateForm}`);
  };

  template = () => {
    return `
      ${PORTFOLIO_LIST.map(
        ({
          title,
          job,
          period,
          links,
          titleImages,
          devHighlights,
          devAchivement,
          techEnvironment,
          libs,
          exploreComment,
          devExplains,
          type,
          contribution,
        }) => {
          return /*html*/ `
            <section class="portfolio-container">
              <div class="portfolio-top">
                <div class="portfolio-title-image">
                  ${titleImages
                    .map((image, index) => {
                      return `
                      <img src="${image}" alt="${image}-${index}"/>
                    `;
                    })
                    .join('')}
                </div>
                
                <div class="portfolio-explanation-container">
                  <div class="portfolio-explanation-wrapper">
                    <div class="portfolio-title-job">
                      <h1>${title}</h1>                    
                      <h2>(${job})</h2>
                      <p>${period} [${type}] [기여도: ${
            contribution || 100
          }%]</p>
                      <ul class="portfolio-link">
                      ${links
                        .map(({ link, icon }) => {
                          return `
                          <li>
                            <a href="${link}" target="_blank">
                              <i class="${icon}"></i>
                            </a>
                          </li>
                        `;
                        })
                        .join('')}
                      </ul>
                    </div>
                  </div>
                  <div class="portfolio-dev-highlights">
                    <h2>개발 사항</h2>
                    <ul>
                      ${devHighlights
                        .map((highlight) => {
                          return `
                          <li>${highlight}</li>
                        `;
                        })
                        .join('')}
                    </ul>
                  </div>
                  <div class="portfolio-dev-highlights">
                    <h2>성과</h2>
                    <ul>
                      ${devAchivement
                        ?.map((achivement) => {
                          return `
                          <li>${achivement}</li>
                        `;
                        })
                        .join('')}
                    </ul>
                  </div>
                  <div class="portfolio-dev-techstack">
                    <h2>기술 스택</h2>
                    <div class="portfolio-dev-techstack-list-container"> 
                      <div>
                        <ul>
                          ${techEnvironment
                            .map((tech) => {
                              return `
                              <li>${tech}</li>
                            `;
                            })
                            .join('')}
                          ${libs
                            .map((lib) => {
                              return `
                              <li>${lib}</li>
                            `;
                            })
                            .join('')}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="portfolio-explore">
                <h3>살펴보기</h3>
                <p>${exploreComment}</p>
              </div>
              <div class="portfolio-dev-explanation">
                <h3>주요 성과(설명 된 성과 중 질문유도용으로 하나 픽해서 쓰기)</h3>
                <div class="dev-explanation-container">
                  ${devExplains
                    .map(({ image, explanation }, index) => {
                      return `
                      <div class="dev-explanation-wrapper">
                        <div class="dev-explanation-image-wrapper">
                          <img src="${image}" alt="${image}-${index}" />
                        </div>
                        <p>
                          ${explanation}
                        </p>
                      </div>
                    `;
                    })
                    .join('')}
                </div>
              </div>
            </section>
          `;
        }
      ).join('')}

    `;
  };

  render = () => {
    this.$wrapper.innerHTML = `
    <div>
      <div class="print-resume-wrapper">
        <button class="print-resume print">
          <i class="fa fa-print fa-1x print"></i>
        </button>
      </div>
      <div id="portfolio-container">
        ${this.template()}
      </div>
    </div>
    `;
  };

  addEventListeners = () => {
    this.$wrapper.addEventListener('click', (e) => {
      if (e.target.classList.contains('print')) {
        this.handlePrint();
      }
    });
  };
}

export default PortFolio;
