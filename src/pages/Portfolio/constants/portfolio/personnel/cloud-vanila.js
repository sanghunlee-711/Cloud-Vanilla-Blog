export const CLOUD_VANILLA_PORTFOLIO = {
  title: 'JS 자체 프로임워크로 만든 블로그',
  job: '프론트엔드 & 백엔드 개발',
  type: '개인프로젝트',
  period: '2022/04~',
  links: [
    {
      icon: 'fab fa-github   ',
      link: 'https://github.com/sanghunlee-711/Cloud-Vanilla-Blog',
    },
    {
      icon: 'fa fa-globe   ',
      link: 'https://www.cloud-sanghun.com/',
    },
  ],
  titleImages: [
    '../../../../../../static/images/portfolio/vanilla-blog/post-list.png',
    '../../../../../../static/images/portfolio/vanilla-blog/content.png',
    '../../../../../../static/images/portfolio/vanilla-blog/print.png',
  ],
  devHighlights: [
    '주제별 게시글 제공',
    '게시글 별 댓글 및 방문록 제공',
    '이력서 및 포트폴리오 프린트',
  ],
  devAchivement: [
    'Vanila JS를 통한 state기반 렌더링 방식의 구현',
    '다양한 라우팅 방식에 대한 이해',
    'Nginx의 포트포워딩 등의 설정 방법',
  ],
  techEnvironment: ['ES5/6', 'HTML5', 'CSS3'],
  libs: ['Express.js', 'marked.js', 'highlight.js', 'Nginx', 'EC2', 'Route53'],
  exploreComment: `자체 프레임워크로 만든 블로그는 Vanilla JS를 공부하며 SPA 라이브러리의 CSR 작동방식과 유사하게 구현된 블로그이며
    작성자 개인의 포트폴리오, 이력서를 포함하였고 프린트 기능이 제공되며 Markdown파일로 작성된 글들을 렌더링 해주고 있습니다.
    게스트북과 각 게시물의 글에 댓글 기능을 disqus를 통해 제공하고 있습니다.
    `,
  devExplains: [
    {
      image:
        '../../../../../../static/images/portfolio/vanilla-blog/cloud-vanilla-render.png',
      explanation: `
        CSR의 Routing시스템을 위해 Web HistoryAPI를 이용해 구현하였고 각 컴포넌트는 state기반 렌더링의 일관성을 가지는 class형태로 구성,
        기본적인 SPA feature들에 대한 공부와 동시에 시간이 지나도 유지 보수가 용이하게 가장 단순하고 낮은 레벨에서의 구현을 진행
      `,
    },
    {
      image:
        '../../../../../../static/images/portfolio/vanilla-blog/diagram.png',
      explanation: `하나의 EC2서버에서 Nginx의 포트포워딩을 통해 백엔드와 프론트를 제공,
      규모가 크지 않은 프로젝트이므로 불필요한 낭비를 지양하기 위해 내부 폴더를 DB처럼 활용하여 MD파일들을 불러오며 프론트엔드에서 호출하는 API를 통해 파싱된 객체를 반환`,
    },
  ],
};
