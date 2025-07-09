import { useTranslations } from "next-intl";

export function useExpertiseData() {
  const t = useTranslations("ExpertiseSection");

  return [
    {
      id: 1,
      icon: "/icon-react.svg",
      iconAlt: "icon-react",
      title: t("skills.frontend.title"),
      subtitle: t("skills.frontend.subtitle"),
      description: t("skills.frontend.description"),
      className: "expertise-frontend",
      borderClass:
        "border-t-2 border-l-2 lg:border-r-1 border-r-2 border-b-2 lg:border-b-2",
    },
    {
      id: 2,
      icon: "/icon-computer.svg",
      iconAlt: "icon-computer",
      title: t("skills.software.title"),
      subtitle: t("skills.software.subtitle"),
      description: t("skills.software.description"),
      className: "expertise-backend-development",
      borderClass:
        "border-t-0 lg:border-t-2 border-l-2 lg:border-l-1 lg:border-r-1 border-r-2 border-b-2",
    },
    {
      id: 3,
      icon: "/icon-computer.svg",
      iconAlt: "devops",
      title: t("skills.devops.title"),
      subtitle: t("skills.devops.subtitle"),
      description: t("skills.devops.description"),
      className: "expertise-cicd-development",
      borderClass:
        "border-t-0 lg:border-t-2 border-l-2 lg:border-l-1 border-r-2 lg:border-r-2 border-b-2",
    },
  ];
}
