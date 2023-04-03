export const OA_LALALOOP_PORTFOLIO = {
  title: '다회용기 반납 서비스',
  job: '프론트엔드 개발',
  type: 'Oysterable',
  period: '2022/08 ~ 2022/11',
  links: [
    {
      icon: 'fa fa-globe   ',
      link: 'https://dish.lalaloop.app/',
    },
  ],
  titleImages: [
    '../../../../../../static/images/portfolio/oysterable/lalaloop/oa-lalaloop-main.png',
    '../../../../../../static/images/portfolio/oysterable/lalaloop/oa-lalaloop-map.png',
    '../../../../../../static/images/portfolio/oysterable/lalaloop/oa-lalaloop-account.png',
    '../../../../../../static/images/portfolio/oysterable/lalaloop/oa-lalaloop-complete.png',
  ],
  devHighlights: [
    'Next.JS를 활용한 SEO, SSR 적극 활용',
    '모바일, 데스크탑 양방향에 친화적인 UI를 위해 반응형 적용',
    'Kakao Maps API를 이용한 지도 내 다양한 기계 확인',
    '카카오톡 비즈톡 내부의 링크를 통해 웹에서 입금 요청을 바로 진행할 수 있도록 개발',
    '각종 약관 별도의 html 파일로 개발하여 확장성 증대',
    'Google Anayltics를 활용한 Business Statics 수집',
  ],
  devAchivement: [
    '크로스 브라우징 시 스타일 관리를 위한 기법 학습(IOS의 Viewport문제, 버튼의 기본 CSS 등)',
    '카카오 맵 라이브러리 커스텀 오버레이등의 활용 능력 향상',
  ],
  techEnvironment: ['TypeScript'],
  libs: [
    'Next.js',
    'react-kakao-maps-sdk',
    'styled-components',
    'react-modal-sheet',
  ],
  exploreComment: `
    랄라루프 디쉬 프로젝트는 배달앱들과 서울시의 협업을 통해 다회용기로 주문한 경우, 다회용기 회수를 위한 제공방법 중 하나로서 개발되었습니다.
    자사가 제공하는 반납기 기기로의 반납을 진행할 수 있도록 지도에 위치를 표기해주는 페이지 및 
    반납 완료 후 카카오톡 비즈니스 메시지를 통해 제공되는 링크를 통해 인센티브 입금을 요청할 수 있는 기능을 지원합니다.
    현재 140여건 이상의 반납이 진행되었습니다.(2023.03 GA 기준)
  `,
  devExplains: [
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/lalaloop/oa-lalaloop-bank.png',
      explanation: `
      react-modal-sheet 라이브러리를 활용하여 입금 은행 선택을 할 수 있도록 리스트를 제공하였습니다. 
      모바일 친화적인 UI에 통상적으로 자주 쓰이는 Bottom Sheet의 UX를 제공하며 사용경험을 좋게 만들었습니다.
      `,
    },
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/lalaloop/next.js.png',
      explanation: `
      추후 검색 최적화를 위해 Next.js를 활용한 SSR로 개발을 진행하였습니다.
      내부 기획 및 마케팅 팀의 결정으로 검색최적화는 지연되었습니다.
      `,
    },
  ],
};
