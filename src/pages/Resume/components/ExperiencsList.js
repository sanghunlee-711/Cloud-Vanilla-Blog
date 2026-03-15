import LinkIcons from './LinkIcons.js';

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export default class ExperienceList {
  constructor(experienceList) {
    this.experienceList = experienceList;
  }

  render = () => {
    return /* html */ `
    <ul class="experience-list-wrapper">
      ${this.experienceList
        ?.map(({ title, detailList, deployLink, githubLink }) => {
          return /* html */ `
          <li>
            <span class="experience-list-title">
              ${escapeHtml(title)} 
              ${new LinkIcons({ deployLink, githubLink }).render()}
            </span>
            <ul class="experience-detail-list-wrapper">
            ${detailList
              .map(({ target, actions, deployLink, githubLink }) => {
                return `
                <li class="experience-detail-list-item">
                  <span class="experience-detail-list-target">
                    ${escapeHtml(target)} 
                    ${new LinkIcons({ deployLink, githubLink }).render()}
                  </span>
                  <ul class="experience-detail-action-list">
                    ${actions
                      .map((action) => {
                        const normalizedAction =
                          typeof action === 'string'
                            ? { text: action }
                            : action;
                        const { text, deployLink, githubLink } =
                          normalizedAction || {};
                        return `
                      <li class="experience-detail-list-action">
                        ${escapeHtml(text ?? '')} 
                        ${new LinkIcons({ deployLink, githubLink }).render()}
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
          </li>
        `;
        })
        .join('')}
    </ul>
    `;
  };
}
