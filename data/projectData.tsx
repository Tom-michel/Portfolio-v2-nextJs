import profilePic from "@/assets/images/profilePic.png";
import { socialLinks } from "@/utils/variables";
import Link from "next/link";
// import dj from "../assets/projects"

const bannerImg = "../assets/projects";
export const projectData = [
  {
    name: "TheTipTop Jeux-concours",
    slug: "thetiptop",
    bannerImg: profilePic,
  },
  {
    name: "Dolphprint Chat App",
    slug: "dolphprint-chat-app",
    bannerImg: profilePic,
  },
  {
    name: "Outlook Calendar clone",
    slug: "outlook-clone",
    bannerImg: profilePic,
  },
  {
    name: "Flood Alert",
    slug: "flood-alert",
    bannerImg: profilePic,
  },
  {
    name: "DolphPretty",
    slug: "dolphpretty",
    bannerImg: profilePic,
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
      <Link href={socialLinks.github} target="_blank" className="textP">
        github
      </Link>{" "}
      and{" "}
      <Link href={socialLinks.gitlab} target="_blank" className="textP">
        gitlab
      </Link>{" "}
      accounts.{" "}
      <span style={{ fontStyle: "italic" }}>
        (Unfortunately, several enterprise projects are in private mode)
      </span>
    </>
  ),
};
