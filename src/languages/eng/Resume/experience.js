export const SOCAR = {
  name: 'SOCAR',
  tenure: 'Currently Employed',
  explanation:
    'A company striving to create a world where everyone can move freely and happily.',
  coprEx: 'Frontend Developer, Marketing Engineering Team -> FE CORE Team',
  documentation: {
    title: "Documentation on Testing Code",
    titleFunc: "Internal documentation on Unit, Component, and E2E testing methodologies",
    newBe: "Conducted onboarding training for new hires on frontend testing methodologies and Q&A sessions"
  },
  turborepo: {
    title: "Monorepository system that has about 30 projects develop and maintain",
    titleFunc: "Develop and maintain monorepository system with turborepo and pnpm",
    server: "Develop and maintain remote cache server based on k8s environment",
    workflow: "Develop and Maintain various pipeline made with github workflow",
  },
  reduceWorkflow: {
    title: "Improving CI Pipeline capability up to 47%",
    titleFunc: "Applying workflow matrix and turborepo dry run with remote cache server",
    turbo: "Avoiding duplicate build by identifying stability build test with turborepo run dry feature",
    cache: "Uploading newly made artifact to remote cache server for avoiding useless re-build",
    matrix: "Reducing building time by Making Paralle build with workflow matrix",
  },
  designSystem: {
    title: "System design, operate, develop socar-frame 2.0 design system",
    titleFunc: "Carrying out develop with Native and Product design team as a member of FE CORE team",
    design: "Synchronize design language and development language as much as possible with meaningful tokens",
    structure: "Designed with Pulling and Pushing systems in mind",
    component: "Designed as a headless component to maximize reuse"
  }
};

export const OYSTERABLE = {
  name: 'Oysterable',
  tenure: '1year 11 months',
  explanation:
    'In the name of being a platform for heroes who protect the Earth, the company is developing disposable cups, lunch box returners and ETC. Based on IoT and Sass technology concepts and is being reborn as an environmental protection platform.',
  coprEx:
    'Development team front-end developer, <strong>Front-end team leader</strong>',
  monorepo: {
    title:
      'Introduction monorepository system for in-house management service integration',
    dupCodeTitle:
      'Elimination of duplicate components and code within similar back-office services',
    dupCodeRemoveLines:
      'Removed over 65,000 lines of duplicate code based on Git diff by separating common UI and logic',
    dupCodeUsingYarn:
      'Enable code sharing for each project through yarn work space',
  },
  repeatImprovement: {
    title: 'Improved repetitive development work',
    script:
      'Improved DX so that approximately 1,500 lines can be automatically written by creating an automation script that generates the folder structure and component code of the repetitive UI.',
  },
  trApp: {
    title: 'Today’s recycling app improvement',
    speedImprovement: 'Improve app operation speed',
    imporvementCache:
      'Reduced number of API calls by 66% compared to before through improved browser cache utilization and state management',
    lightHouse:
      'LightHouse score performance increased by 50 points through improved dynamic import and rendering block options.',
    polyfill:
      'Use Polyfill for cross-browser response of webview within the app',
  },
  teamLead: {
    title: 'Front-end team leader [2022/11 ~ 2024/01]',
    dxImprovementTitle:
      'Establishing a team development culture and promoting skills',
    usingJira:
      'Use Jira Tickets to manage and distribute team member work schedules',
    codeReview:
      'Maintain product quality in teams composed of small numbers of people and juniors by implementing a code review',
    codeQuality:
      'Enhance code consistency by applying automatic lint check using github actions and husky',
    testSetting:
      'Increase product stability by setting Cypress, testing-library, and Jest environments and writing code',
  },
};

export const DTIME = {
  name: 'Dtime',
  tenure: '10 months',
  explanation:
    "DTIME is a startup selected for Kyobo Life Insurance's accelerator program with the goal of solving various organizational difficulties faced by companies.",
  coprEx: 'Development team front-end developer',
  calculate: {
    title: 'Insight Support Fund Calculator',
    coworkTitle: 'Provide our services to partner companies',
    webpack:
      'Provide a bundled JavaScript file using custom elements and webpack to partner companies',
  },
  serviceMaintenance: {
    title: 'Insight Maintenance and Development',
    codeQuality: 'Improvement of code quality',
    ReduxSaga:
      'Application of Flux pattern using Redux-Saga and Redux-Toolkit for state management',
    QA: 'Elimination of 5-10 minutes of QA time for vacation creation cases with 30 different scenarios through UI/UX and test code',
  },
  serviceAngular: {
    title: 'UI/UX Maintenance',
    contents:
      'Design improvement of main pages originally built with Angular, simultaneously transitioning to React',
  },
};

export const BRANDI = {
  tenure: '2 months',
  name: 'BRANDI',
  coprEx: 'Front-end Development Intern',
  explanation:
    'I participated as a front-end development intern at BRANDI, a shopping platform that provides dawn delivery services utilizing big data.',
  clone: {
    title: 'Clone Project',
    uiux: 'UI/UX development',
    vue: 'Development of a clone site based on Vue.js for an existing shopping mall',
    caroucel:
      'Development of various UI/UX components such as carousel, GNB, and product list rendering',
  },
};

export default {
  SOCAR,
  OYSTERABLE,
  DTIME,
  BRANDI,
};
