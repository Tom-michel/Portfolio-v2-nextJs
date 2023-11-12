import gitlabIconSvg from "@/assets/icons/gitlab-logo.svg";
import Image from "next/image";

export const gitlabIcon = (
  <Image priority width={24} height={24} src={gitlabIconSvg} alt="" />
);

export const socialLinks = {
  github: "https://github.com/Tom-michel/",
  gitlab: "https://gitlab.com/Tom-michel/",
  linkedin: "https://linkedin.com/in/michel-btompe-3a0bb3234/",
  twitter: "https://twitter.com/michelbtompe",
  ubora: "http://ubora-studios.com",
};
