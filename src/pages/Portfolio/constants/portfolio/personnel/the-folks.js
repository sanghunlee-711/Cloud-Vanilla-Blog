export const THE_FOLKS_PORTFOLIO = {
  title: '패션 커뮤니티 The Folks.V1',
  job: '프론트엔드 & 백엔드 개발',
  type: '개인프로젝트',
  period: '2021/09~2022/04',
  links: [
    {
      icon: 'fab fa-github fa-2x',
      link: 'https://github.com/stylefolks/stylefolks-frontend',
    },
    // {
    //   icon: 'fa fa-globe fa-2x',
    //   link: 'http://www.the-folks.com/',
    // },
  ],
  titleImages: [
    '../../../../../../static/images/portfolio/the-folks/thefolks-main.png',
    '../../../../../../static/images/portfolio/the-folks/thefolks-mypage.png',
    '../../../../../../static/images/portfolio/the-folks/thefolks-post-write.png',
    '../../../../../../static/images/portfolio/the-folks/thefolks-crew.png',
  ],
  devHighlights: [
    'Next.JS를 활용한 SEO, SSR 적극 활용',
    'Tui-Editor를 커스터마이징하여 모바일 글 작성 및 대표사진 기능 추가 제작',
    '다양한 모바일 해상도 대응을 위한 반응형 적용',
    'Nest.JS, GraphQL, ApolloClient를 활용한 프론트엔드 위주의 서버 구현',
    '백엔드 및 프론트 서버 별도 호스팅을 통해 실제 작은 서비스 규모 구현',
  ],
  devAchivement: [
    'SEO를 위한 기본적인 robot.txt, manifest.json과 같은 파일의 기능 이해',
    '반응형 적용을 위한 다양한 CSS 기법 학습',
    'GraphQL, ApolloClient를 활용하여 프론트 위주의 개발 진행 방식 습득',
  ],
  techEnvironment: ['TypeScript', 'Postgresql'],
  libs: [
    'Next.js',
    'ToastUI Editor',
    'Scss',
    'Nest.js',
    'GraphQL',
    'Apollo-Client',
    'EC2',
    'S3',
  ],
  exploreComment: `더 폭스는 유기적인 패션커뮤니티를 만들어 보고싶다는 생각으로 시작하게 된 프로젝트입니다.
  기획, 디자인, 개발에 거쳐 1인진행을 오랜기간 해왔으며 비용문제로 현재 호스팅을 닫은 상태입니다.
  회원가입,로그인, 유저들 간의 상호 팔로우&팔로잉, 다양한 카테고리 기반으로 생성되는 글 및 유저가 생성한 크루를 통해 
  마음이 맞는 유저들끼리 서로의 게시글을 쉽게 볼 수 있게 해주었으며 해당 페이지를 크루생성자가 커스터마이징 할 수 있도록 기능을 제공하였습니다.
  `,
  devExplains: [
    {
      image:
        '../../../../../../static/images/portfolio/the-folks/thefolks-flow.png',
      explanation: `
      단일 서비스의 구조를 따르기 위해 백엔드,프론트엔드 서버를 따로 구성하였으며 GraphQL을 활용한 API를 통해 필요한 데이터의 CRUD가 이루어지는 구조입니다.
      Nest.js, Next.js 두가지의 번들용량이 작지 않은 관계로 각 서버를 구성하였습니다.
      `,
    },
    {
      image:
        '../../../../../../static/images/portfolio/the-folks/thefolks-erd.png',
      explanation: `
      다양한 관계가 존재하는 ERD
      `,
    },
  ],
};
