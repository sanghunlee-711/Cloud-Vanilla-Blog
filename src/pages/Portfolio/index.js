import { layerPrint } from '../../common/utils/print.js';
import { PORTFOLIO_LIST } from './constants/portfolio.js';

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
          techEnvironment,
          libs,
          exploreComment,
          devExplains,
          type,
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
                      <p>${period} [${type}]</p>
                    </div>
                  </div>
                  <div class="portfolio-dev-highlights">
                    <h2>개발 주요사항</h2>
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
                  <div class="portfolio-dev-techstack">
                    <h2>기술 스택</h2>
                    <div class="portfolio-dev-techstack-list-container"> 
                      <div>
                        <p>
                          <i class="fab fa-dribbble"></i>
                          <span>개발 환경</span>
                        </p>
                        <ul>
                          ${techEnvironment
                            .map((tech) => {
                              return `
                              <li>${tech}</li>
                            `;
                            })
                            .join('')}
                        </ul>
                      </div>
                      <div>
                        <p>
                          <i class="fab fa-grav"></i>
                          <span>오픈소스 & 라이브러리</span>
                        </p>
                        <ul>
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
                  <div class="portfolio-link">
                    <h2>관련 링크</h2>
                    <ul>
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
                </div>
              </div>
              
              <div class="portfolio-explore">
                <h3>살펴보기</h3>
                <p>${exploreComment}</p>
              </div>
              <div class="portfolio-dev-explanation">
                <h3>개발 관련 설명</h3>
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
