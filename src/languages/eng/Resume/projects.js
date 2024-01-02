const VANILLA_BLOG = {
  period: "2022.07 ~ ",
  title: "Creating a Personal Blog with VanillaJS",
  company: "Personal Project",
  explanation: "Developed with a self-made framework using Vanilla JavaScript",
  client: {
    title: "Client Development",
    customComponent: {
      title: "Development Based on Custom Components",
      reuse: "Developed using the class of Vanila JS for increased reusability",
      stateManagement:
        "Maintained consistent component structure through state-based rendering",
    },
    routing: {
      title: "Custom Routing System",
      historyAPI:
        "Created a custom router class using History API, applying a CSR-like routing system",
    },
  },
  server: {
    title: "Server Development",
    markdown: {
      title: "API Server Development for Transmitting Markdown Files",
      express:
        "Developed an API server using Express.js to fetch Markdown files",
      highlight: "Converted Markdown to HTML using the highlight.js library",
      nginx:
        "Utilized Nginx port forwarding to operate with a single EC2, reducing operational costs",
    },
  },
  bundling: {
    title: "Bundling System",
    clientBuild: "Client Build System",
    webpack:
      "Implemented a local development server and production build system using Webpack with minimal plugins",
  },
};

const THE_FOLKS = {
  title: "The Folks",
  company: "Personal Project",
  explanation:
    "A project aiming for a new form of fashion community, managed from planning, design to implementation for providing an organic fashion community service.",
  client: {
    title: "Client Development",
    dupCode: {
      title: "Resolution of Duplicate Code Issues",
      apolloClient:
        "Resolved duplicate type specification issues by utilizing Apollo client's Codegen for receiving API interfaces from the server",
    },
    contentsPage: {
      title: "Post Creation Page",
      apolloCache:
        "Directly mutated Apollo cache for quick creation and removal of comments without additional reloads",
      editor:
        "Introduced and customized ToastUI's Editor for various forms of post writing, adding features such as registering a representative photo",
    },
  },
  server: {
    title: "Server Development",
    following: {
      title: "User-to-User Follow/Following Feature",
      userType:
        "Provided mutual following functionality based on various user types such as crew, user, brand",
    },
    crew: {
      title: "Crew Creation Feature",
      gradeTable:
        "Implemented the ability to create crews with special grades by having a separate grade table",
    },
    posts: {
      title: "Other Features - Posts and Comments",
      crud: "CRUD operations for posts and comments",
      jwt: "Implemented JWT-based authentication system",
      s3: "Image storage feature using S3",
      categories: "Provided various categories and displayed posts by category",
    },
  },
};

const IRON_MATE = {
  period: "2023.08 ~ ",
  title: "Iron Mate",
  company: "Personal Project",
  explanation:
    "A record note for personal use when doing weight training. It has monthly and daily summary functions. Utilizes web storage for saving.",
  client: {
    title: "Client Development",
    dataManage: {
      title: "Data Management",
      excelSave:
        "Saves and returns data entered in the table card UI as an Excel file",
      tableUI:
        "Provides a table card UI when saving a suitable form of Excel, allowing CRUD operations on the data",
      timer: "Provides an exercise time measurement timer",
    },
  },
};

export default {
  IRON_MATE,
  VANILLA_BLOG,
  THE_FOLKS,
};
