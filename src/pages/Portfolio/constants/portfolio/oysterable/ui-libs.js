export const OA_UI_LIBS = {
  title: '사내 관리 시스템 UI 라이브러리',
  job: '프론트엔드 개발',
  type: 'Oysterable',
  period: '2022/07 ~ 2022/09',
  links: [
    {
      icon: 'fa fa-list-alt   ',
      link: 'https://www.npmjs.com/package/@oysterable_public/oysterable-ui',
    },
    {
      icon: 'fa fa-globe   ',
      link: 'http://15.164.231.190:83/?path=/story/bold-typography--page',
    },
  ],
  titleImages: [
    '../../../../../../static/images/portfolio/oysterable/oa-ui/oa-ui-npm.png',
    '../../../../../../static/images/portfolio/oysterable/oa-ui/oa-ui-storybook.png',
    '../../../../../../static/images/portfolio/oysterable/oa-ui/oa-ui-usage.png',
  ],
  devHighlights: [
    'Storybook을 이용한 디자인시스템 페이지를 통해 디자인팀과 협업',
    '백오피스 프로젝트에 일관적으로 UI를 적용할 수 있도록 UI라이브러리 제공',
    'Rollup.js를 통한 라이브러리 번들 진행',
  ],
  devAchivement: [
    'Rollup.js의 세팅방법 및 webpack과의 차이점 학습',
    'Storybook 작성 능력 향상',
  ],
  techEnvironment: ['TypeScript'],
  libs: ['Next.js', 'react-kakao-maps-sdk', 'styled-components'],
  exploreComment: `
    초기 다양한 백오피스가 개발되며 여러 프로젝트로 분리된 상황에서 UI 코드의 일관성을 지키기 위해 라이브러리를 개발하였습니다.
    UI와 함께 공통적으로 사용되는 Hooks코드들도 제공하려 하였으나 변동사항이 많은 로직부분이라 제거한 상태에서 UI만 제공하고 있습니다.
    현재 두가지의 콘솔 프로젝트에 사용되고 있습니다.
    이 과정을 통해 Rollup.js의 사용법을 조금이나마 경험해보았고 번들링 프로세스에 대한 이해도가 증가하였습니다.
    번들링 단계의 최적화에 대한 고민이 깊어졌습니다.
  `,
  devExplains: [
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/oa-ui/rollup.js.jpg',
      explanation: `
        트리쉐이킹 및 다양한 샘플코드의 존재 등의 이점이 있어 Webpack이 아닌 Rollup.js를 통해 번들링을 진행하며 번들링 툴에 대한 이해도 증가.
      `,
    },
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/oa-ui/storybook.png',
      explanation: `
        스토리북을 통해 디자인팀에서 요구한 실제 디자인과 활용이 맞는지 상호 확인하는 것이 더욱 편해졌습니다.
      `,
    },
  ],
};
