const SKILL_SET_FE = [
  'HTML/CSS',
  'Javascript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Redux',
  'Redux-Toolkit',
  'Redux-saga',
  'Apollo-client',
  'Cypress',
  'Jest',
];

const SKILL_SET_BE = ['Express.js', 'Nest.js'];

const SKILL_SET_DB = ['Postgresql', 'MySQL'];

const SKILL_SET_ETC = [
  'Git',
  'Jira',
  'Agile',
  'VS Code',
  'Bitbucket',
  'GitHub',
  'Figma',
];

const Resume = function ({ $target }) {
  this.$target = $target;

  // const wrapper = document.createElement('div');
  // this.$target.appendChild(wrapper);

  this.render = () => {
    this.$target.innerHTML = `
      <div class="resume-header">
        <img src="/static/images/profile/selfie_japan.jpeg" alt="profile">
        <div>
          <h1>이상훈</h1>
          <ul>
            <li>
              <i class="fab fa-github"></i>
              <a href="https://github.com/sanghunlee-711" target="_blank">https://github.com/sanghunlee-711</a>
            </li>
            <li>
              <i class="fab fa-google"></i>
              <a href="mailto:cloudlee711@gmail.com">
              cloudlee711@gmail.com
              </a>
            </li>
            <li>
              <i class="fas fa-blog"></i>
              <a href="https://blog.cloud-sanghun.com/" target="_blank">https://blog.cloud-sanghun.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="resume-common-wrapper">
        <h1>INTRODUCTION</h1>
        <p>
        반갑습니다! 프론트엔드 개발자 이상훈입니다.\n
        활용을 통해 유용함을 만들어 내는 경험을 추구하다보니 개발자가 되었습니다.\n
        자만심을 가지지 않고 항상 모르는 것들에 대한 경계심을 가지며 학습해 나아가기 위해 노력하고 있습니다.\n
        프론트엔드 개발자는 웹 서비스 전반에 대한 이해와 구현력을 가지며 UI,UX에 조금 더 중점을 두고 개발을 진행하는 포지션이라는 생각을 가지고 있습니다.\n
        근본적인 지식을 중요시 여기며 가치있는 UI 및 의미있는 UX의 구현을 위해, 아직은 맞이하지 못한 기술과 개념을 무던하게 받아들이는 태도를 가진 개발자로 성장하기 위해 노력중입니다.\n
        프레임워크 없는 프론트엔드개발이라는 책을 의미깊게 읽어 Javascript 언어 자체가 할 수 있는 많은 역할들에 대해 관심을 가지고 있으며 이 과정을 통해 다양한 상황에 대처할 수 있게 성장하고 있습니다.
        </p>
      </div>
      <div class="resume-common-wrapper">
        <h1>SKILL</h1>
        <div class="skill-wrapper">
          <h2>Front-end</h2>
          <ul>
          ${SKILL_SET_FE.map((skill) => {
            return `
              <li>
                ${skill}
              </li>
            `;
          }).join('')}
          </ul>
        </div>
        <hr class="divider">
        <div class="skill-wrapper">
          <h2>Back-end</h2>
          <ul>
          ${SKILL_SET_BE.map((skill) => {
            return `
              <li>
                ${skill}
              </li>
            `;
          }).join('')}
          </ul>
        </div>
        <hr class="divider">
        <div class="skill-wrapper">
          <h2>Database</h2>
          <ul>
          ${SKILL_SET_DB.map((skill) => {
            return `
              <li>
                ${skill}
              </li>
            `;
          }).join('')}
          </ul>
        </div>
        <hr class="divider">
        <div class="skill-wrapper">
          <h2>ETC</h2>
          <ul>
          ${SKILL_SET_ETC.map((skill) => {
            return `
              <li>
                ${skill}
              </li>
            `;
          }).join('')}
          </ul>
        </div>

      </div>
      <div class="resume-common-wrapper">
      <h1>Experience</h1>
      <p>
      반갑습니다! 프론트엔드 개발자 이상훈입니다.\n
      활용을 통해 유용함을 만들어 내는 경험을 추구하다보니 개발자가 되었습니다.\n
      자만심을 가지지 않고 항상 모르는 것들에 대한 경계심을 가지며 학습해 나아가기 위해 노력하고 있습니다.\n
      프론트엔드 개발자는 웹 서비스 전반에 대한 이해와 구현력을 가지며 UI,UX에 조금 더 중점을 두고 개발을 진행하는 포지션이라는 생각을 가지고 있습니다.\n
      근본적인 지식을 중요시 여기며 가치있는 UI 및 의미있는 UX의 구현을 위해, 아직은 맞이하지 못한 기술과 개념을 무던하게 받아들이는 태도를 가진 개발자로 성장하기 위해 노력중입니다.\n
      프레임워크 없는 프론트엔드개발이라는 책을 의미깊게 읽어 Javascript 언어 자체가 할 수 있는 많은 역할들에 대해 관심을 가지고 있으며 이 과정을 통해 다양한 상황에 대처할 수 있게 성장하고 있습니다.
      </p>
    </div>
    `;
  };

  this.render();
};

export default Resume;
