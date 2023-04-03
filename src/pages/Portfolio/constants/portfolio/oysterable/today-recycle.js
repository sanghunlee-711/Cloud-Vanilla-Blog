export const TODAY_RECYCLE = {
  title: '오늘의 분리수거 개선',
  job: '프론트엔드 개발',
  type: 'Oysterable',
  period: '2023/02 ~ 2023/03',
  contribution: 100,
  links: [
    {
      icon: 'fa fa-globe fa-2x',
      link: 'https://oa-console.oysterable.com/',
    },
  ],
  titleImages: [
    '../../../../../../static/images/portfolio/oysterable/today-recycle/tr-main.png',
    '../../../../../../static/images/portfolio/oysterable/today-recycle/tr-product-detail.png',
    '../../../../../../static/images/portfolio/oysterable/today-recycle/tr-machine-list.png',
    '../../../../../../static/images/portfolio/oysterable/today-recycle/tr-point.png',
  ],
  devHighlights: [
    '기존 개발 완료된 프로젝트의 개선 및 추가 UI 진행',
    '기존의 유저 플로우 대비 API 호출 회수 66프로 감소',
    '지역 및 전역 상태관리가 혼재된 지도 페이지의 상태관리 구조를 일원화하며 변경 해 확장성 및 코드 퀄리티 상승',
    '기기 리스트 내부 리스트 클릭 시 지도 페이지 내 해당 기기로 이동하는 UI/UX 진행',
    'Static파일 및 백엔드팀과 협업하여 API 캐시세팅을 진행하여 최적화 진행',
  ],
  devAchivement: [
    '브라우저 자원 활용능력 향상 및 백엔드와 협업능력 증대',
    '폴리필의 역할 및 오래된 버전의 웹뷰 대응 방식 학습',
  ],
  techEnvironment: ['TypeScript'],
  libs: ['React.js', 'redux-toolkit', 'styled-components'],
  exploreComment: `
    아 여긴 뭘적냐 쫌..
  `,
  devExplains: [
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/today-recycle/tr-map.png',
      explanation: `
        지역 및 전역 상태관리가 혼재된 지도 페이지의 상태관리 구조를 일원화하며 변경 해 확장성 및 코드 퀄리티 상승
      `,
    },
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/today-recycle/react-polymer.png',
      explanation: `
      폴리머 썰을 적자.
      Android 과거 버전 쓰시는 분들에게 array의 some, every메서드가 먹히지 않아서 react폴리머 사용해서 대체한 경험 고고
      `,
    },
  ],
};
