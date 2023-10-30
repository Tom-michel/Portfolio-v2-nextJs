import BannerSection from "@/components/home/BannerSection";
import ContactSection from "@/components/home/ContactSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import { Button, Toolbar } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michel Btompe</title>
        <meta
          name="description"
          content="Porfolio of Michel Btompe. Hier you get more information about me and my stack tools and technologies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toolbar sx={{display:'flex', flexDirection:'column', backgroundColor:'var(--primaryColorOp)', py:3}}>
        <h1>THIS SITE IS STILL SITE IN DEVELOPEMENT </h1>
        <h4>
          Please go to the{" "}{" "}
          <Link href="https://v1-michelbtompe.vercel.app/"><Button color='info' variant='contained'>Version 1</Button></Link>
          {" "}{" "} of the site
        </h4>
      </Toolbar>
      <BannerSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
