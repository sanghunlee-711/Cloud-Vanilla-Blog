export const PORTFOLIO_LIST = [
  {
    title: 'JS 자체 프로임워크로 만든 블로그',
    job: '프론트엔드 & 백엔드 개발',
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
    techEnvironment: ['ES5/6', 'HTML5', 'CSS3', 'Git'],
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
        image: '../../../../static/images/portfolio/vanilla-blog/flow.png',
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
    title: 'JS 자체 프로임워크로 만든 블로그',
    job: '프론트엔드 & 백엔드 개발',
    period: '2022/01~2023/03',
    links: [
      {
        icon: 'fab fa-github fa-2x',
        link: 'https://github.com/sanghunlee-711/Cloud-Vanilla-Blog',
      },
      {
        icon: 'fa fa-globe fa-2x',
        link: 'https://github.com/sanghunlee-711/Cloud-Vanilla-Blog',
      },
    ],
    titleImages: [
      '../../../../static/images/posts/google.png',
      'https://i.namu.wiki/i/-uSNU8Zga2EYknl55yxq4B9xPId8lxI-jVnXf1qzNeXP-DTZTaEcg9L1e9XWg-wYx4WeelPDgXTGN5mKGAZHr0jeCGVAKvx_wVFHJVjP9-GkPbxN4IUsddCxZFrpXQYh78slfeTXiNJ-U_FOkIIM2w.svg',
      '../../../../static/images/posts/howl.png',
    ],
    devHighlights: [
      '재사용성 증대를 위해 Vanila js를 활용한 컴포넌트 기반 개발',
      'Custom Router를 만들어 SPA의 CSR과 유사한 라우터 개발',
      'Express.js를 사용하여 Markdown을 읽어오는 api 서버 개발',
      '웹팩을 활용하여 최소한의 플러그인을 통해 개발서버와 빌드 시스템 구현',
      'Nginx의 포트 포워딩을 통해 하나의 EC2만 활용',
    ],
    techEnvironment: [
      'ES5/6',
      'HTML5',
      'CSS3',
      'Git',
      'ES5/6',
      'HTML5',
      'CSS3',
      'Git',
    ],
    libs: [
      'Express.js',
      'Nginx',
      'EC2',
      'Route53',
      'marked.js',
      'highlight.js',
    ],
    exploreComment: `다양한 플랫폼에서 블로그를 운영해보려다가 결국 만들어버렸습니다.
    개인적이거나 의미있는 글을 많이써보려고 노력중입니다.
    더 많은 정보가 궁금하시다면 아래 버튼들을 클릭해보세요 :)
    바닐라 자바스크립트로 만든 자체 프레임 워크로 개발`,
    devExplains: [
      {
        image: '../../../../static/images/posts/howl.png',
        explanation: `
        다양한 플랫폼에서 블로그를 운영해보려다가 결국 만들어버렸습니다. \n
        개인적이거나 의미있는 글을 많이써보려고 노력중입니다. \n
        더 많은 정보가 궁금하시다면 아래 버튼들을 클릭해보세요 :) \n
        바닐라 자바스크립트로 만든 자체 프레임 워크로 개발 \n
        `,
      },
      {
        image: '../../../../static/images/posts/howl.png',
        explanation: `
        다양한 플랫폼에서 블로그를 운영해보려다가 결국 만들어버렸습니다. \n
        개인적이거나 의미있는 글을 많이써보려고 노력중입니다. \n
        더 많은 정보가 궁금하시다면 아래 버튼들을 클릭해보세요 :) \n
        바닐라 자바스크립트로 만든 자체 프레임 워크로 개발 \n
        `,
      },
    ],
  },
];
