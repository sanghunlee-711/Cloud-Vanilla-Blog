const VANILLA_BLOG = {
  period: "2022.07 ~ ",
  title: "바닐라JS로 만들어보는 개인블로그",
  company: "개인프로젝트",
  explanation:
    "바닐라 JavaScript 기반 자체 프레임워크를 설계해 콘텐츠/이력/포트폴리오를 운영하는 개인 블로그",
  client: {
    title: "클라이언트 개발",
    customComponent: {
      title: "커스텀 컴포넌트 기반 개발",
      reuse:
        "중복 UI 구현 문제를 줄이기 위해 Vanilla JS 클래스 기반 컴포넌트 패턴을 도입해 재사용성을 확보",
      stateManagement:
        "상태 기반 렌더링 구조를 설계해 화면 일관성과 변경 대응력을 높임",
    },
    routing: {
      title: "커스텀 라우팅 시스템",
      historyAPI:
        "History API 기반 커스텀 라우터 클래스를 구현해 CSR과 유사한 내비게이션 경험을 제공",
    },
  },
  server: {
    title: "서버 개발",
    markdown: {
      title: "마크다운 파일 전송 API 서버 개발",
      express: "Express.js로 Markdown 파일 조회 API 서버를 구현",
      highlight: "highlight.js 라이브러리를 이용해 Markdown에서 Html로 변환",
      nginx: "Nginx 포트 포워딩 구성으로 단일 EC2 운영 환경을 구성해 인프라 비용을 절감",
    },
  },
  bundling: {
    title: "번들링 시스템",
    clientBuild: "클라이언트 빌드 시스템",
    webpack:
      "Webpack 기반으로 로컬 개발 서버/상용 빌드 파이프라인을 구성",
  },
};

const THE_FOLKS = {
  title: "The Folks",
  company: "개인 프로젝트",
  explanation:
    "새로운 형태의 패션 커뮤니티를 지향한 프로젝트, 유기적인 패션커뮤니티 서비스 제공을 위해 기획, 디자인, 구현까지 1인 진행",
  client: {
    title: "클라이언트 개발",
    dupCode: {
      title: "중복 코드 문제 해결",
      apolloClient:
        "Apollo client의 Codegen을 활용해 api interface 를 서버에서 받아오도록 하며 중복 타입 지정문제 해결",
    },
    contentsPage: {
      title: "게시물 작성 페이지",
      apolloCache:
        "apollo cache를 바로 mutating하여 댓글 추가 시 별도의 리로드 없이 빠른 생성 및 제거",
      editor:
        "다양한 형태의 글 작성을 위한 ToastUI의 Editor 도입 및 커스터마이징을 통해 대표사진 등록 기능 추가",
    },
  },
  server: {
    title: "서버 개발",
    following: {
      title: "유저간 팔로우 팔로잉 제공",
      userType:
        "크루, 유저, 브랜드 등 다양한 유저타입을 기반으로 상호 팔로잉 기능 제공",
    },
    crew: {
      title: "크루 생성 기능",
      gradeTable:
        "등급 테이블을 별도로 두며 크루 생성이 가능한 특별 등급이 존재하도록 구현",
    },
    posts: {
      title: "게시물과 댓글 등 기타 기능",
      crud: "게시글, 댓글 CRUD",
      jwt: "JWT 적용 인증 시스템",
      s3: "S3활용한 이미지 저장 기능",
      categories: "다양한 카테고리 제공 및 카테고리별 글 제공",
    },
  },
};

const IRON_MATE = {
  period: "2023.08 ~ ",
  title: "Iron mate",
  company: "개인 프로젝트",
  explanation:
    "중량운동 시 나만의 일지를 작성할 기록노트입니다. 월간 요약 및 하루 요약 기능이 있습니다. 웹스토리지를 활용한 저장을 사용하고 있습니다.",
  client: {
    title: "클라이언트 개발",
    dataManage: {
      title: "데이터 관리",
      excelSave: "테이블카드 UI에 기재한 데이터를 액셀로 저장하여 반환",
      tableUI:
        "적합한 형태의 액셀을 저장 시 테이블카드 UI를 제공해주며 해당 데이터에 대한 CRUD가 가능",
      timer: "운동시간 측정 타이머 제공",
    },
  },
};

export default {
  IRON_MATE,
  VANILLA_BLOG,
  THE_FOLKS,
};
