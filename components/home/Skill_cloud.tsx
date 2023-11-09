import React from "react";
import {
  Cloud,
  ICloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState<any>(null);
  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, []);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e: any) => e.preventDefault(),
        },
      })
    );
  }

  return <a>Loading</a>;
};

const slugs = [
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "postgresql",
  "nginx",
  "vercel",
  "canva",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "python",
  "django",
  "javascript",
  "typescript",
  "mongodb",
  "sqlite",
  "mysql",
  "nextdotjs",
  "leaflet",
  "redis",
  "materialui",
  "bootstrap",
  "jenkins",
  "adobe",
  "adobephotoshop",
  "adobeillustrator",
];

const cloudProps: Omit<ICloud, "children"> = {
  id: "stable-id-for-csr-ssr",
  // containerProps: {
  //   style: {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginLeft: 40,
  //     marginRight: 40,
  //   },
  // },
  // canvasProps: {
  //   style: { maxWidth: "90%" },
  // },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
  },
};

const Skill_cloud = () => {
  const icons = useIcons(slugs);

  return (
    <Cloud {...cloudProps}>
      {icons} <span></span>
    </Cloud>
  );
};

export default Skill_cloud;
