export const DTIME_MAINTENANCE = {
  title: '인싸이트 프로젝트 유지 보수 및 신규 개발',
  job: '프론트엔드 개발',
  type: 'Dtime',
  period: '2021/04 ~ 2022/01',
  contribution: 50,
  links: [
    {
      icon: 'fa fa-globe   ',
      link: 'https://oa-console.oysterable.com/',
    },
  ],
  titleImages: [
    '../../../../../../../static/images/portfolio/dtime/maintenance/dtime-main.png',
    '../../../../../../../static/images/portfolio/dtime/maintenance/dtime-worktype-main.png',
    '../../../../../../../static/images/portfolio/dtime/maintenance/dtime-worktype.png',
  ],
  devHighlights: [
    '근무유형, 근무 형태 추가 및 수정 기능',
    '새로운 부서, 휴가, 공지사항 등 생성 및 관리기능',
    '로그인, 회원가입 기능',
  ],
  devAchivement: [
    'Redux-Saga, Redux-Toolkit을 활용한 Flux패턴의 적용으로 상태관리 패턴 변경',
    'Testing-library의 활용을 통한 일부 복잡한 로직 테스트 작성',
    '비즈니스 활용을 위한 유입 경로 추적 기능',
  ],
  techEnvironment: ['TypeScript'],
  libs: [
    'React.js',
    'redux-toolkit',
    'redux-saga',
    'styled-components',
    '@testing-library',
    'jest',
  ],
  exploreComment: `
    근태관리, 결재 관리, 연락처 조회, 시간외 근무신청, 부서 직원 관리 및 설정 등을 통합 제공하는 웹 서비스의 일부 UI/UX를 개발하며 상태관리 패턴의 정립 및 UI 테스트 및 비즈니스 로직 테스트를 도입하여 주니어로 구성된 개발팀에 안정성을 증대하였습니다.
  `,
  devExplains: [
    {
      image:
        '../../../../../../../static/images/portfolio/dtime/maintenance/react-testing-library.png',
      explanation: `
        testing-library를 활용하여 테스트가 용이하게 설정된 Flux패턴에서 여러가지 테스트 케이스 일관성 있게 정립 및 테스트를 진행하며 근무유형의 다양한 케이스 등에 적용되는 복잡한 로직의 안정성 증대 및
        Cypress로 일부페이지의 E2E테스트를 진행하며 프론트엔드 파트의 퀄리티 상승
      `,
    },
    {
      image:
        '../../../../../../../static/images/portfolio/dtime/maintenance/redux-saga.png',
      explanation: `
        Generator를 통해 순수함수로 제공되는 전역 비동기 상태관리를 위한 redux-saga와 전역 상태관리인 Redux-toolkit을 활용하여 Flux패턴으로 상태관리 패턴을 정착하여 추후 로직의 추가 및 제거 또는 테스트에 일관성을 제공하였습니다.
      `,
    },
  ],
};
