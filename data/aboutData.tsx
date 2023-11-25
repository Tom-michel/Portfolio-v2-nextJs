import {
  BusinessCenterOutlined,
  GitHub,
  LinkedIn,
  Phonelink,
  SchoolOutlined,
  Twitter,
} from "@mui/icons-material";
import { gitlabIcon, socialLinks } from "../utils/variables";
import profilePic from "@/assets/images/profilePic.png";
import { DataObject, Code } from "@mui/icons-material";
import Link from "next/link";

export const aboutInfo = {
  number: "01",
  name: "Michel Btompe",
  description: (
    <>
      <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
        {" "}
        You can call me <span className="textP">TOM</span>
      </span>{" "}
      <br />
      I'am a fullstack web/mobile developer and Ui Designer. I like to build or
      improve innovative solutions to everyday problems in society. I build
      profeessional web and modile app. <br />
      <span style={{ textTransform: "uppercase", fontWeight: 600 }}>
        Based in Yaoundé, Available for Freelance Projects.
      </span>
    </>
  ),
  socials: [
    {
      id: 1,
      name: "LinkedIn",
      href: socialLinks.linkedin,
      icon: <LinkedIn />,
      color: "",
    },
    {
      id: 2,
      name: "Twitter",
      href: socialLinks.twitter,
      icon: <Twitter />,
      color: "",
    },
    {
      id: 2,
      name: "GitHub",
      href: socialLinks.github,
      icon: <GitHub />,
      color: "",
    },
    {
      id: 2,
      name: "GitLab",
      href: socialLinks.gitlab,
      icon: gitlabIcon,
      color: "",
    },
  ],
  profilePic: profilePic,
};

export const experiences = [
  {
    id: "1",
    year: 2021,
    exp: [
      {
        icon: <Code fontSize="small" />,
        title: "Freelance Web/Mobile Dev",
        dec: (
          <>
            Professional Web app, Android App.{<br />}
            <Link
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href="/projects#services"
            >
              Services
            </Link>
          </>
        ),
      },
    ],
  },
  {
    id: "2",
    year: 2022,
    exp: [
      {
        icon: <DataObject fontSize="small" />,
        title: "Fullstack Developer",
        dec: (
          <>
            At{" "}
            <Link
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href={socialLinks.ubora}
              target="_blank"
            >
              Ubora Studios
            </Link>{" "}
            startup.
          </>
        ),
      },
      {
        icon: <BusinessCenterOutlined fontSize="small" />,
        title: "Freelancer & UI Designer",
        dec: (
          <>
            Django API, Web/Mobile App, UI Design.{<br />}
            <Link
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href="/about#services"
            >
              Services
            </Link>
          </>
        ),
      },
    ],
  },
  {
    id: "3",
    year: 2023,
    exp: [
      {
        icon: <SchoolOutlined fontSize="small" />,
        title: "Course Lecturer",
        dec: (
          <>
            Software Engineering & Algorithms at{" "}
            <Link
              href={"https://kelden.education/"}
              target="_blank"
              style={{ textDecoration: "underline" }}
              className="textPOP"
            >
              KELDEN University Institute
            </Link>{" "}
            .
          </>
        ),
      },
      {
        icon: <Phonelink fontSize="small" />,
        title: "Fullstack Developer",
        dec: (
          <>
            At{" "}
            <Link
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href="http://ubora-studios.com"
              target="_blank"
            >
              Ubora Studios
            </Link>{" "}
            startup.
          </>
        ),
      },
      {
        icon: <BusinessCenterOutlined fontSize="small" />,
        title: "Freelancer & UI Designer",
        dec: (
          <>
            Professional Web/Mobile App, UI Design.{<br />}
            <a
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href="/about"
            >
              Services
            </a>
          </>
        ),
      },
    ],
  },
];
