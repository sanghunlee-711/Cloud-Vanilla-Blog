export const APPS_CONSOLE = {
  title: '앱 관리를 위한 사내 관리 시스템 ',
  job: '프론트엔드 개발',
  type: 'Oysterable',
  period: '2022/02~2022/08',
  contribution: 80,
  links: [
    {
      icon: 'fa fa-globe   ',
      link: 'https://oa-console.oysterable.com/',
    },
  ],
  titleImages: [
    '../../../../../../../static/images/portfolio/oysterable/apps-console/apps-console-login.png',
    '../../../../../../../static/images/portfolio/oysterable/apps-console/apps-console-authgroup.png',
    '../../../../../../../static/images/portfolio/oysterable/apps-console/apps-console-banner-register.png',
  ],
  devHighlights: [
    '가입자 현황, 프로모션 관리, CS 관리 등의 운영관리',
    '앱 내 배너 및 상품정보 등 앱 내 UI 변경 등의 앱 관리',
    '쇼핑 및 캠페인 수정 및 추가를 위한 보상관리',
  ],
  devAchivement: [
    'React-Query를 사용하여 도메인상태와 UI상태 분리를 진행',
    '중복 UI 및 로직은 각각 UI라이브러리 및 Hooks로 분리하여 재활용 진행',
  ],
  techEnvironment: ['TypeScript'],
  libs: [
    'React.js',
    'redux-toolkit',
    'react-query',
    'styled-components',
    '@testing-library',
  ],
  exploreComment: `
    오늘의 분리수거 앱의 효율적 관리를 위한 내부관리시스템으로 시작된 프로젝트이며 
    앱 내 제공되는 다양한 이벤트 및 배너, 공지사항 등의 수정 및 작성을 위한 기능이 제공되며 내부 임직원의 업무효율 향상을 도모.
  `,
  devExplains: [
    {
      image:
        '../../../../../../../static/images/portfolio/oysterable/apps-console/apps-console-shopping-guide.png',
      explanation: `
      React-Query를 사용하여 도메인상태와 UI상태 분리를 진행하여 불 필요한 메모리 낭비를 지양
      `,
    },
    {
      image:
        '../../../../../../../static/images/portfolio/oysterable/apps-console/react-query.jpeg',
      explanation: `
      중복 UI 및 로직은 각각 UI라이브러리 및 Hooks로 분리하여 재활용을 진행하며 중복되는 코드의 작성을 감소
      `,
    },
  ],
};
