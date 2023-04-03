export const CLOUD_VANILLA_PORTFOLIO = {
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
    '../../../../../../static/images/portfolio/vanilla-blog/post-list.png',
    '../../../../../../static/images/portfolio/vanilla-blog/content.png',
    '../../../../../../static/images/portfolio/vanilla-blog/print.png',
    '../../../../../../static/images/portfolio/vanilla-blog/about.png',
  ],
  devHighlights: [
    '재사용성 증대를 위해 Vanila js를 활용한 컴포넌트 기반 개발',
    'Custom Router를 만들어 SPA의 CSR과 유사한 라우터 적용',
    'Express.js를 사용하여 Markdown을 읽어오는 api 서버 개발',
    '웹팩을 활용하여 최소한의 플러그인을 통해 빌드 시스템 구현',
    'Nginx의 포트 포워딩을 통해 하나의 EC2만을 활용',
  ],
  devAchivement: [
    'Vanila js를 통한 state기반 렌더링 방식의 구현 형태 습득',
    '다양한 라우팅 방식에 대한 이해',
    'Markdown의 파싱을 위한 라이브러리 활용법 습득',
    'Nginx의 포트포워딩 등의 세팅 학습',
  ],
  techEnvironment: ['ES5/6', 'HTML5', 'CSS3'],
  libs: ['Express.js', 'marked.js', 'highlight.js', 'Nginx', 'EC2', 'Route53'],
  exploreComment: `자체 프레임워크로 만든 블로그는 바닐라 JS를 공부하며 기존의 SPA의 CSR 작동방식과 유사하게 구현된 블로그입니다.
    작성자 개인의 포트폴리오, 이력서를 포함하였고 프린트 기능이 제공되며 MD파일로 작성된 글들을 렌더링 해주고 있습니다.
    게스트북과 각 게시물의 글에 댓글 기능을 disqus를 통해 제공하고 있습니다.
    이 과정을 통해 낮은 수준에서 부터의 상태관리를 통한 렌더링 방법을 체득하고,
    실제 라이브러리(라우터 ,CSR)의 작동방식을 조금이나마 구현할 수 있게 되었습니다.
    `,
  devExplains: [
    {
      image: '../../../../../../static/images/portfolio/vanilla-blog/about.png',
      explanation: `
        CSR의 Routing시스템을 위해 Web HistoryAPI를 이용해 구현하였고 각 컴포넌트는 state기반 렌더링의 일관성을 가지는 class형태로 구성되어 있습니다.
        기본적인 SPA feature들에 대한 공부와 동시에 시간이 지나도 유지가 가능할 정도로 가장 단순하고 낮은 레벨에서의 구현을 하려 노력했습니다.
      `,
    },
    {
      image:
        '../../../../../../static/images/portfolio/vanilla-blog/diagram.png',
      explanation: `하나의 EC2서버에서 백엔드와 프론트를 처리하고 있습니다. 
      규모가 크지 않은 프로젝트이므로 불필요한 비용 낭비를 위해 내부 폴더를 DB처럼 활용하여 MarkDown파일들을 불러오며 프론트엔드에서 호출하는 API를 통해 파싱된 객체를 내려줍니다.`,
    },
  ],
};
