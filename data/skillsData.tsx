import { Code, Layers, Settings, Storage } from "@mui/icons-material";
import { renderSimpleIcon } from "react-icon-cloud";
import {
  siAdobeillustrator,
  siAdobephotoshop,
  siBootstrap,
  siCanva,
  siDjango,
  siDocker,
  siFigma,
  siFlutter,
  siGithub,
  siGitlab,
  siJavascript,
  siJenkins,
  siJira,
  siMongodb,
  siMui,
  siMysql,
  siNextdotjs,
  siNginx,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siSqlite,
  siTrello,
  siTypescript,
  siVercel,
  siVisualstudiocode,
} from "simple-icons";

const getIcons = (slugs: any[]) => {
  const icons = slugs.map((icon) => {
    return renderSimpleIcon({
      icon,
      size: 42,
      aProps: { onClick: (e: any) => e.preventDefault() },
    });
  });
  return icons;
};

const backend = [
  {
    name: "python",
    icon: getIcons([siPython]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "django",
    icon: getIcons([siDjango]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "Django rest",
    icon: getIcons([siDjango]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "Redis",
    icon: getIcons([siRedis]),
    dot: "#fff",
    starred: false,
  },
];
const frontend = [
  {
    name: "Flutter Dart",
    icon: getIcons([siFlutter]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "ReactJS",
    icon: getIcons([siReact]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "NextJS",
    icon: getIcons([siNextdotjs]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "materialui",
    icon: getIcons([siMui]),
    dot: "#fff",
    starred: false,
  },

  {
    name: "bootstrap",
    icon: getIcons([siBootstrap]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "Javascript",
    icon: getIcons([siJavascript]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "typescript",
    icon: getIcons([siTypescript]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "figma",
    icon: getIcons([siFigma]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "canva",
    icon: getIcons([siCanva]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "A. photoshop",
    icon: getIcons([siAdobephotoshop]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "A. illustrator",
    icon: getIcons([siAdobeillustrator]),
    dot: "#fff",
    starred: false,
  },
];
const deployment = [
  {
    name: "docker",
    icon: getIcons([siDocker]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "jenkins",
    icon: getIcons([siJenkins]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "nginx",
    icon: getIcons([siNginx]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "vercel",
    icon: getIcons([siVercel]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "GitLab CI-CD",
    icon: getIcons([siGitlab]),
    dot: "#fff",
    starred: false,
  },
];
const other = [
  {
    name: "mysql",
    icon: getIcons([siMysql]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "sqlite",
    icon: getIcons([siSqlite]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "postgresql",
    icon: getIcons([siPostgresql]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "mongodb",
    icon: getIcons([siMongodb]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "jira",
    icon: getIcons([siJira]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "Trello",
    icon: getIcons([siTrello]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "github",
    icon: getIcons([siGithub]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "gitlab",
    icon: getIcons([siGitlab]),
    dot: "#fff",
    starred: false,
  },
  {
    name: "vs code",
    icon: getIcons([siVisualstudiocode]),
    dot: "#fff",
    starred: false,
  },
];

export const skillsData = {
  title: "Skills/Stack",
  number: "03",
  description: (
    <>
      I use many technologies and tools to build professional applications and
      mockups.
    </>
  ),
  stack: [
    {
      name: "Frontend",
      icon: <Code />,
      desc: "frontend stack",
      tech: frontend,
    },
    {
      name: "Backend",
      icon: <Settings />,
      desc: "backend stack",
      tech: backend,
    },
    {
      name: "Deployment",
      icon: <Storage />,
      desc: "deployment stack",
      tech: deployment,
    },
    {
      name: "Others",
      icon: <Layers />,
      desc: "other stack",
      tech: other,
    },
  ],
};
