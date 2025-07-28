import TRANSLATION_MAP from "../../../languages/index.js";

const PROJECTS = TRANSLATION_MAP.RESUME.PROJECTS;

const { VANILLA_BLOG: VANILA, THE_FOLKS: FOLKS, IRON_MATE: IRON } = PROJECTS;

const VANILA_BLOG = {
  period: "2022.07 ~ ",
  title: VANILA.title,
  company: VANILA.company,
  explanation: VANILA.explanation,
  skill: ["ES5/6", "HTML5", "CSS3", "Express.js", "Nginx", "EC2", "Route53"],
  deployLink: "https://blog.cloud-sanghun.com/",
  githubLink: "https://github.com/sanghunlee-711/Cloud-Vanilla-Blog",
  list: [
    {
      title: VANILA.client.title,
      deployLink: "",
      githubLink: "",
      detailList: [
        {
          target: VANILA.client.customComponent.title,
          actions: [
            VANILA.client.customComponent.reuse,
            VANILA.client.customComponent.stateManagement,
          ],
        },
        {
          target: VANILA.client.routing.title,
          actions: [VANILA.client.routing.historyAPI],
        },
      ],
    },
    {
      title: VANILA.server.title,
      deployLink: "",
      githubLink: "",
      detailList: [
        {
          target: VANILA.server.markdown.title,
          actions: [
            VANILA.server.markdown.express,
            VANILA.server.markdown.highlight,
            VANILA.server.markdown.nginx,
          ],
        },
      ],
    },
    {
      title: VANILA.bundling.title,
      deployLink: "",
      githubLink: "",
      detailList: [
        {
          target: VANILA.bundling.clientBuild,
          actions: [VANILA.bundling.webpack],
        },
      ],
    },
  ],
};

const THE_FOLKS = {
  period: "2021.05 ~ 2021.12",
  title: FOLKS.title,
  company: FOLKS.company,
  explanation: FOLKS.explanation,
  deployLink: "https://www.the-folks.com",
  skill: [
    "Next.js",
    "Nest.js",
    "GraphQL",
    "ApolloClient",
    "Postgresql",
    "EC2",
    "S3",
    "Route53",
  ],
  list: [
    {
      title: FOLKS.client.title,
      deployLink: "",
      githubLink: "https://github.com/stylefolks/stylefolks-frontend",
      detailList: [
        {
          target: FOLKS.client.dupCode.title,
          actions: [FOLKS.client.dupCode.apolloClient],
        },
        {
          target: FOLKS.client.contentsPage.title,
          actions: [
            FOLKS.client.contentsPage.apolloCache,
            FOLKS.client.contentsPage.editor,
          ],
        },
      ],
    },
    {
      title: FOLKS.server.title,
      deployLink: "",
      githubLink: "https://github.com/stylefolks/stylefolks-frontend",
      detailList: [
        {
          target: FOLKS.server.following.title,
          actions: [FOLKS.server.following.userType],
        },
        {
          target: FOLKS.server.crew.title,
          actions: [FOLKS.server.crew.gradeTable],
        },
        {
          target: FOLKS.server.posts.title,
          actions: [
            FOLKS.server.posts.crud,
            FOLKS.server.posts.jwt,
            FOLKS.server.posts.s3,
            FOLKS.server.posts.categories,
          ],
        },
      ],
    },
  ],
};

const IRON_MATE = {
  period: "2023.08 ~ ",
  title: IRON.title,
  company: IRON.company,
  explanation: IRON.explanation,
  deployLink: "https://www.iron-mate.com",
  skill: ["Next.js", "Vercel", "Tailwind", "Route53"],
  list: [
    {
      title: IRON.client.title,
      deployLink: "",
      githubLink: "https://github.com/sanghunlee-711/iron-mate",
      detailList: [
        {
          target: IRON.client.dataManage.title,
          actions: [
            IRON.client.dataManage.tableUI,
            IRON.client.dataManage.excelSave,
            IRON.client.dataManage.timer,
          ],
        },
      ],
    },
  ],
};

export const PROJECT = [IRON_MATE, VANILA_BLOG, THE_FOLKS];
