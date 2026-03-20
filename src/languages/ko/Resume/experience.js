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
    title: "테스트 문화 및 품질 기준 정착",
    titleFunc: "프런트엔드 테스트 품질 기준을 팀 단위로 정리하고 문화로 정착",
    docs: "Unit / E2E 테스트 전략을 정리하여 사내 프런트엔드 테스트 방법론 문서화",
    newBe:
      "신규 입사자를 대상으로 온보딩 및 질의응답 세션을 진행하며 팀 단위 품질 기준 정착에 기여",
  },
  designSystem: {
    title: "socar-frame 2.0 디자인 시스템 설계, 개발 및 운영",
    titleFunc:
      "네이티브 및 프로덕트 디자인팀과 협업하여 플랫폼 단위 UI 기준을 제공하는 디자인 시스템(socar-frame 2.0)을 설계·운영",
    design:
      "UI/비즈니스 로직 결합으로 컴포넌트 확장이 어려운 문제를 Headless 패턴으로 해결해 구조 유연성을 높이고, 번들 사이즈(static/chunk) 61%를 감소",
    structure:
      "Figma 기반 디자인-코드 연계 구조를 설계하고 코드커넥트·LLM 활용 워크플로를 도입해 구현/검수 생산성을 향상",
    accessibility:
      "반응형·접근성(A11y)·웹 표준 준수 UI를 개발하고, ARIA/키보드 내비게이션/Resize 대응 설계",
  },
  turborepo: {
    title: "프런트엔드 공통 플랫폼 설계 및 개발 생산성 개선",
    titleFunc:
      "30여 개 상용 프런트엔드 서비스가 공존하는 환경에서, 공통 빌드·배포·패키지 기준을 제공하는 프런트엔드 플랫폼을 설계·운영",
    server:
      "turborepo, pnpm 기반 모노레포에서 PR 검증 지연의 원인을 개별 설정이 아닌 공통 플랫폼 병목으로 정의하고 CI 파이프라인을 재설계",
    workflow:
      "Kubernetes 환경에 Remote Cache Server를 구성하고 GitHub Actions Workflow Matrix + turborepo dry-run으로 변경 패키지만 선별 빌드·검증",
    result:
      "CI 파이프라인 평균 수행 시간을 약 47% 단축해 다수 팀의 배포 리드타임과 피드백 사이클을 개선",
  },
  commonPackages: {
    title: "프런트엔드 공통 패키지 개선",
    titleFunc:
      "여러 서비스에서 반복적으로 사용되던 공통 패키지(utils, hooks) 개선 및 운영",
    testCode: "테스트 코드 및 문서화를 통해 재사용성과 안정성을 확보",
    using: "공통 패키지의 배포·테스트 자동화를 구축하여 유지보수 비용 감소",
  },
  raffleBackoffice: {
    title: "래플 서비스 백오피스용 경량 CMS 개발",
    titleFunc:
      "운영팀의 반복 업무를 줄이기 위한 래플 운영용 백오피스 CMS를 빠르게 설계·개발",
    delivery:
      "백오피스는 폼 편집을 담당하고, 프리뷰 페이지는 <object> 임베딩으로 분리 운영",
    impact:
      "실서비스는 API, 미리보기는 previewdata 쿼리 기반으로 분리해 빠른 검수/운영 흐름을 구축",
  },
  couponWebview: {
    title: "내 쿠폰 페이지 인앱 웹뷰 개발",
    titleFunc:
      "웹브릿지 연동 및 iOS/Android 플랫폼 차이를 고려한 쿠폰 페이지 웹뷰를 개발·운영",
    bridge:
      "앱-웹 이벤트와 상태 전달 규격을 표준화해 플랫폼별 동작 차이로 인한 예외를 줄이고 기능 확장/유지보수 효율을 개선",
    ux:
      "외부 딥링크 진입 시 특정 쿠폰 스크롤 및 상세 BottomSheet 노출을 구현해 진입 맥락 기반 UX를 제공",
  },
  bundlingProject: {
    title: "번들링(숙소+차량 동시 예약) 프로젝트",
    titleFunc:
      "초기 기획 단계부터 참여해 기존 View 컴포넌트 조합 기반의 구현 전략을 제안",
    package:
      "내부 모노레포에 중간 View Package를 추가해 여러 화면에서 재사용 가능한 합성 레이어를 구축",
    result:
      "재사용성 및 개발 속도를 높였고, 3차 QA 단계까지 검증 후 사업 우선순위 변경으로 프로젝트가 중단",
  },
};

export const OYSTERABLE = {
  name: "오이스터에이블(Oysterable)",
  tenure: "1년 11개월",
  explanation:
    "일회용컵·도시락 반납기 등 IoT/SaaS 기반의 친환경 서비스를 운영하는 플랫폼입니다.",
  coprEx: "개발팀 프론트엔드 개발자, <strong>프론트엔드 팀 리더</strong>",
  monorepo: {
    title: "사내 관리 서비스 통합 모노레포지토리 시스템 도입",
    dupCodeTitle: "유사 백오피스 서비스 내의 중복 컴포넌트 및 로직 코드 제거",
    dupCodeRemoveLines:
      "유사 서비스 간 중복 UI/로직 문제를 공통 모듈 분리로 해결해 Git diff 기준 약 65,000줄의 중복 코드를 제거",
    dupCodeUsingYarn:
      "yarn workspace 체계로 프로젝트 간 코드 공유 구조를 표준화해 유지보수 비용을 낮춤",
  },
  repeatImprovement: {
    title: "반복 개발 업무 개선",
    script:
      "반복 UI의 폴더/컴포넌트 보일러플레이트 생성을 자동화해 약 1,500줄 수작업을 대체하고 DX를 개선",
  },
  trApp: {
    title: "오늘의 분리수거 앱 개선",
    speedImprovement: "앱 작동 속도 개선",
    imporvementCache:
      "과도한 네트워크 호출 문제를 캐시 전략·상태관리 개선으로 해결해 API 호출 횟수를 66% 감소",
    lightHouse:
      "Dynamic import와 렌더링 블로킹 개선으로 Lighthouse 성능 점수를 50점 향상",
    polyfill: "앱 내 웹뷰의 크로스 브라우저 대응을 위해 Polyfill 활용",
  },
  teamLead: {
    title: "프론트엔드팀 리더 [2022/11 ~ 2024/01]",
    dxImprovementTitle: "팀 개발 문화 정착 및 기술 증진",
    usingJira: "팀원 업무 일정 관리 및 분배를 위해 Jira 티켓을 활용",
    codeReview:
      "코드 리뷰 프로세스를 정착시켜 소수/주니어 중심 팀에서도 품질 기준을 일관되게 유지",
    codeQuality:
      "GitHub Actions + Husky 기반 자동 lint 검증을 도입해 코드 일관성과 배포 안정성을 강화",
    testSetting:
      "Cypress·testing-library·Jest 테스트 체계를 구축해 회귀 이슈를 사전에 탐지하는 기반을 마련",
  },
};

export const DTIME = {
  name: "디타임(Dtime)",
  tenure: "10개월",
  explanation:
    "조직 운영 문제 해결을 목표로 한 HR 도메인 스타트업(교보생명 엑셀러레이팅 선발)입니다.",
  coprEx: "개발팀 프론트엔드 개발자",
  calculate: {
    title: "인싸이트 지원금 계산기",
    coworkTitle: "협력업체에 자사 서비스 제공",
    webpack:
      "협력사 도입 편의성을 위해 커스텀 엘리먼트 + Webpack 단일 번들 형태로 제공해 설치/배포 복잡도를 낮춤",
  },
  serviceMaintenance: {
    title: "인싸이트 유지 보수 및 개발",
    codeQuality: "코드 품질 개선",
    ReduxSaga:
      "상태 복잡도 증가 문제를 Redux-Saga/Redux-Toolkit 기반 Flux 패턴으로 재정의해 예측 가능한 상태 흐름을 구축",
    QA: "휴가 생성 30여 케이스를 UI/UX 개선과 테스트 코드로 표준화해 건당 5~10분의 수동 QA 소요를 절감",
  },
  serviceAngular: {
    title: "UI/UX 유지보수",
    contents:
      "Angular 기반 메인 페이지의 디자인 개선과 React 전환을 병행해 유지보수성과 개발 속도를 개선",
  },
};

export const BRANDI = {
  tenure: "2개월",
  name: "브랜디(BRANDI)",
  coprEx: "프론트엔드 개발 인턴",
  explanation:
    "빅데이터 기반 이커머스 플랫폼 브랜디에서 프론트엔드 인턴으로 참여했습니다.",
  clone: {
    title: "클론 프로젝트 진행",
    uiux: "UI/UX 개발",
    vue: "Vue.js 기반 쇼핑몰 클론을 구현하며 컴포넌트 단위 개발·상태 연동 기초를 확보",
    caroucel: "캐러셀/GNB/상품 리스트 등 핵심 UI를 구현해 화면 단위 완성도를 높임",
  },
};

export default {
  SOCAR,
  OYSTERABLE,
  DTIME,
  BRANDI,
};
