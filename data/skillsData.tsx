import { Code, Layers, Settings, Storage } from "@mui/icons-material";

const backend = [
  {
    name: "python",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "django",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "django restframework",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "Redis",
    icon: "",
    dot: "#fff",
    starred: false,
  },
];
const frontend = [
  {
    name: "Flutter Dart",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "ReactJS",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "NextJS",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "materialui",
    icon: "",
    dot: "#fff",
    starred: false,
  },

  {
    name: "bootstrap",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "Javascript",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "typescript",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "figma",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "canva",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "adobe photoshop",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "adobe illustrator",
    icon: "",
    dot: "#fff",
    starred: false,
  },
];
const deployment = [
  {
    name: "docker",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "nginx",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "vercel",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "GitLab CI-CD",
    icon: "",
    dot: "#fff",
    starred: false,
  },
];
const other = [
  {
    name: "mysql",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "sqlite",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "postgresql",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "mongodb",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "jira",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "Trello",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "github",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "gitlab",
    icon: "",
    dot: "#fff",
    starred: false,
  },
  {
    name: "visualstudio code",
    icon: "",
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
