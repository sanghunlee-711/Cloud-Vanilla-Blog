export const LINKS = [
  {
    icon: 'fab fa-github',
    href: 'https://github.com/sanghunlee-711',
    name: 'https://github.com/sanghunlee-711',
  },
  {
    icon: 'fab fa-google',
    href: 'mailto:cloudlee711@gmail.com',
    name: 'cloudlee711@gmail.com',
  },
  {
    icon: 'fas fa-blog',
    href: 'https://blog.cloud-sanghun.com',
    name: 'https://blog.cloud-sanghun.com',
  },
];
export const INTRODUCTION = `
반갑습니다! 프론트엔드 개발자 이상훈입니다.\n
활용을 통해 유용함을 만들어 내는 경험을 추구하다보니 개발자가 되었습니다.\n
자만심을 가지지 않고 항상 모르는 것들에 대한 경계심을 가지며 학습해 나아가기 위해 노력하고 있습니다.\n
프론트엔드 개발자는 웹 서비스 전반에 대한 이해와 구현력을 가지며 UI,UX에 조금 더 중점을 두고 개발을 진행하는 포지션이라는 생각을 가지고 있습니다.\n
근본적인 지식을 중요시 여기며 가치있는 UI 및 의미있는 UX의 구현을 위해, 아직은 맞이하지 못한 기술과 개념을 무던하게 받아들이는 태도를 가진 개발자로 성장하기 위해 노력중입니다.\n
<strong>프레임워크 없는 프론트엔드개발</strong>이라는 책을 의미깊게 읽어 Javascript 언어 자체가 할 수 있는 많은 역할들에 대해 관심을 가지고 있으며 \n
이 과정을 통해 다양한 상황에 대처할 수 있는 기반지식을 가지며 성장 하기 위해 노력하고 있습니다.
`;

export const SKILL = [
  {
    title: 'Front-end',
    skill: [
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
    ],
  },
  { title: 'Back-end', skill: ['Express.js', 'Nest.js'] },
  { title: 'Database', skill: ['Postgresql', 'MySQL'] },
  {
    title: 'ETC',
    skill: ['Git', 'Jira', 'Agile', 'VS Code', 'Bitbucket', 'GitHub', 'Figma'],
  },
];

export const EXPERIENCE = [
  {
    period: '2022.02 ~ ',
    tenure: '재직 중',
    corporation: '오이스터에이블(Oysterable)',
    coprEx: '개발팀 프론트엔드 개발자',
    list: [
      '배달음식 일회용기 반납 후 보증금 반환을 위한 페이지 개발',
      'IoT 기반 데이터 관리를 위한 백오피스 개발',
      '오늘의 분리수거 앱 관리를 위한 백오피스 개발',
      '반납기기를 통해 전송되는 데이터 관제 및 관리를 위한 백오피스 개발',
      '백오피스 공통으로 사용이 될 UI라이브러리 개발',
      '프론트엔드 팀 코드리뷰 문화 도입',
    ],
    skill: [
      'React.js',
      'Next.js',
      'PWA',
      'Cypress',
      'Jest',
      'React-Query',
      'Redux-toolkit',
      'Typescript',
    ],
  },
  {
    period: '2021.04 ~ 2022.01 (폐업)',
    tenure: '10개월',
    corporation: '디타임(Dtime)',
    coprEx: '개발팀 프론트엔드 개발자',
    list: [
      '뷰 ,로직 분리 위한 비동기 전역 상태관리 도입(Redux-Saga) 및 hooks 적극 활용',
      'Props drilling 개선 위한 패턴 변경 참여',
      'Unit Test 위한 jest 도입',
      'E2E 테스트를 위한 Cypress 도입',
      '협력업체 서비스 제공을 위해 커스텀엘리먼츠 및 웹팩 활용',
    ],
    skill: [
      'React.js',
      'Redux-toolkit',
      'Redux-Saga',
      'Cypress',
      'Jest',
      'msw',
      'Typescript',
    ],
  },
  {
    period: '2020.09 ~ 2020.10',
    tenure: '2개월',
    corporation: '브랜디(BRANDI)',
    coprEx: '프론트엔드 개발 인턴',
    list: [
      'Vue.js 기반으로 기존 쇼핑몰 사이트 클론 프로젝트 진행',
      '캐러셀, GNB등 다양한 UI/UX를 진행',
    ],
    skill: [
      'React.js',
      'Redux-toolkit',
      'Redux-Saga',
      'Cypress',
      'Jest',
      'msw',
      'Typescript',
    ],
  },
];

export default { LINKS, INTRODUCTION, SKILL, EXPERIENCE };
