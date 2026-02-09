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
      "UI와 비즈니스 로직을 분리한 Headless 컴포넌트 패턴을 적용해 변경과 확장에 유연한 구조 구축",
    structure:
      "Figma 기반 디자인–코드 연계를 고려한 구조 설계 및 코드커넥트와 LLM활용을 통해 생산성 증대",
  },
  turborepo: {
    title: "프런트엔드 공통 플랫폼 설계 및 개발 생산성 개선",
    titleFunc:
      "30여 개 상용 프런트엔드 서비스가 공존하는 환경에서, 공통 빌드·배포·패키지 기준을 제공하는 프런트엔드 플랫폼을 설계·운영",
    server:
      "turborepo, pnpm 기반 모노레포 환경에서 각 PR마다 반복되던 빌드 병목을 개별 설정 문제가 아닌 공통 플랫폼 구조의 한계로 정의하고 CI 파이프라인을 재설계",
    workflow:
      "Kubernetes 환경에 Remote Cache Server를 직접 구성하고, GitHub Actions Workflow Matrix 및 turborepo dry-run을 활용해 변경된 패키지만 선별적으로 빌드·검증",
    result:
      "CI 파이프라인 평균 수행 시간을 약 47% 단축하여 다수 팀의 배포 리드타임 감소에 기여",
  },
  commonPackages: {
    title: "프런트엔드 공통 패키지 개선",
    titleFunc:
      "여러 서비스에서 반복적으로 사용되던 공통 패키지(utils, hooks) 개선 및 운영",
    testCode: "테스트 코드 및 문서화를 통해 재사용성과 안정성을 확보",
    using: "공통 패키지의 배포·테스트 자동화를 구축하여 유지보수 비용 감소",
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
