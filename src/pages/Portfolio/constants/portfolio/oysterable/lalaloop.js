export const OA_LALALOOP_PORTFOLIO = {
  title: '다회용기 반납 서비스',
  job: '프론트엔드 개발',
  type: 'Oysterable',
  period: '2022/08 ~ 2022/11',
  links: [
    {
      icon: 'fa fa-globe',
      link: 'https://dish.lalaloop.app/',
    },
  ],
  titleImages: [
    '../../../../../../static/images/portfolio/oysterable/lalaloop/oa-lalaloop-main.png',
    '../../../../../../static/images/portfolio/oysterable/lalaloop/oa-lalaloop-map.png',
    '../../../../../../static/images/portfolio/oysterable/lalaloop/oa-lalaloop-account.png',
  ],
  devHighlights: [
    '지도 내 다회용기 반납기기 위치 확인 서비스',
    '보증금 반환을 위한 계좌정보 입력 기능',
    '서비스 설명을 위한 메인페이지',
  ],
  devAchivement: [
    '크로스 브라우징 관리를 위한 기법 및 지식 학습',
    'Google Anayltics를 활용한 Business Statics 수집',
    '카카오 맵 라이브러리 커스텀 오버레이등의 활용 능력',
    '각종 약관 별도의 html 파일로 개발하여 확장성을 위한 개발 방식 습득',
  ],
  techEnvironment: ['TypeScript'],
  libs: [
    'Next.js',
    'styled-components',
    'react-kakao-maps-sdk',
    'react-modal-sheet',
  ],
  exploreComment: `
    랄라루프 디쉬 프로젝트는 배달앱들과 서울시의 협업을 통해 다회용기로 주문한 경우, 다회용기 회수를 위한 제공방법으로 진행된 프로젝트입니다.
    자사가 제공하는 반납기 기기로의 반납을 진행할 수 있도록 지도에 위치를 표기해주는 페이지가 제공됩니다.
    반납 완료 후 카카오톡 비즈니스 메시지를 통해 제공되는 링크로 인센티브 입금을 요청할 수 있는 기능을 지원합니다.
    500여건 이상의 반납이 진행되었습니다. (2023.11 GA 기준)
  `,
  devExplains: [
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/lalaloop/cross-browsing.jpeg',
      explanation: [
        '다양한 디바이스에서 접근하는 비즈니스의 특성 상 크로스 브라우징 문제를 해결하기 위해 노력했습니다.',
        'IOS의 viewport인식 문제를 JS로 해결 및 input, button 태그의 스타일 일관성을 부여하는 등의 작업 진행했습니다.',
      ],
    },
    {
      image:
        '../../../../../../static/images/portfolio/oysterable/lalaloop/node.js.png',
      explanation: [
        `
      Next.js의 프론트 서버기능을 활용하여 프로젝트 내부 폴더에 존재하는 html 약관 파일을 file-system 라이브러리를 통해 불러와 렌더링 해줌으로써 약관과 프로젝트의 독립성을 확보하였습니다.
    `,
      ],
    },
  ],
};
