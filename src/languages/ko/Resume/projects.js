const VANILA_BLOG = {
  period: '2022.07 ~ ',
  title: '바닐라JS로 만들어보는 개인블로그',
  company: '개인프로젝트',
  explanation: '바닐라 자바스크립트로 만든 자체 프레임 워크로 개발',
  skill: ['ES5/6', 'HTML5', 'CSS3', 'Express.js', 'Nginx', 'EC2', 'Route53'],
  deployLink: 'https://blog.cloud-sanghun.com/',
  githubLink: 'https://github.com/sanghunlee-711/Cloud-Vanilla-Blog',
  list: [
    {
      title: '클라이언트 개발',
      deployLink: '',
      githubLink: '',
      detailList: [
        {
          target: '커스텀 컴포넌트 기반 개발',
          actions: [
            '재사용성 증대를 위해 Vanila js의 클래스를 활용한 컴포넌트 기반 개발',
            '상태기반 렌더링을 통해 일관성 있는 컴포넌트 형태 유지',
          ],
        },
        {
          target: '커스텀 라우팅 시스템',
          actions: [
            'History API를 활용한 커스텀 라우터 클래스를 만들어 CSR과 유사한 라우팅 시스템 적용',
          ],
        },
      ],
    },
    {
      title: '서버 개발',
      deployLink: '',
      githubLink: '',
      detailList: [
        {
          target: '마크다운 파일 전송 API 서버 개발',
          actions: [
            'Express.js를 사용하여 Markdown을 읽어오는 api 서버 개발',
            'highlight.js 라이브러리를 이용해 Markdown에서 Html로 변환',
            'Nginx의 포트 포워딩을 통해 하나의 EC2만 활용하여 운영 비용 절감',
          ],
        },
      ],
    },
    {
      title: '번들링 시스템',
      deployLink: '',
      githubLink: '',
      detailList: [
        {
          target: '클라이언트 빌드 시스템',
          actions: [
            '웹팩을 활용하여 최소한의 플러그인을 통해 로컬 개발서버와 상용 빌드 시스템 구현',
          ],
        },
      ],
    },
  ],
};

const THE_FOLKS = {
  period: '2021.05 ~ 2021.12',
  title: 'The Folks',
  company: '개인 프로젝트',
  explanation:
    '새로운 형태의 패션 커뮤니티를 지향한 프로젝트, 유기적인 패션커뮤니티 서비스 제공을 위해 기획, 디자인, 구현까지 1인 진행',
  deployLink: 'https://www.the-folks.com',
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
      title: '클라이언트 개발',
      deployLink: '',
      githubLink: 'https://github.com/stylefolks/stylefolks-frontend',
      detailList: [
        {
          target: '중복 코드 문제 해결',
          actions: [
            'Apollo client의 Codegen을 활용해 api interface 를 서버에서 받아오도록 하며 중복 타입 지정문제 해결',
          ],
        },
        {
          target: '게시물 작성 페이지',
          actions: [
            'apollo cache를 바로 mutating하여 댓글 추가 시 별도의 리로드 없이 빠른 생성 및 제거',
            '다양한 형태의 글 작성을 위한 ToastUI의 Editor 도입 및 커스터마이징을 통해 대표사진 등록 기능 추가',
          ],
        },
      ],
    },
    {
      title: '서버 개발',
      deployLink: '',
      githubLink: 'https://github.com/stylefolks/stylefolks-frontend',
      detailList: [
        {
          target: '유저간 팔로우 팔로잉 제공',
          actions: [
            '크루, 유저, 브랜드 등 다양한 유저타입을 기반으로 상호 팔로잉 기능 제공',
          ],
        },
        {
          target: '크루 생성 기능',
          actions: [
            '등급 테이블을 별도로 두며 크루 생성이 가능한 특별 등급이 존재하도록 구현',
          ],
        },
        {
          target: '게시물과 댓글 등 기타 기능',
          actions: [
            '게시글, 댓글 CRUD',
            'JWT 적용 인증 시스템',
            'S3활용한 이미지 저장 기능',
            '다양한 카테고리 제공 및 카테고리별 글 제공',
          ],
        },
      ],
    },
  ],
};

const IRON_MATE = {
  period: '2023.08 ~ ',
  title: 'Iron mate',
  company: '개인 프로젝트',
  explanation:
    '중량운동 시 나만의 일지를 작성할 기록노트입니다. 월간 요약 및 하루 요약 기능이 있습니다. 웹스토리지를 활용한 저장을 사용하고 있습니다.',
  deployLink: 'https://www.iron-mate.com',
  skill: ['Next.js', 'Vercel', 'Tailwind', 'Route53'],
  list: [
    {
      title: '클라이언트 개발',
      deployLink: '',
      githubLink: 'https://github.com/sanghunlee-711/iron-mate',
      detailList: [
        {
          target: '데이터 관리',
          actions: [
            '테이블카드 UI에 기재한 데이터를 액셀로 저장하여 반환',
            '적합한 형태의 액셀을 저장 시 테이블카드 UI를 제공해주며 해당 데이터에 대한 CRUD가 가능',
            '운동시간 측정 타이머 제공',
          ],
        },
      ],
    },
  ],
};

export const PROJECT = [IRON_MATE, VANILA_BLOG, THE_FOLKS];
