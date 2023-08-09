export const PROJECT = [
  {
    period: '2022.07 ~ ',
    title: '바닐라JS로 만들어보는 개인블로그',
    company: '개인프로젝트',
    explanation: '바닐라 자바스크립트로 만든 자체 프레임 워크로 개발',
    skill: ['ES5/6', 'HTML5', 'CSS3', 'Express.js', 'Nginx', 'EC2', 'Route53'],
    link: 'https://blog.cloud-sanghun.com/',
    list: [
      {
        title: '컴포넌트 기반 개발',
        link: '',
        detailList: [
          '재사용성 증대를 위해 Vanila js를 활용한 컴포넌트 기반 개발',
          '상태기반 렌더링',
          'V1: 생성자 함수 기반 컴포넌트',
          'V2: 클래스 기반 컴포넌트',
        ],
      },
      {
        title: 'API 서버 개발',
        link: '',
        detailList: [
          'Express.js를 사용하여 Markdown을 읽어오는 api 서버 개발',
          'highlight.js 라이브러리를 이용해 Markdown에서 Html로 변환',
          'Nginx의 포트 포워딩을 통해 하나의 EC2만 활용',
        ],
      },
      {
        title: '라우팅 시스템',
        link: '',
        detailList: [
          'Custom Router를 만들어 CSR과 유사한 라우터 개발',
          'V1: HashChange이벤트를 활용한 라우터',
          'V2: History API를 활용한 라우터',
        ],
      },
      {
        title: '번들링 시스템',
        link: '',
        detailList: [
          '웹팩을 활용하여 최소한의 플러그인을 통해 개발서버와 빌드 시스템 구현',
        ],
      },
      {
        title: 'Github link',
        link: 'https://github.com/sanghunlee-711/Cloud-Vanilla-Blog',
        detailList: [],
      },
    ],
  },
  {
    period: '2021.05 ~ 2021.12',
    title: 'The Folks',
    company: '개인 프로젝트',
    explanation: '새로운 형태의 패션 커뮤니티를 지향한 프로젝트',
    link: 'https://github.com/stylefolks/stylefolks-frontend',
    skill: [
      'Next.js',
      'Nest.js',
      'GraphQL',
      'ApolloClient',
      'Postgresql',
      'EC2',
      'S3',
      'Route53',
    ],
    list: [
      {
        title: '유저간 팔로우 팔로잉 제공',
        link: '',
        detailList: [
          '팔로우 & 팔로잉 기능 구현',
          '크루, 유저, 브랜드 등 다양한 유저타입을 기반으로 상호 팔로잉 기능 제공',
        ],
      },
      {
        title: '게시물, 댓글 등록',
        link: '',
        detailList: [
          '게시글, 댓글 CRUD 개발',
          '작성 중 게시글 임시저장 및 불러오기 기능 구현',
          'ToastUI를 통한 다양한 글 작성 및 S3활용으로 이미지 등록 구현',
          '라이브러리 커스터마이징을 통해 대표사진 등록 기능 제공',
          '다양한 카테고리의 글 작성 기능 제공',
        ],
      },
      {
        title: '크루 생성 기능',
        link: '',
        detailList: [
          '특정 등급의 유저는 개별적 크루 생성이 가능하게 구현',
          '크루원으로 가입된 인원과 팔로우하는 인원의 글은 별도 탭에서 보여지게 구현',
        ],
      },
      {
        title: '이메일 인증시스템',
        link: '',
        detailList: ['Mailgun 라이브러리를 활용한 시스템 구현 '],
      },
      {
        title:
          '유기적인 패션커뮤니티 서비스 제공을 위해 기획, 디자인, 구현까지 1인 진행',
        link: '',
        detailList: [],
      },
      {
        title: 'FE Github link',
        link: 'https://github.com/stylefolks/stylefolks-frontend',
        detailList: [],
      },
    ],
  },
];
