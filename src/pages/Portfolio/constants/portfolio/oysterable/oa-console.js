export const OA_CONSOLE = {
  title: 'IoT 기반 데이터 관리를 위한 사내 관리 시스템',
  job: '프론트엔드 개발',
  type: 'Oysterable',
  period: '2022/02~2022/11',
  contribution: 70,
  links: [
    {
      icon: 'fa fa-globe',
      link: 'https://oa-console.oysterable.com/',
    },
  ],
  titleImages: [
    '../../../../../../../static/images/portfolio/oysterable/oa-console/oa-console-trend.png',
    '../../../../../../../static/images/portfolio/oysterable/oa-console/oa-console-graph.png',
    '../../../../../../../static/images/portfolio/oysterable/oa-console/oa-console-register.png',
  ],
  devHighlights: [
    '기기 관리, 관제 및 로그를 제공하는 전체 관리',
    '클라이언트와 내부 직원 관리를 위한 사용자 관리',
    '각종 Key Performance Index 관리를 위한 차트 대시보드',
    '권한별 메뉴 및 버튼 접근',
  ],
  devAchivement: [
    '차트라이브러리 활용 학습',
    '권한별로 메뉴 및 버튼 접근등과 같은 복잡한 UX 구현 능력 향상',
  ],
  techEnvironment: ['TypeScript'],
  libs: [
    'React.js',
    'redux-toolkit',
    'react-query',
    'apexcharts',
    'styled-components',
    '@testing-library',
    'Cypress',
  ],
  exploreComment: `
    내부 임직원들의 업무 진행 시 작성 또는 수정이 필요한 데이터를 손쉽게 관리하기 위해 시작된 프로젝트입니다.
    기기별 상태 관제 및 액셀로 데이터 제공, 기기의 설정값 수정 등 다양한 기능을 제공하며 업무효율의 상승을 도모하였습니다.
  `,
  devExplains: [
    {
      image:
        '../../../../../../../static/images/portfolio/oysterable/oa-console/apexchart.png',
      explanation: [
        ' apexcharts라는 라이브러리의 사용을 통해 커스터마이징 된 차트를 구현하였습니다.',
        '필요한 정보를 적절하게 변환하는 능력 및 차트라이브러리 내의 다양한 기능 활용 능력 향상시켰습니다.',
      ],
    },
    {
      image:
        '../../../../../../../static/images/portfolio/oysterable/oa-console/oa-console-auth.png',
      explanation: [
        '권한별로 메뉴 접근 및 버튼 접근이 변경되는 요구사항이 있어 적절한 타입 지정, 시간복잡도를 고려한 해쉬 자료구조를 활용하였습니다.',
        '재귀함수를 활용한 사이드 메뉴 구현으로 메뉴 깊이(depth)에 대한 확장성을 증대하였습니다.',
        '각 메뉴 및 버튼 별 권한에 맞는 렌더링을 설정하였습니다.',
        ,
      ],
    },
  ],
};
