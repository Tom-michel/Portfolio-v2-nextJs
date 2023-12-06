import { logoContent, socialLinks } from "@/utils/variables";
import { Box, Container, Divider, Toolbar } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        // backgroundColor: "var(--cardBgColor)",
        pb: 2,
      }}
    >
      <Divider sx={{ mb: 3, borderColor: "var(--cardBgColor)" }} />
      <Container sx={{ px: { xs: 0, sm: "24px" } }}>
        <Toolbar
          disableGutters
          sx={{
            py: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            "& a": { fontSize: "17px" },
            gap: 3,
          }}
        >
          <div>
            <h4 style={{ opacity: 0.7, fontWeight: "lighter" }}>
              Made with 🧡 2023 &copy;
            </h4>
            <Link
              href="/"
              style={{
                marginRight: 2,
              }}
              className="brand"
            >
              {logoContent}
            </Link>
          </div>
          <div>
            <h4 style={{ opacity: 0.7, fontWeight: "lighter" }}>Socials</h4>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Link target="_blank" href={socialLinks.github}>
                Github
              </Link>
              <Link target="_blank" href={socialLinks.gitlab}>
                GitLab
              </Link>
              <Link target="_blank" href={socialLinks.linkedin}>
                LinkedIn
              </Link>
              <Link target="_blank" href={socialLinks.twitter}>
                X(Twitter)
              </Link>
              <Link target="_blank" href={socialLinks.bento}>
                Bento
              </Link>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </Container>
  );
};

export default Footer;
