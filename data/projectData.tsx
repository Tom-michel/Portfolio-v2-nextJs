import profilePic from "@/assets/images/profilePic.png";
import { socialLinks } from "@/utils/variables";
import Link from "next/link";
// import dj from "../assets/projects"

const bannerImg = "../assets/projects";
export const projectData = [
  {
    name: "TheTipTop Jeux-concours",
    slug: "thetiptop",
    links: "https://thetiptop-jeux-concours.com/",
  },
  {
    name: "Dolphprint Chat App",
    slug: "dolphprint-chat-app",
    links: "https://commande.dolphprint.com/",
  },
  {
    name: "Outlook Calendar clone",
    slug: "outlook-clone",
    links: "",
  },
  {
    name: "Flood Alert",
    slug: "flood-alert",
    links: "",
  },
  {
    name: "DolphPretty",
    slug: "dolphpretty",
    links: "https://dolphpretty.com/",
  },
];

export const projectInfo = {
  title: "Projects",
  number: "02",
  description: (
    <>
      I have worked and participated on many projects: personal, freelance,
      enterprise and academic. The recents projects are listed below and others
      can be found on my{" "}
      <Link href={socialLinks.github.link} target="_blank" className="textP">
        {socialLinks.github.name}
      </Link>{" "}
      and{" "}
      <Link href={socialLinks.gitlab.link} target="_blank" className="textP">
        {socialLinks.gitlab.name}
      </Link>{" "}
      accounts.{" "}
      <span style={{ fontStyle: "italic" }}>
        (Unfortunately, several enterprise projects are in private mode)
      </span>
    </>
  ),
};
