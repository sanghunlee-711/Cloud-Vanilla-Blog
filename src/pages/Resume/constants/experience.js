import TRANSLATION_MAP from "../../../languages/index.js";

const EXPERIENCES = TRANSLATION_MAP.RESUME.EXPERIENCES;

const { SOCAR, OYSTERABLE, DTIME, BRANDI } = EXPERIENCES;

export const EXPERIENCE = [
  {
    period: "2024.01 ~ ",
    tenure: SOCAR.tenure,
    corporation: SOCAR.name,
    explanation: SOCAR.explanation,
    coprEx: SOCAR.coprEx,
    list: [
      {
        title: SOCAR.designSystem.title,
        deployLink: "https://socarframe.socar.kr/",
        detailList: [
          {
            target: SOCAR.designSystem.titleFunc,
            actions: [SOCAR.designSystem.structure, SOCAR.designSystem.design],
          },
        ],
      },
      {
        title: SOCAR.turborepo.title,
        deployLink:
          "https://tech.socarcorp.kr/fe/2025/06/10/monorepo-ci-cd-pipeline.html",
        detailList: [
          {
            target: SOCAR.turborepo.titleFunc,
            actions: [
              SOCAR.turborepo.server,
              SOCAR.turborepo.workflow,
              SOCAR.turborepo.result,
            ],
          },
        ],
      },
      {
        title: SOCAR.commonPackages.title,
        deployLink: "",
        detailList: [
          {
            target: SOCAR.commonPackages.titleFunc,
            actions: [
              SOCAR.commonPackages.testCode,
              SOCAR.commonPackages.using,
            ],
          },
        ],
      },

      // {
      //   title: SOCAR.documentation.title,
      //   deployLink: "",
      //   detailList: [
      //     {
      //       target: SOCAR.documentation.titleFunc,
      //       actions: [SOCAR.documentation.docs, SOCAR.documentation.newBe],
      //     },
      //   ],
      // },
    ],
    skill: [
      "React.js",
      "Next.js",
      "Typescript",
      "k8s",
      "ArgoCD",
      "Docker",
      "Github workflow",
    ],
  },
  {
    period: "2022.02 ~ 2024.01 ",
    tenure: OYSTERABLE.tenure,
    corporation: OYSTERABLE.name,
    explanation: OYSTERABLE.explanation,
    coprEx: OYSTERABLE.coprEx,
    list: [
      {
        title: OYSTERABLE.monorepo.title,
        deployLink: "",
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
              "https://www.cloud-sanghun.com/content?id=2023-07-25-Node-folders&type=post-dev",
            actions: [OYSTERABLE.repeatImprovement.script],
          },
        ],
      },
      {
        title: OYSTERABLE.trApp.title,
        deployLink: "",
        githubLink: "",
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
      "React.js",
      "Next.js",
      "PWA",
      "Cypress",
      "Jest",
      "React-Query",
      "Redux-toolkit",
      "Typescript",
    ],
  },
  {
    period: "2021.04 ~ 2022.01",
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
        link: "",
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
      "React.js",
      "Redux-toolkit",
      "Redux-Saga",
      "Cypress",
      "Jest",
      "msw",
      "Typescript",
    ],
  },
  {
    period: "2020.09 ~ 2020.10",
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
    skill: ["Vue.js 2.xx", "Vuex"],
  },
];
