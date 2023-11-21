import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
  iconClasses,
} from "@mui/material";
import SectionTitle from "../SectionTitle";
import Skill_cloud from "./Skill_cloud";
import { skillsData } from "@/data/skillsData";
import { ExpandMore } from "@mui/icons-material";

const SkillsSection = () => {
  // const slugs = ["javascript", "java", "dart", "typescript"];

  return (
    <Box
      className="skills-section"
      sx={{ my: 5, pb: { md: 5 }, px: { xs: 0, sm: 2 } }}
    >
      <Grid
        container
        alignItems={"center"}
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "start" },
            mt: { xs: 5, md: 0 },
            pr: { md: 4 },
          }}
        >
          <Skill_cloud />
        </Grid>
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <SectionTitle
            title={skillsData.title}
            number={skillsData.number}
            // description={skillsData.description}
            description={<></>}
          />
          {skillsData.stack.map((stack, key) => (
            <Accordion
              key={key}
              sx={{
                backgroundColor: "var(--cardBgColor)",
                color: "var(--foregroundColor)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  {stack.icon}
                  {stack.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {stack.tech.map((tech) => (
                  <span style={{ textTransform: "capitalize" }}>
                    {tech.name},{" "}
                  </span>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
