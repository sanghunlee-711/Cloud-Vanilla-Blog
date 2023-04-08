export const CUSTOM_ELEMENT = {
  title: '협력사 제공을 위한 커스텀 엘리먼츠',
  job: '프론트엔드 개발',
  type: 'Dtime',
  period: '2022/02 ~ 2022/11',
  contribution: 100,
  links: [
    {
      icon: 'fa fa-globe',
      link: 'https://oa-console.oysterable.com/',
    },
  ],
  titleImages: [
    '../../../../../../../static/images/portfolio/dtime/custom-element/dtime-custom-element-main.png',
    '../../../../../../../static/images/portfolio/dtime/custom-element/dtime-custom-element-ui.png',
  ],
  devHighlights: [
    '채용 특별 장려금 예상 계산 기능',
    '외부 도메인 해당 기능 사용을 위한 커스텀엘리먼츠 제공',
  ],
  devAchivement: [
    '커스텀 엘리먼츠와 커스텀이벤트의 개념',
    '웹팩을 통한 번들링 세팅',
  ],
  techEnvironment: ['TypeScript'],
  libs: ['React.js', 'Scss', 'Webpack'],
  exploreComment: `
    협력사 내부 도메인에 채용장려금 계산을 위한 기능 및 UI/UX 제공을 위한 커스텀 엘리먼츠 기능을 제공하여 사용자 측면에서 간단한 JS 및 해당 엘리먼츠를 호출하여 원하는 기능을 제공
  `,
  devExplains: [
    {
      image:
        '../../../../../../../static/images/portfolio/dtime/custom-element/webpack.png',
      explanation: `
        Webpack의 output 설정을 통해 단일 파일 및 정해진 이름으로서의 JS파일을 제공하게 만들어 
        기능을 활용하는 입장에서 필요한 파일의 개수를 감소시켜 하나의 스크립트 파일 호출을 통해 해당기능을 원할하게 사용할 수 있도록 제공
      `,
    },
    {
      image:
        '../../../../../../../static/images/portfolio/dtime/custom-element/js-custom-event.png',
      explanation: `
        커스텀 엘리먼츠와 이벤트를 제공함으로서 사용자가 원하는 콜백함수의 호출 및 정해진 네이밍으로 html에서 호출하여 사용할 수 있도록 제공
      `,
    },
  ],
};
