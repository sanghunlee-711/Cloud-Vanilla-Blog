import { PROFILE_LINK } from '../constants/links.js';
import { INTRODUCTION } from '../constants/introductions.js';

export default class Profile {
  constructor() {}

  render = () => {
    return /* html */ `
      <div class="resume-common-wrapper">
        <h1>INTRODUCTION</h1>
        <div class="resume-header">
          <img src="https://avatars.githubusercontent.com/u/57477415?v=4" alt="profile">
        <div>
          <h1>이상훈</h1>
          <ul>
          ${PROFILE_LINK.map(({ icon, href, name }) => {
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
        ${INTRODUCTION}
        </p>
      </div>
    `;
  };
}
