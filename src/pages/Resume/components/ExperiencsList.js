import LinkIcons from './LinkIcons.js';

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
            ${title} 
            ${new LinkIcons({ deployLink, githubLink }).render()}
            <ul class="experience-detail-list-wrapper">
            ${detailList
              .map(({ target, actions, deployLink, githubLink }) => {
                return `
                <li class="experience-detail-list-target">
                  ${target} 
                  ${new LinkIcons({ deployLink, githubLink }).render()}
                </li>
                  <ul>
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
                        ${text ?? ''} 
                        ${new LinkIcons({ deployLink, githubLink }).render()}
                      </li>
                    `;
                      })
                      .join('')}
                  </ul>
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
