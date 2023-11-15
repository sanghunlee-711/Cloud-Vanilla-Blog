export const BACK_OFFICE_MONOREPO = {
  title: '사내 관리 시스템 모노레포 통합 프로젝트',
  job: '프론트엔드 개발',
  type: 'Oysterable',
  period: '2023/06 ~ 2023/07',
  links: [
    // {
    //   icon: 'fa fa-list-alt   ',
    //   link: 'https://www.npmjs.com/package/@oysterable_public/oysterable-ui',
    // },
    // {
    //   icon: 'fa fa-globe   ',
    //   link: 'http://15.164.231.190:83/?path=/story/bold-typography--page',
    // },
  ],
  titleImages: [
    // '../../../../../../static/images/portfolio/oysterable/oa-ui/oa-ui-npm.png',
    '../../../../../../static/images/portfolio/oysterable/monorepo/dependency.png',
    '../../../../../../static/images/portfolio/oysterable/oa-ui/oa-ui-usage.png',
  ],
  exploreComment: `
    유사하지만 다른 도메인을 가진 백오피스들이 산재되어 있는 상황을 타개하기 위해 모노레포를 도입하였습니다.
    기존 UI라이브러리로 유지보수가 진행되던 공용 코드들의 의존성관리 및 수정용이성이 더욱 향상 되었습니다.
    이 과정을 통해 팀 내 개발자들의 다른 도메인간의 싱크로율에 대한 불필요한 고민이 사라지게 되었습니다.
  `,
  devHighlights: [
    'yarn work-space를 활용하여 다른 프로젝트 간 소스코드 공유',
    '의존성 패키지 일원화를 통한 버전관리',
    '페이지 자동 생성 스크립트 기능 개발',
  ],
  devAchivement: [
    '소스코드 공유를 하는 방법 및 이를 활용하기위한 다양한 기본 세팅',
    'Node.js의 fs등 기본 유틸을 활용하여 자동화를 하는 방법',
  ],
  techEnvironment: ['TypeScript'],
  libs: ['React.js', 'styled-components', 'yarn'],
  devExplains: [
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/monorepo/node-fs.png',
      explanation: [
        '백오피스 특성상 유사한 UI에 다른 도메인이 연결되는 페이지 생성이 많았으므로 이의 반복작업을 용이하게 하기 위한 방법에 대한 고민을 하였습니다.',
        'Node.js의 fs와 같은 기본 유틸을 활용하는 방법으로 자동화 스크립트를 작성하여 1,500여줄이 자동 작성이 되도록 DX 개선하였습니다.',
      ],
    },
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/monorepo/yarn.jpg',
      explanation: [
        'yarn workspace의 기본설정,타입스크립트의 절대경로 세팅, jest의 moduleNameMapper 등 프로젝트별 소스코드 공유를 위함에 있어 필요한 기본세팅을 진행하였습니다.',
        '각 커밋마다 전체 프로젝트에 영향을 미칠 수 있으므로 안정성 증대를 위한 github workflow를 활용한 PR레벨에서의 안정성 테스트를 진행하였습니다.',
      ],
    },
  ],
};
