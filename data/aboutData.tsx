import {
  BusinessCenterOutlined,
  GitHub,
  LinkedIn,
  Phonelink,
  SchoolOutlined,
  Twitter,
} from "@mui/icons-material";
import { experienceLinks, gitlabIcon, socialLinks } from "../utils/variables";
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
      name: socialLinks.linkedin.name,
      href: socialLinks.linkedin.name,
      icon: <LinkedIn />,
      color: "",
    },
    {
      id: 2,
      name: socialLinks.twitter.name,
      href: socialLinks.twitter.link,
      icon: <Twitter />,
      color: "",
    },
    {
      id: 3,
      name: socialLinks.github.name,
      href: socialLinks.github.link,
      icon: <GitHub />,
      color: "",
    },
    {
      id: 4,
      name: socialLinks.gitlab.name,
      href: socialLinks.gitlab.link,
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
        icon: <DataObject fontSize="small" />,
        title: "Backend Developer",
        dec: (
          <>
            At{" "}
            <Link
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href={experienceLinks.ubora.link}
              target="_blank"
            >
              {experienceLinks.ubora.name}
            </Link>{" "}
            startup.
          </>
        ),
      },
      {
        icon: <Code fontSize="small" />,
        title: "Freelance Web & Mobile Dev",
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
              href={experienceLinks.ubora.link}
              target="_blank"
            >
              {experienceLinks.ubora.name}
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
              href={experienceLinks.kelden.link}
              target="_blank"
              style={{ textDecoration: "underline" }}
              className="textPOP"
            >
              {experienceLinks.kelden.name}
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
              href={experienceLinks.ubora.link}
              target="_blank"
            >
              {experienceLinks.ubora.name}
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
  {
    id: "4",
    year: 2024,
    exp: [
      {
        icon: <SchoolOutlined fontSize="small" />,
        title: "Course Lecturer",
        dec: (
          <>
            - Software Engineering & Algorithms & MOO at{" "}
            <Link
              href={experienceLinks.kelden.link}
              target="_blank"
              style={{ textDecoration: "underline" }}
              className="textPOP"
            >
              {experienceLinks.kelden.name}
            </Link>{" "}
            <br />- German Courses at{" "}
            <span className="textPOP">VTC Smile Academy</span>
          </>
        ),
      },
      {
        icon: <Phonelink fontSize="small" />,
        title: "Fullstack Developer",
        dec: (
          <ul>
            - Freelancer <br />- Consultant at{" "}
            <Link
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href={experienceLinks.ubora.link}
              target="_blank"
            >
              {experienceLinks.ubora.name}
            </Link>{" "}
            startup.
          </ul>
        ),
      },
    ],
  },
];
