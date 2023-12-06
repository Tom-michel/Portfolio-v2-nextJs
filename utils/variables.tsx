import gitlabIconSvg from "@/assets/icons/gitlab-logo.svg";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export const gitlabIcon = (
  <Image priority width={24} height={24} src={gitlabIconSvg} alt="" />
);

export const socialLinks = {
  github: "https://github.com/Tom-michel/",
  gitlab: "https://gitlab.com/Tom-michel/",
  linkedin: "https://linkedin.com/in/michel-btompe-3a0bb3234/",
  twitter: "https://twitter.com/michelbtompe",
  bento: "https://bento.me/tom-y",
  ubora: "http://ubora-studios.com",
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
    <span style={{ fontWeight: 700 }}> • </span>{" "}
    <span className="portfolio">Portfolio</span>
  </div>
);
