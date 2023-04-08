export const TODAY_RECYCLE = {
  title: '오늘의 분리수거 개선',
  job: '프론트엔드 개발',
  type: 'Oysterable',
  period: '2023/02 ~ 2023/03',
  contribution: 100,
  links: [
    {
      icon: 'fa fa-globe   ',
      link: 'https://oa-console.oysterable.com/',
    },
  ],
  titleImages: [
    '../../../../../../static/images/portfolio/oysterable/today-recycle/tr-main.png',
    '../../../../../../static/images/portfolio/oysterable/today-recycle/tr-machine-list.png',
    '../../../../../../static/images/portfolio/oysterable/today-recycle/tr-point.png',
  ],
  devHighlights: [
    '지도 내 검색된 기기 리스트',
    '위치별 검색을 통한 기기 리스트',
    'API 호출 간소화 및 로더 제공을 통해 구매 및 반납 어뷰징 제거',
  ],
  devAchivement: [
    '복잡한 상태관리 구조를 일원화하며 확장성 및 코드 퀄리티 상승 및 UX 개선',
    '브라우저의 자원을 활용하여 최적화 진행',
    '폴리필을 활용한 구버전의 웹뷰 대응',
  ],
  techEnvironment: ['TypeScript'],
  libs: ['React.js', 'redux-toolkit', 'styled-components'],
  exploreComment: `  
  오늘의 분리수거 앱은 캔, 투명 페트, 종이팩등의 반납기기가 제공되며 분리배출을 실천 시 포인트 제공 및 기업, 지역 등에서 제공해 준 다양한 보상품을 구매할 수 있는 서비스를 제공
  `,
  devExplains: [
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/today-recycle/tr-map.png',
      explanation: `
        자주 변경이 일어나는 API의 캐시를 제공 및 적절한 상태관리 패턴으로의 변경을 통해 기존에 무분별하게 호출되던 토큰 변경 API, 유저정보 호출, 포인트 정보 호출등의 API를
        50회(라우팅 기준의 유저플로우)에서 6회(로그인,구매, 기부 등의 일부 시점)로 90% 정도 감소, 이로 인해 서버자원의 낭비방지 및 UX 개선
      `,
    },
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/today-recycle/polyfill.png',
      explanation: `
      비즈니스의 주 고객이 구 버전의 Android기기 사용이 다수 있어 웹뷰 내부의 일부 메서드(Array의 some, every 등)가 지원되지 않아 기능의 누락이 되는 것을 발견, react-app-polyfill의 일부 항목을 적용시켜 이를 해결
      `,
    },
  ],
};
