import TRANSLATION_MAP from '../../../languages/index.js';

const EXPERIENCES = TRANSLATION_MAP.RESUME.EXPERIENCES;

const { SOCAR, OYSTERABLE, DTIME, BRANDI } = EXPERIENCES;

export const EXPERIENCE = [
  {
    period: '2024.01 ~ ',
    tenure: SOCAR.tenure,
    corporation: SOCAR.name,
    explanation: SOCAR.explanation,
    coprEx: SOCAR.coprEx,
    list: [
      {
        title: SOCAR.raffleBackoffice.title,
        deployLink: '',
        detailList: [
          {
            target: SOCAR.raffleBackoffice.titleFunc,
            actions: [
              SOCAR.raffleBackoffice.dupCodeRemoveLines,
            ],
          },
        ],
      },
      {
        title: SOCAR.documentation.title,
        deployLink: '',
        detailList: [
          {
            target: SOCAR.documentation.titleFunc,
            actions: [
              SOCAR.documentation.newBe,
            ],
          },
        ],
      },
      {
        title: SOCAR.reduceWorkflow.title,
        deployLink: '',
        detailList: [
          {
            target: SOCAR.reduceWorkflow.titleFunc,
            actions: [
              SOCAR.reduceWorkflow.matrix,
              SOCAR.reduceWorkflow.cache,
              SOCAR.reduceWorkflow.turbo,
            ],
          },
        ],
      },
      {
        title: SOCAR.designSystem.title,
        deployLink: '',
        detailList: [
          {
            target: SOCAR.designSystem.titleFunc,
            actions: [
              SOCAR.designSystem.structure,
              SOCAR.designSystem.design,
              SOCAR.designSystem.component,
            ],
          },
        ],
      }
    ],
    skill: ['React.js', 'Next.js', 'Typescript', 'k9s', "ArgoCD", "Docker"],
  },
  {
    period: '2022.02 ~ 2024.01 ',
    tenure: OYSTERABLE.tenure,
    corporation: OYSTERABLE.name,
    explanation: OYSTERABLE.explanation,
    coprEx: OYSTERABLE.coprEx,
    list: [
      {
        title: OYSTERABLE.monorepo.title,
        deployLink: '',
        detailList: [
          {
            target: OYSTERABLE.monorepo.dupCodeTitle,
            actions: [
              OYSTERABLE.monorepo.dupCodeRemoveLines,
              OYSTERABLE.monorepo.dupCodeUsingYarn,
            ],
          },
          {
            target: OYSTERABLE.repeatImprovement.title,
            deployLink:
              'https://www.cloud-sanghun.com/content?id=2023-07-25-Node-folders&type=post-dev',
            actions: [OYSTERABLE.repeatImprovement.script],
          },
        ],
      },
      {
        title: OYSTERABLE.trApp.title,
        deployLink: '',
        githubLink: '',
        detailList: [
          {
            target: OYSTERABLE.trApp.speedImprovement,
            actions: [
              OYSTERABLE.trApp.imporvementCache,
              OYSTERABLE.trApp.lightHouse,
              OYSTERABLE.trApp.polyfill,
            ],
          },
        ],
      },
      {
        title: OYSTERABLE.teamLead.title,
        detailList: [
          {
            target: OYSTERABLE.teamLead.dxImprovementTitle,
            actions: [
              OYSTERABLE.teamLead.usingJira,
              OYSTERABLE.teamLead.codeReview,
              OYSTERABLE.teamLead.codeQuality,
              OYSTERABLE.teamLead.testSetting,
            ],
          },
        ],
      },
    ],
    skill: [
      'React.js',
      'Next.js',
      'PWA',
      'Cypress',
      'Jest',
      'React-Query',
      'Redux-toolkit',
      'Typescript',
    ],
  },
  {
    period: '2021.04 ~ 2022.01',
    tenure: DTIME.tenure,
    corporation: DTIME.name,
    coprEx: DTIME.coprEx,
    explanation: DTIME.explanation,
    list: [
      {
        title: DTIME.calculate.title,
        detailList: [
          {
            target: DTIME.calculate.coworkTitle,
            actions: [DTIME.calculate.webpack],
          },
        ],
      },

      {
        title: DTIME.serviceMaintenance.title,
        link: '',
        detailList: [
          {
            target: DTIME.serviceMaintenance.codeQuality,
            actions: [
              DTIME.serviceMaintenance.ReduxSaga,
              DTIME.serviceMaintenance.QA,
            ],
          },
          {
            target: DTIME.serviceAngular.title,
            actions: [DTIME.serviceAngular.contents],
          },
        ],
      },
    ],
    skill: [
      'React.js',
      'Redux-toolkit',
      'Redux-Saga',
      'Cypress',
      'Jest',
      'msw',
      'Typescript',
    ],
  },
  {
    period: '2020.09 ~ 2020.10',
    tenure: BRANDI.tenure,
    corporation: BRANDI.name,
    coprEx: BRANDI.coprEx,
    explanation: BRANDI.explanation,
    list: [
      {
        title: BRANDI.clone.title,
        detailList: [
          {
            target: BRANDI.clone.uiux,
            actions: [BRANDI.clone.vue, BRANDI.clone.caroucel],
          },
        ],
      },
    ],
    skill: ['Vue.js 2.xx', 'Vuex'],
  },
];
