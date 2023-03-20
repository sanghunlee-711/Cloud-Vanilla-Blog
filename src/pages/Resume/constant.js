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

// 우대사항
// State 관리 라이브러리를 이용한 개발 및 운영 경험이 있으신 분

// Node.js 개발 및 운영 경험이 있으신 분

// 프론트엔드 성능 최적화 경험 및 모바일/PC 환경의 크로스브라우징 경험이 있으신 분

// TypeScript 를 이용한 개발 및 운영 경험이 있으신 분

// SSR 서비스를 만들고 운영한 경험이 있으신 분

// 우대사항
// • Full JavaScript Web Application을 설계하고 개발해보신 분
// • JavaScript Framework를 활용해 개발업무를 경험해보신 분
// • 고난도 성능 문제를 진단하고 해결해본 경험을 가지신 분
// • 오픈소스 공헌 혹은 관련 활동을 경험해보신 분
// • JavaScript 교육 및 기술 아티클 작성 관련 활동을 경험해보신 분

// 우대사항
// Webpack, Rollup 등의 도구 경험이 있으신 분

// 배포 경험이 있으신 분

// Storybook, 오픈 소스 적용 및 사용 경험이 있으신 분

// Agile, 코드리뷰 경험이 있으신 분

// GitHub, Jira, Confluence, Zeplin, Google Drive 등 업무 협업 툴 사용 경험이 있으신 분

// 백엔드 개발 경험이 있으신 분

export const INTRODUCTION = `
<strong>3년차</strong> 프론트엔드 개발자 이상훈입니다.\n
프론트엔드개발은 웹개발의 일부라는 생각으로 웹 개발 전반에 대한 기본지식을 놓치지 않기 위해 노력합니다.
JavaScript 프레임워크 및 라이브러리의 구현원리와 함께 웹 표준에 알맞는 개발에 관심이 많습니다.
모든 최적화를 위한 첫 걸음은 R&R의 분리라는 생각을 가지며 설계하고 리팩토링합니다.
비즈니스 요구사항 만족과 동시에 사람이 읽을 수 있는 코드의 최대 퍼포먼스를 내는 개발자가 되기 위해 고민하고 노력하고 있습니다.
`;

export const SKILL = [
  {
    title: 'CORE',
    skill: ['ES5/ES6', 'TypeScript', 'React.js', 'Next.js'],
  },
  {
    title: 'STATE MANAGEMENT',
    skill: [
      'Redux',
      'Redux-Toolkit',
      'Redux-saga',
      'Apollo-client',
      'GraphQL',
      'React-Query',
    ],
  },
  {
    title: 'BUILD SYSTEM',
    skill: ['Webpack', 'Rollup.js'],
  },
  {
    title: 'STYLE',
    skill: ['Styled-components', 'SCSS'],
  },
  {
    title: 'TEST',
    skill: ['Cypress', 'Jest', 'testing-library'],
  },
  { title: 'SERVER', skill: ['Express.js', 'Nest.js', 'Nginx'] },
  { title: 'DATABASE', skill: ['Postgresql', 'MySQL'] },
  {
    title: 'CI/CD',
    skill: ['Jenkins', 'Github Action'],
  },
  {
    title: 'ETC',
    skill: ['Git', 'Jira'],
  },
];

export const EXPERIENCE = [
  {
    period: '2022.02 ~ ',
    tenure: '재직 중',
    corporation: '오이스터에이블(Oysterable)',
    explanation:
      '지구를 지키는 히어로들의 플랫폼이라는 명목으로 일회용컵, 도시락 반납기 등을 Iot, Sass기술 개념 기반으로 개발하며 환경보호 플랫폼으로 거듭나고 있는 회사입니다.',
    coprEx: '개발팀 프론트엔드 개발자, <strong>프론트엔드 팀 리더</strong>',
    list: [
      {
        title: '배달음식 일회용기 반납 후 보증금 반환을 위한 서비스',
        link: 'https://dish.lalaloop.app/',
        detailList: [
          '은행선택을 위한 Bottom Sheet',
          '기기 위치를 제공해주는 지도페이지',
          '웹, 모바일 대응을 위한 반응형 적용',
        ],
      },
      {
        title: '사내 관리 시스템 공통으로 사용이 될 사내 UI라이브러리',
        link: 'https://www.npmjs.com/package/@oysterable_public/oysterable-ui',
        detailList: [
          '백오피스에서 공통적으로 사용될 리액트 기반 UI 컴포넌트 및 공통 로직(Custom Hooks)을 NPM에 배포',
          'Storybook을 활용하여 디자이너와 컴포넌트 협업을 위한 Static사이트 개발',
          '라이브러리용 빌드를 Rollup.js로 진행하여 Storybook-cli를 별도로 활용',
        ],
      },
      {
        title: 'IoT 기반 데이터 관리를 위한 사내 관리 시스템',
        link: 'https://oa-console.oysterable.com/',
        detailList: [
          '기기 데이터 및 현장 자료 관제와 TCP서버로부터의 데이터 활용을 위한 사내관리 시스템',
          'React, Hooks, ContextAPI, React-Query를 적극 활용하여 도메인, 클라이언트 상태 분리 개념 적용',
          '권한별 메뉴, 버튼 접근 등의 렌더링을 통한 다양한 UX 제공',
          'ApexChart를 활용하여 다양한 데이터를 시각화',
        ],
      },
      {
        title: '오늘의 분리수거 앱 관리를 위한 사내 관리 시스템',
        link: 'https://tr-console.oysterable.com/',
        detailList: [
          '오늘의 분리수거 앱의 데이터 및 유저 관리를 위한 백오피스 개발',
          '앱의 실제 렌더 모습과 싱크로율을 맞춘 다양한 미리보기 기능 제공',
          '테이블, 페이지네이션 등의 기반 컴포넌트와 그에 해당하는 재 사용될 로직들 구축으로 코드 재사용성 증대',
        ],
      },
      {
        title: '오늘의 분리수거 앱',
        link: '',
        detailList: [
          '개발된 앱 내 웹뷰의 문제점 개선을 진행',
          '브라우저 캐시 활용 및 상태관리 개선을 통해 기존 대비 API호출 횟수 66% 감소',
          'Dynamic import 및 static파일 캐싱을 통해 LightHouse점수 퍼포먼스 50점 상승',
          '앱 내 웹뷰의 크로스 브라우저 대응을 위해 Polymer 활용',
        ],
      },
      {
        title: '프론트엔드팀 리더 [2022/11~ ]',
        detailList: [
          'C Level, 백엔드 팀 리더 추천으로 팀 리더 지정',
          '팀원 업무 일정 관리 및 분배',
        ],
      },
      {
        title: '프론트엔드 팀 코드리뷰 문화 도입',
        detailList: [
          '소수 인원 및 주니어로 구성된 팀 사정으로 최대한 높은 품질 유지를 위해 리뷰문화 도입',
          '코드 일관성을 위해 Husky를 활용한 자동 Lint 체크 적용',
        ],
      },
      {
        title: '프론트 테스트 환경 구축',
        detailList: [
          'E2E테스트를 위한 Cypress, Unit 테스트를 위한 Jest, 비즈니스 로직을 위한 testing-library 세팅',
        ],
      },
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
    period: '2021.04 ~ 2022.01',
    tenure: '10개월',
    corporation: '디타임(Dtime)',
    coprEx: '개발팀 프론트엔드 개발자',
    explanation:
      '디타임은 기업이 겪는 조직에 관한 다양한 어려움을 해결하는것을 목표로 교보생명의 엑셀러레이팅 프로그램에 선발된 스타트업입니다.',
    list: [
      {
        title: '상태관리 패턴 변경',
        detailList: [
          'Props drilling 개선 위한 패턴 변경',
          '뷰 ,로직 분리 위한 비동기 전역 상태관리 도입(Redux-Saga) 및 hooks 적극 활용',
          '비동기와 동기 상태 관리 일관성을 만들어 테스트의 용이성 상승',
        ],
      },
      {
        title: '커스텀엘리먼트 개발',
        detailList: [
          '협력업체에 제공할 자사 서비스의 코드가 필요하여 개발 진행',
          '커스텀엘리먼트 및 웹팩을 활용한 하나의 번들된 JavaScript파일을 협력업체에 제공',
        ],
      },
      {
        title: '메인페이지 리뉴얼',
        link: 'http://trial.inssait.info.s3-website.ap-northeast-2.amazonaws.com/personnel',
        detailList: [
          '모바일 사이즈에 대응하는 새로운 컴포넌트 구성',
          '앵귤러와 로그인 연동을 위한 로그인페이지 개발',
          '마케팅 비즈니스 활용을 위해 랜딩시 유입되는 쿼리를 통해 유입처를 로깅하는 로직 구현',
        ],
      },
      {
        title: 'UI/UX 유지보수 및 개발',
        link: '',
        detailList: [
          '앵귤러로 되어있던 메인페이지들의 디자인개선 작업과 동시에 리액트로 전환',
          '30여가지 경우의수를 가진 휴가생성 케이스에 대해 UI/UX 및 테스트 코드 작성',
          '달력 컴포넌트 커스터마이징',
        ],
      },
      {
        title: '프론트 테스트 환경 구축',
        detailList: [
          'Unit Test 위한 jest 도입',
          'Business logic test를 위한 testing-library 활용',
          'E2E 테스트를 위한 Cypress 도입',
        ],
      },
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
    explanation:
      '빅데이터를 활용한 새벽배송 서비스를 제공하는 쇼핑 플랫폼 브랜디에서 프론트엔드 개발 인턴으로 참여하였습니다.',
    list: [
      {
        title: '클론 프로젝트 진행',
        detailList: [
          'Vue.js 기반으로 기존 쇼핑몰 사이트 클론 개발 진행',
          '캐러셀, GNB, 제품리스트 렌더 등 다양한 UI/UX를 개발',
        ],
      },
    ],
    skill: ['Vue.js 2.xx', 'Vuex'],
  },
];

export const PROJECT = [
  {
    period: '2022.07 ~ ',
    title: '바닐라JS로 만들어보는 개인블로그',
    company: '개인프로젝트',
    explanation: '바닐라 자바스크립트로 만든 자체 프레임 워크로 개발',
    skill: ['ES5/6', 'HTML5', 'CSS3', 'Express.js', 'Nginx', 'EC2', 'Route53'],
    link: 'https://blog.cloud-sanghun.com/',
    list: [
      {
        title: '컴포넌트 기반 개발',
        link: '',
        detailList: [
          '재사용성 증대를 위해 Vanila js를 활용한 컴포넌트 기반 개발',
          '상태기반 렌더링',
          'V1: 생성자 함수 기반 컴포넌트',
          'V2: 클래스 기반 컴포넌트',
        ],
      },
      {
        title: 'API 서버 개발',
        link: '',
        detailList: [
          'Express.js를 사용하여 Markdown을 읽어오는 api 서버 개발',
          'highlight.js 라이브러리를 이용해 Markdown에서 Html로 변환',
          'Nginx의 포트 포워딩을 통해 하나의 EC2만 활용',
        ],
      },
      {
        title: '라우팅 시스템',
        link: '',
        detailList: [
          'Custom Router를 만들어 CSR과 유사한 라우터 개발',
          'V1: HashChange이벤트를 활용한 라우터',
          'V2: History API를 활용한 라우터',
        ],
      },
      {
        title: '번들링 시스템',
        link: '',
        detailList: [
          '웹팩을 활용하여 최소한의 플러그인을 통해 개발서버와 빌드 시스템 구현',
        ],
      },
      {
        title: 'Github link',
        link: 'https://github.com/sanghunlee-711/Cloud-Vanilla-Blog',
        detailList: [],
      },
    ],
  },
  {
    period: '2021.05 ~ 2021.12',
    title: 'The Folks',
    company: '개인 프로젝트',
    explanation: '새로운 형태의 패션 커뮤니티를 지향한 프로젝트',
    link: 'https://github.com/stylefolks/stylefolks-frontend',
    skill: [
      'Next.js',
      'Nest.js',
      'GraphQL',
      'ApolloClient',
      'Postgresql',
      'EC2',
      'S3',
      'Route53',
    ],
    list: [
      {
        title: '유저간 팔로우 팔로잉 제공',
        link: '',
        detailList: [
          '팔로우 & 팔로잉 기능 구현',
          '크루, 유저, 브랜드 등 다양한 유저타입을 기반으로 상호 팔로잉 기능 제공',
        ],
      },
      {
        title: '게시물, 댓글 등록',
        link: '',
        detailList: [
          '게시글, 댓글 CRUD 개발',
          '작성 중 게시글 임시저장 및 불러오기 기능 구현',
          'ToastUI를 통한 다양한 글 작성 및 S3활용으로 이미지 등록 구현',
          '라이브러리 커스터마이징을 통해 대표사진 등록 기능 제공',
          '다양한 카테고리의 글 작성 기능 제공',
        ],
      },
      {
        title: '크루 생성 기능',
        link: '',
        detailList: [
          '특정 등급의 유저는 개별적 크루 생성이 가능하게 구현',
          '크루원으로 가입된 인원과 팔로우하는 인원의 글은 별도 탭에서 보여지게 구현',
        ],
      },
      {
        title: '이메일 인증시스템',
        link: '',
        detailList: ['Mailgun 라이브러리를 활용한 시스템 구현 '],
      },
      {
        title:
          '유기적인 패션커뮤니티 서비스 제공을 위해 기획, 디자인, 구현까지 1인 진행',
        link: '',
        detailList: [],
      },
      {
        title: 'FE Github link',
        link: 'https://github.com/stylefolks/stylefolks-frontend',
        detailList: [],
      },
    ],
  },
];

export const EDUCATION = [
  {
    period: '2012.03 ~ 2018.08',
    title: '영남대학교',
    explanation:
      '환경공학 전공 / 산업안전기사, 대기환경기사 ,수질환경기사 취득',
  },
  {
    period: '2009.03 ~ 2012.02',
    title: '달성고등학교',
    explanation: '자연계 졸업 (대구광역시)',
  },
];

export const ETC = [
  {
    period: '2018.10 ~ 2020.05',
    title: '베올리아 코리아',
    explanation:
      '수처리(폐수 초순수) 엔지니어 근무 후 사업개발 팀 / SK하이닉스 계약 담당으로 기술 기획 업무 진행',
  },
];

export default {
  LINKS,
  INTRODUCTION,
  SKILL,
  EXPERIENCE,
  EDUCATION,
  ETC,
  PROJECT,
};
