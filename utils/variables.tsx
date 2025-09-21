import gitlabIconSvg from "@/assets/icons/gitlab-logo.svg";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export const resumeLink =
  "https://drive.google.com/file/d/1cCpgqPkEW5wBdA-zv5Px7LEm4JzUmnO3/view?usp=drive_link";

export const gitlabIcon = (
  <Image priority width={24} height={24} src={gitlabIconSvg} alt="" />
);

export const socialLinks = {
  github: { name: "GitHub", link: "https://github.com/Tom-michel/" },
  gitlab: { name: "GitLab", link: "https://gitlab.com/Tom-michel/" },
  linkedin: {
    name: "LinkedIn",
    link: "https://linkedin.com/in/michel-btompe-3a0bb3234/",
  },
  twitter: { name: "X(Twitter)", link: "https://twitter.com/michelbtompe" },
  bento: { name: "Bento", link: "https://bento.me/tom-y" },
};

export const experienceLinks = {
  ubora: {
    name: "Ubora Studios (Dolph Group)",
    link: "http://ubora-studios.com",
  },
  kelden: {
    name: "KELDEN University Institute",
    link: "https://kelden.education/",
  },
};

export const logoContent = (
  <div
    style={{
      marginRight: 2,
      display: "flex",
      alignItems: "center",
      gap: 5,
    }}
  >
    {/* <span style={{ fontWeight: 700 }}>TOM• </span>{" "} */}
    <Image src={logo} alt="" priority width={40} />

    <span className="portfolio">
      <span style={{ fontWeight: 700 }}> • </span> Portfolio
    </span>
  </div>
);
