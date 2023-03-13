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
인트로덕션은 우대사항에 맞춰서 작성해보자 \n
<strong>3년차</strong> 프론트엔드 개발자 이상훈입니다.\n
`;

export const SKILL = [
  {
    title: 'CORE',
    skill: ['ES5/ES6', 'TypeScript', 'React.js', 'Next.js'],
  },
  {
    title: 'STATE MANAGEMENT',
    skill: ['Redux', 'Redux-Toolkit', 'Redux-saga', 'Apollo-client'],
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
  { title: 'SERVER', skill: ['Express.js', 'Nest.js', 'NginX'] },
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
    coprEx: '개발팀 프론트엔드 개발자',
    list: [
      {
        title: '배달음식 일회용기 반납 후 보증금 반환을 위한 서비스 개발',
        link: '',
        detailList: [
          '디쉬 페이지',
          '은행선택을 위한 Bottom Sheet',
          '기기 위치를 제공해주는 지도페이지',
        ],
      },
      {
        title: 'IoT 기반 데이터 관리를 위한 사내 관리 시스템 개발',
        link: '',
        detailList: [],
      },
      {
        title: '오늘의 분리수거 앱 관리를 위한 사내 관리 시스템 개발',
        link: '',
        detailList: [],
      },
      {
        title:
          '반납기기를 통해 전송되는 데이터 관제 및 관리를 위한 사내 관리 시스템 개발',
        link: '',
        detailList: [],
      },
      {
        title: '사내 관리 시스템 공통으로 사용이 될 사내 UI라이브러리 개발',
        link: 'https://www.npmjs.com/package/@oysterable_public/oysterable-ui',
        detailList: [
          '백오피스에서 공통적으로 사용될 리액트 기반 컴포넌트 및 로직(Custom Hooks)을 NPM에 배포',
          'Storybook을 활용하여 디자이너와 컴포넌트 협업을 위한 Static사이트 개발',
          '라이브러리용 빌드를 Rollup.js로 진행하여 Storybook-cli를 별도로 활용',
        ],
      },
      {
        title: '프론트엔드 팀 코드리뷰 문화 도입',
        detailList: [],
      },
      {
        title: '프론트 테스트 환경 구축',
        detailList: [],
      },
      {
        title: '프론트엔드팀 리더 역임',
        detailList: [],
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
        title:
          '뷰 ,로직 분리 위한 비동기 전역 상태관리 도입(Redux-Saga) 및 hooks 적극 활용',
        detailList: [],
      },
      {
        title: 'Props drilling 개선 위한 패턴 변경 참여',
        detailList: [],
      },
      {
        title: 'Unit Test 위한 jest 도입',
        detailList: [],
      },
      {
        title: 'E2E 테스트를 위한 Cypress 도입',
        detailList: [],
      },
      {
        title: '협력업체 서비스 제공을 위해 커스텀엘리먼츠 및 웹팩 활용',
        detailList: [],
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
        title: 'Vue.js 기반으로 기존 쇼핑몰 사이트 클론 프로젝트 진행',
        detailList: [],
      },
      {
        title: '캐러셀, GNB, 제품리스트 렌더 등 다양한 UI/UX를 진행',
        detailList: [],
      },
    ],
    skill: ['Vue.js', 'Vuex'],
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
export const PROJECT = [
  {
    period: '2022.07 ~ ',
    title: '바닐라JS로 만들어보는 개인블로그',
    company: '개인프로젝트',
    image: '',
    list: [
      {
        explanation:
          '바닐라 자바스크립트를 통해 자체 프레임 워크로 만든 프론트엔드 개발 진행',
        href: 'https://blog.cloud-sanghun.com/',
        subList: [],
      },
      {
        explanation: 'ES 통한 state기반 렌더링 로직을 가진 컴포넌트',
        href: '',
        subList: [],
      },
      {
        explanation: 'hashchange 이벤트를 활용한 라우팅',
        href: '',
        subList: [],
      },
      {
        explanation: '웹팩을 활용한 빌드 진행',
        href: '',
        subList: [],
      },
      {
        explanation: '배포 시 Nginx포트 포워딩을 통해 하나의 EC2만 활용',
        href: '',
        subList: [],
      },
      {
        explanation: 'Express.js를 사용하여 Markdown을 읽어오는 api 서버 개발',
        href: '',
        subList: [
          {
            subExplanation:
              'highlight.js 라이브러리를 이용해 Markdown -> Html로 변환',
            href: '',
          },
        ],
      },
    ],
  },
  {
    period: '2022.06 ~ ',
    title: '프론트엔드 공용 라이브러리',
    company: '오이스터에이블',
    image: '',
    list: [
      {
        explanation:
          '백오피스에서 공통적으로 사용될 리액트 기반 컴포넌트 및 로직(Custom Hooks)을 NPM에 배포',
        href: 'https://www.npmjs.com/package/@oysterable_public/oysterable-ui',
        subList: [],
      },
      {
        explanation:
          'Storybook을 활용하여 디자이너와 컴포넌트 협업을 위한 Static사이트 개발',
        href: '',
        subList: [],
      },
    ],
  },
  {
    period: '2022.04 ~ 2022.08',
    title: 'OA-Console',
    company: '오이스터에이블',
    image: '',
    list: [
      {
        explanation:
          '기기 데이터 및 현장 자료 관제와 TCP서버로부터의 데이터 활용을 위한 백오피스',
        href: 'https://oa-console.oysterable.com/',
        subList: [],
      },
      {
        explanation:
          'React, Hooks, ContextAPI, React-Query를 적극활용하여 개발 진행',
        href: '',
        subList: [],
      },
      {
        explanation: '권한별 메뉴 접근 및 렌더링을 통한 다양한 UX 제공',
        href: '',
        subList: [],
      },
      {
        explanation: 'ApexChart를 활용하여 다양한 데이터를 시각화',
        href: '',
        subList: [],
      },
    ],
  },
  {
    period: '2022.02 ~ 2022.08',
    title: 'Apps-Console',
    company: '오이스터에이블',
    image: '',
    list: [
      {
        explanation:
          '오늘의 분리수거 앱의 데이터 및 유저 관리를 위한 백오피스 개발',
        href: 'https://tr-console.oysterable.com/',
        subList: [],
      },
      {
        explanation:
          'React, Hooks, ContextAPI, React-Query를 적극활용하여 개발 진행',
        href: '',
        subList: [],
      },
      {
        explanation:
          '앱의 실제 렌더 모습과 싱크로율을 맞춘 다양한 미리보기 기능 제공',
        href: '',
        subList: [],
      },
      {
        explanation: '권한별 메뉴 접근 및 렌더링을 통한 다양한 UX 제공',
        href: '',
        subList: [],
      },
      {
        explanation:
          '테이블, 페이지네이션 등의 기반 컴포넌트와 그에 해당하는 재사용될 로직들 구축으로 코드 재사용성 증대',
        href: '',
        subList: [],
      },
    ],
  },
  {
    period: '2021.05 ~ 2021.12',
    title: 'The Folks',
    company: '개인 프로젝트',
    href: '',
    list: [
      {
        explanation:
          '유기적인 패션커뮤니티 서비스 제공을 위해 기획, 디자인, 구현까지 1인 진행 여기 깃헙링크로 하고 깃헙 정리하자',
        href: 'http://www.the-folks.com',
        subList: [],
      },
      {
        explanation:
          'Next.js, Nest.js,ApolloClient, GraphQL, EC2, Route53 적극 활용을 통해 웹서비스 1인 개발 진행',
        href: '',
        subList: [],
      },
      {
        explanation:
          '크루, 유저, 브랜드 등 다양한 유저타입을 기반으로 팔로우&팔로잉 기능 구현',
        href: '',
        subList: [],
      },
      {
        explanation: '게시글 임시저장 및 불러오기 기능 구현',
        href: '',
        subList: [],
      },
      {
        explanation:
          'ToastUI를 통한 다양한 글 작성 및 S3활용으로 이미지 등록 구현',
        href: '',
        subList: [],
      },
      {
        explanation: 'Mailgun을 통한 이메일 인증시스템 구현 후 비용문제로 중단',
        href: '',
        subList: [],
      },
    ],
  },
  {
    period: '2021.08 ~ 2021.08',
    title: '인싸이트 메인페이지 리뉴얼',
    company: '디타임 (폐업)',
    image: '',
    list: [
      {
        explanation:
          '앵귤러로 되어있던 메인페이지들의 디자인개선 작업과 동시에 리액트로 전환',
        href: '',
        subList: [],
      },
      {
        explanation: '모바일 사이즈에 대응하는 새로운 컴포넌트 구성',
        href: '',
        subList: [],
      },
      {
        explanation: '앵귤러와 로그인 연동을 위한 로그인페이지 개발',
        href: '',
        subList: [],
      },
      {
        explanation:
          '마케팅 비즈니스 활용을 위해 랜딩시 유입되는 쿼리를 통해 유입처를 로깅하는 로직 구현',
        href: '',
        subList: [],
      },
    ],
  },

  {
    period: '2021.04 ~ 2022.01',
    title: '인싸이트 개발',
    company: '디타임 (폐업)',
    href: '',
    list: [
      {
        explanation: 'UI,UX 개발',
        href: 'http://trial.inssait.info.s3-website.ap-northeast-2.amazonaws.com/personnel',
        subList: [],
      },
      {
        explanation:
          '비동기 전역상태관리 도입을 위한 Redux-saga 및 hooks적극 활용',
        href: '',
        subList: [],
      },
      {
        explanation: '심각한 PropsDrilling은 Redux-toolkit으로 이전',
        href: '',
        subList: [],
      },
      {
        explanation: 'Unit, E2E Test를 위한 Jest, Cypress 도입',
        href: '',
        subList: [],
      },
      {
        explanation:
          '협력업체 서비스 제공을 위한 커스텀엘리먼츠 구현 및 웹팩 활용',
        href: '',
        subList: [],
      },
      {
        explanation: '달력 컴포넌트 기존 라이브러리 커스터마이징',
        href: '',
        subList: [],
      },
    ],
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
