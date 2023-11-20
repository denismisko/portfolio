import {
  IconBrandReactNative,
  IconBrandAngular,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandSass,
  IconBrandFigma,
  IconBrandTypescript,
  IconBrandBootstrap,
  IconBrandJavascript,
} from "@tabler/icons-react";

function TechStack() {
  const techIcons = [
    {
      title: "React",
      icon: <IconBrandReactNative className="icon" size={35} />,
    },
    {
      title: "Angular",
      icon: <IconBrandAngular className="icon" size={35} />,
    },
    {
      title: "Bootstrap",
      icon: <IconBrandBootstrap className="icon" size={35} />,
    },
    {
      title: "CSS3",
      icon: <IconBrandCss3 className="icon" size={35} />,
    },
    {
      title: "HTLM5",
      icon: <IconBrandHtml5 className="icon" size={35} />,
    },
    {
      title: "Sass",
      icon: <IconBrandSass className="icon" size={35} />,
    },
    {
      title: "Figma",
      icon: <IconBrandFigma className="icon" size={35} />,
    },
    {
      title: "JavaScript",
      icon: <IconBrandJavascript className="icon" size={35} />,
    },
    {
      title: "TypeScript",
      icon: <IconBrandTypescript className="icon" size={35} />,
    },
  ];

  return (
    <>
      {techIcons.map((tech) => (
        <li key={tech.title} title={tech.title}>
          {tech.icon}
        </li>
      ))}
    </>
  );
}

export default TechStack;
