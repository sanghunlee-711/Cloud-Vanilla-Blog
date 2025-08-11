export const SOCAR = {
  name: "쏘카(SOCAR)",
  tenure: "재직중",
  explanation:
    "모든 사람이 자유롭고 행복하게 이동하는 세상을 만들기 위해 노력하는 회사입니다.",
  coprEx: "마케팅엔지니어링팀 -> FE CORE팀 프론트엔드 개발자",
  project: {
    title: "일부 페이지 개발 및 유지보수",
    titleFunc: "쿠폰, 래플 백오피스 등..",
  },
  documentation: {
    title: "테스트코드 문서화",
    titleFunc: "Unit, 컴포넌트, E2E 테스트 방법론 사내 문서화",
    newBe:
      "신규 입사자의 프론트엔드 테스트 방법론 및 질의응답 온보딩 교육 진행",
  },
  turborepo: {
    title:
      "30여개의 상용 서비스가 존재하는 모노레포지토리 시스템 개발 및 유지 보수",
    titleFunc:
      "turborepo, pnpm으로 구성된 모노레포지토리 시스템 개발 및 유지 보수",
    server: "k8s 환경 내 remote cache server 개발 및 유지 보수",
    workflow: "github workflow를 활용한 자동화 파이프라인 개발 및 유지 보수",
  },
  reduceWorkflow: {
    title: "CI 파이프라인 성능 47% 개선",
    titleFunc:
      "github workflow의 workflow matrix 및 turborepo dry run과 remote-cache서버를 통해 개선",
    turbo:
      "turborepo dry run을 통해 30여개의 프로젝트 중 새로 빌드를 통한 안정성 테스트가 필요한 항목 확인하며 중복 빌드 회피",
    cache:
      "빌드 진행 후 캐시 서버를 통해 아티팩트 저장 후 불필요한 re-build 방지",
    matrix: "워크플로우 매트릭스를 통해 병렬로 빌드를 진행하며 시간 감소",
  },
  designSystem: {
    title: "socar-frame 2.0 디자인 시스템 설계, 개발 및 운영",
    titleFunc: "네이티브, 프로덕트 디자인팀과 함께 개발 진행",
    design: "토큰화를 통해 디자인 및 개발의 커뮤니케이션 비용 감소",
    structure: "Figma plugin기반 pulling, pushing을 염두에 두고 설계",
    component: "재활용 및 생산성 증대를 위한 Headless 컴포넌트 설계",
    using: "설계 및 컴포넌트, 테스트코드 작성 등 80% 이상 기여",
  },
  commonPackages: {
    title: "frontend-packages",
    titleFunc: "utils, hooks 등 공통 패키지 개발 및 유지 보수",
    testCode: "테스트 코드 작성 및 문서화",
    treeShaking:
      "tree shaking을 통한 번들 크기 최적화 (next bundle analyzer 기반 특정 페이지 utils 60%이상 크기 감소)",
    using: "파이프라인 작성으로 배포 및 테스트 자동화",
  },
};

export const OYSTERABLE = {
  name: "오이스터에이블(Oysterable)",
  tenure: "1년 11개월",
  explanation:
    "지구를 지키는 히어로들의 플랫폼이라는 명목으로 일회용컵, 도시락 반납기 등을 Iot, Sass기술 개념 기반으로 개발하며 환경보호 플랫폼으로 거듭나고 있는 회사입니다.",
  coprEx: "개발팀 프론트엔드 개발자, <strong>프론트엔드 팀 리더</strong>",
  monorepo: {
    title: "사내 관리 서비스 통합 모노레포지토리 시스템 도입",
    dupCodeTitle: "유사 백오피스 서비스 내의 중복 컴포넌트 및 로직 코드 제거",
    dupCodeRemoveLines:
      "공통 UI, 로직 분리를 하여 Git diff 기준 중복코드 65,000 여 줄 제거",
    dupCodeUsingYarn:
      "yarn work space를 통해 각 프로젝트 별 코드 공유 사용 가능하게 변경",
  },
  repeatImprovement: {
    title: "반복 개발 업무 개선",
    script:
      "반복되는 UI의 폴더구조와 컴포넌트 코드를 생성해주는 자동화 스크립트를 작성하여 1,500여줄이 자동 작성이 되도록 DX 개선",
  },
  trApp: {
    title: "오늘의 분리수거 앱 개선",
    speedImprovement: "앱 작동 속도 개선",
    imporvementCache:
      "브라우저 캐시 활용 및 상태관리 개선을 통해 기존 대비 API 호출 횟수 66% 감소",
    lightHouse:
      "Dynamic import 및 렌더링 블락 옵션 개선을 통해 LightHouse점수 퍼포먼스 50점 상승",
    polyfill: "앱 내 웹뷰의 크로스 브라우저 대응을 위해 Polyfill 활용",
  },
  teamLead: {
    title: "프론트엔드팀 리더 [2022/11 ~ 2024/01]",
    dxImprovementTitle: "팀 개발 문화 정착 및 기술 증진",
    usingJira: "팀원 업무 일정 관리 및 분배를 위해 Jira 티켓을 활용",
    codeReview:
      "코드 리뷰문화 도입을 통해 소수 인원 및 주니어로 구성된 팀의 제품 품질 유지",
    codeQuality:
      "github actions와 husky를 활용한 자동 Lint 체크 적용으로 코드 일관성을 강화",
    testSetting:
      "Cypress, testing-library, Jest 환경 세팅 및 코드 작성으로 제품 안정성 증대",
  },
};

export const DTIME = {
  name: "디타임(Dtime)",
  tenure: "10개월",
  explanation:
    "디타임은 기업이 겪는 조직에 관한 다양한 어려움을 해결하는것을 목표로 교보생명의 엑셀러레이팅 프로그램에 선발된 스타트업입니다.",
  coprEx: "개발팀 프론트엔드 개발자",
  calculate: {
    title: "인싸이트 지원금 계산기",
    coworkTitle: "협력업체에 자사 서비스 제공",
    webpack:
      "커스텀엘리먼트 및 웹팩을 활용한 하나의 번들된 JavaScript 파일을 협력업체에 제공",
  },
  serviceMaintenance: {
    title: "인싸이트 유지 보수 및 개발",
    codeQuality: "코드 품질 개선",
    ReduxSaga:
      "Redux-Saga, Redux-Toolkit을 활용한 Flux패턴의 적용으로 상태관리 패턴 변경",
    QA: "30여가지 경우의 수를 가진 휴가생성 케이스에 대해 UI/UX 및 테스트 코드으로 5-10분의 QA 소모 시간 제거",
  },
  serviceAngular: {
    title: "UI/UX 유지보수",
    contents:
      "앵귤러로 되어있던 메인페이지들의 디자인개선 작업과 동시에 리액트로 전환",
  },
};

export const BRANDI = {
  tenure: "2개월",
  name: "브랜디(BRANDI)",
  coprEx: "프론트엔드 개발 인턴",
  explanation:
    "빅데이터를 활용한 새벽배송 서비스를 제공하는 쇼핑 플랫폼 브랜디에서 프론트엔드 개발 인턴으로 참여하였습니다.",
  clone: {
    title: "클론 프로젝트 진행",
    uiux: "UI/UX 개발",
    vue: "Vue.js 기반으로 기존 쇼핑몰 사이트 클론 개발 진행",
    caroucel: "캐러셀, GNB, 제품리스트 렌더 등 다양한 UI/UX를 개발",
  },
};

export default {
  SOCAR,
  OYSTERABLE,
  DTIME,
  BRANDI,
};
