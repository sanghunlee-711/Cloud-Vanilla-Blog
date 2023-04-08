export const THE_FOLKS_PORTFOLIO = {
  title: '패션 커뮤니티 The Folks.V1',
  job: '프론트엔드 & 백엔드 개발',
  type: '개인프로젝트',
  period: '2021/09~2022/04',
  links: [
    {
      icon: 'fab fa-github   ',
      link: 'https://github.com/stylefolks/stylefolks-frontend',
    },
    // {
    //   icon: 'fa fa-globe   ',
    //   link: 'http://www.the-folks.com/',
    // },
  ],
  titleImages: [
    '../../../../../../static/images/portfolio/the-folks/thefolks-main.png',
    '../../../../../../static/images/portfolio/the-folks/thefolks-mypage.png',
    '../../../../../../static/images/portfolio/the-folks/thefolks-post-write.png',
  ],
  devHighlights: [
    '로그인, 회원가입 및 유저정보 설정',
    '다양한 카테고리의 글, 댓글 및 임시 게시글 작성',
    '유저간 팔로우,팔로잉 및 크루 생성',
    '권한별 컨텐츠 작성',
  ],
  devAchivement: [
    'SEO를 위한 기본적인 robot.txt, manifest.json등의 요구사항 이해',
    '다양한 Viewport 대응을 위한 반응형 적용',
    'GraphQL, ApolloClient를 활용하여 프론트 위주의 개발 진행 방식',
    'AWS EC2, Route53, S3등의 배포를 위한 지식 습득',
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
  기획, 디자인, 개발에 거쳐 1인진행을 오랜기간 해왔으며 비용문제로 현재 호스팅을 중단하였습니다.
  회원가입, 로그인, 유저들 간의 상호 팔로우&팔로잉, 다양한 카테고리 기반으로 생성되는 글 및 유저가 생성한 크루를 통해 
  유저들끼리 서로의 게시글을 쉽게 볼 수 있게 해주었으며 해당 페이지를 크루생성자가 커스터마이징 할 수 있도록 기능을 제공하였습니다.
  `,
  devExplains: [
    {
      image:
        '../../../../../../static/images/portfolio/the-folks/thefolks-flow.png',
      explanation: `
      중복 타입 선언을 방지하기 위해 Apollo의 Codegen기능을 활용하여 백엔드와 프론트의 타입 싱크를 맞추었습니다.
      GraphQL, Apollo-Client을 활용하여 필요한 데이터의 CRUD가 이루어지며 Nest.js, Next.js 두가지의 번들용량이 작지 않은 관계로 각 서버를 구성하였습니다.
      `,
    },
    {
      image:
        '../../../../../../static/images/portfolio/the-folks/thefolks-erd.png',
      explanation: `
      여기서 SEO를 가져가자
      `,
    },
  ],
};
