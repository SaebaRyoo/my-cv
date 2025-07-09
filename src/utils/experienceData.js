import { useTranslations } from "next-intl";

export function useExperienceData() {
  const t = useTranslations("ExperienceSection");

  return [
    {
      id: 1,
      position: t("experiences.remote.position"),
      company: t("experiences.remote.company"),
      location: t("experiences.remote.location"),
      website: "",
      duration: t("experiences.remote.duration"),
      logo: "",
      description: t("experiences.remote.description"),
      technologies: [
        "Next.js",
        "Tailwind",
        "React testing library",
        "TypeScript",
        "Express",
        "Nest.js",
        "PostgreSQL",
      ],
    },
    {
      id: 2,
      position: t("experiences.farben.position"),
      company: t("experiences.farben.company"),
      location: t("experiences.farben.location"),
      website: "",
      duration: t("experiences.farben.duration"),
      logo: "",
      description: t("experiences.farben.description"),
      technologies: [
        "React.js",
        "Tailwind",
        "TypeScript",
        "Zustand",
        "Node.js",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      id: 3,
      position: t("experiences.beyondsoft.position"),
      company: t("experiences.beyondsoft.company"),
      location: t("experiences.beyondsoft.location"),
      website: "",
      duration: t("experiences.beyondsoft.duration"),
      logo: "",
      description: t("experiences.beyondsoft.description"),
      technologies: ["React", "JavaScript", "Redux", "Node.js"],
    },
    {
      id: 4,
      position: t("experiences.chitu.position"),
      company: t("experiences.chitu.company"),
      location: t("experiences.chitu.location"),
      website: "",
      duration: t("experiences.chitu.duration"),
      logo: "",
      description: t("experiences.chitu.description"),
      technologies: ["React", "Node.js", "Express", "MySQL"],
    },
  ];
}
