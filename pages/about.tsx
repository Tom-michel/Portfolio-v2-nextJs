import SectionTitle from "@/components/SectionTitle";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

import myPhoto from "@/assets/images/michel.jpg";
import { ArrowRightAlt } from "@mui/icons-material";

export default function About() {
  return (
    <>
      <Head>
        <title>Michel BTOMPE | About Me</title>
      </Head>
      <Container sx={{ pb: 5 }}>
        <Grid
          container
          alignItems={"end"}
          justifyContent={"space-between"}
          sx={{
            justifyContent: { md: "space-between" },
            mb: 4,
          }}
        >
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <SectionTitle title="Who am i ?" number="W" description={<></>} />
            <Typography>
              I am{" "}
              <span style={{ textDecoration: "underline" }}>
                MICHEL BTOMPE TCHEUFFA
              </span>
              , but you can call me <span className="textP">TOM</span>
              <span className="textP">{" • "}</span> I'm a research student in
              Computer Science at the University of Yaounde 1
              <span className="textP">{" • "}</span> I teach Algorithms and Data
              Bases at the KELDEN University Institute in Yaounde
              <span className="textP">{" • "}</span> I'm a software engineer,
              fullstack developer and UI designer
              <span className="textP">{" • "}</span> I love playing video games
              #CODM and watching the amines #JJK
              <span className="textP">{" • "}</span> I speak French and German
              very well and have an medium level in English.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>

        <Grid container alignItems={"end"}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: { sm: "flex", xs: "none" },
              alignItems: "center",
              gap: 2,
              opacity: 0.5,
            }}
          >
            Photo of me <ArrowRightAlt />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: { sm: "end", xs: "start" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "320px",
                minWidth: "320px",
                height: "400px",
                minHeight: "400px",
                overflow: "hidden",
                filter: "grayscale(100%)",
                transition: "filter 0.5s ease",
                ":hover": {
                  cursor: "pointer",
                  filter: "grayscale(0%)",
                  transition: "filter 0.5s ease",
                },
              }}
            >
              <Image
                src={myPhoto}
                priority
                alt="my photo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", pt: 5, mt: 5 }}>
          <Button
            href="https://drive.google.com/file/d/1W1H5qURTaQV2aZsnZk8Vp-eqopPLgPvg/view?usp=drive_link"
            target="_blank"
            variant="outlined"
            color="primary"
            size="large"
          >
            MY RESUME
          </Button>
        </Box>
      </Container>
    </>
  );
}
