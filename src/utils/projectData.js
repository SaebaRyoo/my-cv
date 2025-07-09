import { useTranslations } from "next-intl";

export function useProjectData() {
  const t = useTranslations("ProjectSection");

  return [
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
      title: t("projects.FameEX.title"),
      description: t("projects.FameEX.description"),
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
      title: t("projects.Soca.title"),
      description: t("projects.Soca.description"),
      projectType: "React",
      technologies: ["React", "Ant-Design", "Java"],
      link: "https://socaapp.com/landing",
      github: "",
    },
    {
      id: "eleme-loan",
      image: "/imgs/ele/1.jpeg",
      images: ["/imgs/ele/1.jpeg", "/imgs/ele/2.jpeg", "/imgs/ele/3.jpeg"],
      title: t("projects.eleme-loan.title"),
      description: t("projects.eleme-loan.description"),
      projectType: "React",
      technologies: ["React.js", "Ant-Mobile", "Spring Boot", "MySQL"],
      link: "",
      github: "",
      noLinksText: t("projects.eleme-loan.noLinksText"),
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
      title: t("projects.ibuy.title"),
      description: t("projects.ibuy.description"),
      projectType: "Nest.js",
      technologies: ["Nest.js", "Next,js", "Postgres", "Redis"],
      link: "https://ibuy.xin/",
      github: "https://github.com/SaebaRyoo/ibuy-portal-backend",
    },
  ];
}

export function useProjectTypes() {
  const t = useTranslations("ProjectSection");
  const projectData = useProjectData();

  return ["All"].concat([
    ...new Set(projectData.map((project) => project.projectType)),
  ]);
}
