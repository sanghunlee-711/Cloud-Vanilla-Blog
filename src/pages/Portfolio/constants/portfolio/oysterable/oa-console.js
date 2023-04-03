export const OA_CONSOLE = {
  title: 'IoT 기반 데이터 관리를 위한 사내 관리 시스템',
  job: '프론트엔드 개발',
  type: 'Oysterable',
  period: '2022/02 ~ 2022/11',
  contribution: 80,
  links: [
    {
      icon: 'fa fa-globe   ',
      link: 'https://oa-console.oysterable.com/',
    },
  ],
  titleImages: [
    '../../../../../../../static/images/portfolio/oysterable/oa-console/oa-console-trend.png',
    '../../../../../../../static/images/portfolio/oysterable/oa-console/oa-console-graph.png',
    '../../../../../../../static/images/portfolio/oysterable/oa-console/oa-console-register.png',
  ],
  devHighlights: [
    '프로젝트 전체 세팅, 개발 유지 보수 진행',
    'ApexChart를 이용한 차트 UI 개발',
    'React-Query를 사용하여 도메인상태와 UI상태 분리를 진행',
    '권한별로 메뉴 접근 및 버튼 접근이 변경되는 요구사항이 있으므로 HashMap을 이용하여 권한 별 체크 진행',
    '중복 UI 및 로직은 각각 UI라이브러리 및 Hooks로 분리하여 재활용 진행',
  ],
  devAchivement: ['차트라이브러리 활용 학습'],
  techEnvironment: ['TypeScript'],
  libs: [
    'React.js',
    'redux-toolkit',
    'react-query',
    'styled-components',
    '@testing-library',
  ],
  exploreComment: `
    IoT 기반 데이터 관리를 위한 사내 관리 시스템은 내부 임직원들의 업무 진행 시 작성 또는 수정이 필요한 데이터를 손쉽게 관리하기 위해 시작된 프로젝트입니다.
    기기별 상태 관제 및 액셀로 데이터 제공, 기기의 설정값 수정 등 다양한 기능을 제공하며 업무효율의 상승을 도모하고 있습니다.
    이 과정을 통해 차트라이브러리의 활용법 및 도메인상태와 UI상태의 개념 및 이의 관리가 퍼포먼스 향상에 도움이 된다는 점을 학습했습니다.
  `,
  devExplains: [
    {
      image:
        '../../../../../../../static/images/portfolio/oysterable/oa-console/oa-console-auth.png',
      explanation: `
      react-modal-sheet 라이브러리를 활용하여 입금 은행 선택을 할 수 있도록 리스트를 제공하였습니다. 
      모바일 친화적인 UI에 통상적으로 자주 쓰이는 Bottom Sheet의 UX를 제공하며 사용경험을 좋게 만들었습니다.
      `,
    },
    {
      image:
        '../../../../../../../static/images/portfolio/oysterable/lalaloop/next.js.png',
      explanation: `
      추후 검색 최적화를 위해 Next.js를 활용한 SSR로 개발을 진행하였습니다.
      내부 기획 및 마케팅 팀의 결정으로 검색최적화는 지연되었습니다.
      `,
    },
  ],
};
