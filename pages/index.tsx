import BannerSection from "@/components/home/BannerSection";
import ContactSection from "@/components/home/ContactSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* DEV INDICATION */}
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--cardBgColor)",
            border: "2px solid var(--primaryColor)",
            mt: 3,
            py: 2,
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          <h2>THIS VERSION IS STILL IN DEVELOPMENT </h2>
          <Link href="https://v1-michelbtompe.vercel.app/">
            <Button
              startIcon={<RemoveRedEyeOutlined />}
              color="warning"
              variant="contained"
            >
              FIRST VERSION
            </Button>
          </Link>
        </Toolbar>
      </Container>
      {/* DEV INDICATION */}

      <BannerSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
