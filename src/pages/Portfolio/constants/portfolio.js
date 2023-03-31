export const PORTFOLIO_LIST = [
  {
    title: 'JS 자체 프로임워크로 만든 블로그',
    job: '프론트엔드 & 백엔드 개발',
    type: '개인프로젝트',
    period: '2022/01~2023/03',
    links: [
      {
        icon: 'fab fa-github fa-2x',
        link: 'https://github.com/sanghunlee-711/Cloud-Vanilla-Blog',
      },
      {
        icon: 'fa fa-globe fa-2x',
        link: 'https://www.cloud-sanghun.com/',
      },
    ],
    titleImages: [
      '../../../../static/images/portfolio/vanilla-blog/post-list.png',
      '../../../../static/images/portfolio/vanilla-blog/content.png',
      '../../../../static/images/portfolio/vanilla-blog/print.png',
      '../../../../static/images/portfolio/vanilla-blog/about.png',
    ],
    devHighlights: [
      '재사용성 증대를 위해 Vanila js를 활용한 컴포넌트 기반 개발',
      'Custom Router를 만들어 SPA의 CSR과 유사한 라우터 적용',
      'Express.js를 사용하여 Markdown을 읽어오는 api 서버 개발',
      '웹팩을 활용하여 최소한의 플러그인을 통해 빌드 시스템 구현',
      'Nginx의 포트 포워딩을 통해 하나의 EC2만을 활용',
    ],
    techEnvironment: ['ES5/6', 'HTML5', 'CSS3'],
    libs: [
      'Express.js',
      'marked.js',
      'highlight.js',
      'Nginx',
      'EC2',
      'Route53',
    ],
    exploreComment: `자체 프레임워크로 만든 블로그는 바닐라 JS를 공부하며 기존의 SPA의 CSR 작동방식과 유사하게 구현된 블로그입니다.
      작성자 개인의 포트폴리오, 이력서를 포함하였고 프린트 기능이 제공되며 MD파일로 작성된 글들을 렌더링 해주고 있습니다.
      게스트북과 각 게시물의 글에 댓글 기능을 disqus를 통해 제공하고 있습니다.`,
    devExplains: [
      {
        image: '../../../../static/images/portfolio/vanilla-blog/about.png',
        explanation: `
          CSR의 Routing시스템을 위해 Web HistoryAPI를 이용해 구현하였고 각 컴포넌트는 state기반 렌더링의 일관성을 가지는 class형태로 구성되어 있습니다.
          기본적인 SPA feature들에 대한 공부와 동시에 시간이 지나도 유지가 가능할 정도로 가장 단순하고 낮은 레벨에서의 구현을 하려 노력했습니다.
        `,
      },
      {
        image: '../../../../static/images/portfolio/vanilla-blog/diagram.png',
        explanation: `하나의 EC2서버에서 백엔드와 프론트를 처리하고 있습니다. 
        규모가 크지 않은 프로젝트이므로 불필요한 비용 낭비를 위해 내부 폴더를 DB처럼 활용하여 MarkDown파일들을 불러오며 프론트엔드에서 호출하는 API를 통해 파싱된 객체를 내려줍니다.`,
      },
    ],
  },
  {
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
      '../../../../static/images/portfolio/the-folks/thefolks-main.png',
      '../../../../static/images/portfolio/the-folks/thefolks-mypage.png',
      '../../../../static/images/portfolio/the-folks/thefolks-post-write.png',
      '../../../../static/images/portfolio/the-folks/thefolks-crew.png',
    ],
    devHighlights: [
      'Next.JS를 활용한 SEO, SSR 적극 활용',
      'Tui-Editor를 커스터마이징하여 모바일 글 작성 및 대표사진 기능 추가 제작',
      '다양한 모바일 해상도 대응을 위한 반응형 적용',
      'Nest.JS, GraphQL, ApolloClient를 활용한 프론트엔드 위주의 서버 구현',
      '백엔드 및 프론트 서버 별도 호스팅을 통해 실제 작은 서비스 규모 구현',
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
          '../../../../static/images/portfolio/the-folks/thefolks-flow.png',
        explanation: `
        단일 서비스의 구조를 따르기 위해 백엔드,프론트엔드 서버를 따로 구성하였으며 GraphQL을 활용한 API를 통해 필요한 데이터의 CRUD가 이루어지는 구조입니다.
        Nest.js, Next.js 두가지의 번들용량이 작지 않은 관계로 각 서버를 구성하였습니다.
        `,
      },
      {
        image: '../../../../static/images/portfolio/the-folks/thefolks-erd.png',
        explanation: `
        다양한 관계가 존재하는 ERD
        `,
      },
    ],
  },
];
