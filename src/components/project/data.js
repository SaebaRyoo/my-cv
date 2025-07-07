export const projectData = [
  {
    id: "FameEX",
    image: "/imgs/fameex/1.png",
    images: [
      "/imgs/fameex/1.png",
      "/imgs/fameex/2.png",
      "/imgs/fameex/3.png",
      "/imgs/fameex/4.png",
      "/imgs/fameex/5.png",
    ],
    title: "FameEX-交易平台",
    description:
      "FameEX-交易平台，基于Next.js和Go开发的加密货币交易平台。提供了多种热门加密货币交易，比如BTC、ETH、USDT等。",
    projectType: "React",
    technologies: ["Next.js", "Go", "PostgreSQL"],
    link: "https://www.fameex.com",
    github: "",
  },
  {
    id: "Soca",
    image: "/imgs/soca/1.png",
    images: [
      "/imgs/soca/1.png",
      "/imgs/soca/2.png",
      "/imgs/soca/3.png",
      "/imgs/soca/4.png",
      "/imgs/soca/5.png",
    ],
    title: "Soca-AI求职平台",
    description:
      "Soca是一个基于React.js和Java开发的AI求职平台，它能帮助你修改简历，并通过扫描网络以寻找更适合你的工作。",
    projectType: "React",
    technologies: ["React", "Ant-Design", "Java"],
    link: "https://socaapp.com/landing",
    github: "",
  },
  {
    id: "eleme-loan",
    image: "/imgs/ele/1.jpeg",
    images: ["/imgs/ele/1.jpeg", "/imgs/ele/2.jpeg", "/imgs/ele/3.jpeg"],
    title: "饿了么-借贷平台",
    description:
      "饿了么-借贷平台，基于React.js和Java开发的移动端h5页面，实现了借贷平台的所有功能，包括身份认证、借贷申请、借贷审核、借贷还款等。",
    projectType: "React",
    technologies: ["React.js", "Ant-Mobile", "Spring Boot", "MySQL"],
    link: "",
    github: "",
    noLinksText:
      "如想查看该项目，可通过移动端《饿了么》APP —— 我的 —— 我的钱包 —— 借钱 来查看详情",
  },
  {
    id: "ibuy",
    image: "/imgs/ibuy/1.png",
    images: [
      "/imgs/ibuy/1.png",
      "/imgs/ibuy/2.png",
      "/imgs/ibuy/3.png",
      "/imgs/ibuy/4.png",
    ],
    title: "ibuy购物商城-个人项目",
    description:
      "该项目是一个全栈电商项目，采用前后端分离的模式。前端基于Nextjs，后端基于Nestjs。目前已完成大部分主流程，支持商品展示、搜索、下单、支付、商品管理等功能",
    projectType: "Nest.js",
    technologies: ["Nest.js", "Next,js", "Postgres", "Redis"],
    link: "https://ibuy.xin/",
    github: "https://github.com/SaebaRyoo/ibuy-portal-backend",
  },
];

export const projectTypes = ["All"].concat([
  ...new Set(projectData.map((project) => project.projectType)),
]);
