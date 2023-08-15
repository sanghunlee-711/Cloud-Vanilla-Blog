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
        title: '사내 관리 서비스 통합 모노레포지토리 시스템 도입',
        deployLink: '',
        detailList: [
          {
            target: '유사 백오피스 서비스 내의 중복 컴포넌트 및 로직 코드 제거',
            actions: [
              '공통 UI, 로직 분리를 하여 Git diff 기준 중복코드 65,000 여 줄 제거',
              'yarn work space를 통해 각 프로젝트 별 코드 공유 사용 가능하게 변경',
            ],
          },
          {
            target: 'UI 일원화',
            actions: [
              'Storybook을 활용하여 디자이너와 컴포넌트 협업을 위한 Static사이트 개발로 협업능력 증대',
            ],
          },
          {
            target: '반복 개발 업무 개선',
            deployLink:
              'https://www.cloud-sanghun.com/content?id=2023-07-25-Node-folders&type=post-dev',
            actions: [
              '반복되는 UI의 폴더구조와 컴포넌트 코드를 생성해주는 자동화 스크립트를 작성하여 1,500여줄이 자동 작성이 되도록 DX 개선',
            ],
          },
        ],
      },
      {
        title: '배달음식 일회용기 반납 후 보증금 반환을 위한 서비스',
        deployLink: 'https://dish.lalaloop.app/',
        githubLink: '',
        detailList: [
          {
            target: '크로스 브라우징 및 디바이스 대응',
            actions: [
              '시멘틱 태그와 다양한 css기법을 이용하여 웹 & 모바일 및 크로스브라우징 대응',
            ],
          },
        ],
      },
      {
        title: 'IoT 기반 데이터 관리를 위한 사내 관리 시스템',
        deployLink: 'https://oa-console.oysterable.com/',
        githubLink: '',
        detailList: [
          {
            target: '프로젝트 초기 구조 세팅',
            actions: [
              'React, Hooks, ContextAPI, React-Query를 적극 활용하여  도메인, 클라이언트 상태 분리 개념 적용으로 상태 구조 생성',
              '테이블, 페이지네이션 등의 기반 컴포넌트와 그에 해당하는 재 사용될 로직들 구축으로 코드 재사용성 증대',
            ],
          },
          {
            target: '사내 업무 효율 증진',
            actions: [
              'ApexChart를 활용하여 다양한 데이터를 시각화 UX 제공',
              '권한별 메뉴, 버튼 접근 등의 렌더링을 통한 다양한 UX 제공',
              '앱의 실제 렌더 모습과 싱크로율을 맞춘 다양한 미리보기 기능 제공',
            ],
          },
        ],
      },
      {
        title: '오늘의 분리수거 앱 개선',
        deployLink: '',
        githubLink: '',
        detailList: [
          {
            target: '앱 작동 속도 개선',
            actions: [
              '브라우저 캐시 활용 및 상태관리 개선을 통해 기존 대비 API 호출 횟수 66% 감소',
              'Dynamic import 및 렌더링 블락 옵션 개선을 통해 LightHouse점수 퍼포먼스 50점 상승',
              '앱 내 웹뷰의 크로스 브라우저 대응을 위해 Polyfill 활용',
            ],
          },
        ],
      },
      {
        title: '프론트엔드팀 리더 [2022/11~ ]',
        detailList: [
          {
            target: '팀 개발 문화 정착 및 기술 증진',
            actions: [
              '팀원 업무 일정 관리 및 분배를 위해 Jira 티켓을 활용',
              '코드 리뷰문화 도입을 통해 소수 인원 및 주니어로 구성된 팀의 제품 품질 유지',
              'Husky를 활용한 자동 Lint 체크 적용으로 코드 일관성을 강화',
              'Cypress, testing-library, Jest 환경 세팅 및 코드 작성으로 제품 안정성 증대',
            ],
          },
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
        title: '인싸이트 지원금 계산기',
        detailList: [
          {
            target: '협력업체에 자사 서비스 제공',
            actions: [
              '커스텀엘리먼트 및 웹팩을 활용한 하나의 번들된 JavaScript 파일을 협력업체에 제공',
            ],
          },
        ],
      },

      {
        title: '인싸이트 유지 보수 및 개발',
        link: '',
        detailList: [
          {
            target: '코드 품질 개선',
            actions: [
              'Redux-Saga, Redux-Toolkit을 활용한 Flux패턴의 적용으로 상태관리 패턴 변경',
              '30여가지 경우의 수를 가진 휴가생성 케이스에 대해 UI/UX 및 테스트 코드으로 5-10분의 QA 소모 시간 제거',
            ],
          },
          {
            target: 'UI/UX 유지보수',
            actions: [
              '앵귤러로 되어있던 메인페이지들의 디자인개선 작업과 동시에 리액트로 전환',
              '모바일 사이즈에 대응하는 새로운 컴포넌트 구성',
              '비즈니스 활용을 위한 유입 경로 추적 기능',
            ],
          },
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
          {
            target: 'UI/UX 개발',
            actions: [
              'Vue.js 기반으로 기존 쇼핑몰 사이트 클론 개발 진행',
              '캐러셀, GNB, 제품리스트 렌더 등 다양한 UI/UX를 개발',
            ],
          },
        ],
      },
    ],
    skill: ['Vue.js 2.xx', 'Vuex'],
  },
];
