import { Box, Grid, iconClasses } from "@mui/material";
import SectionTitle from "../SectionTitle";
import Skill_cloud from "./Skill_cloud";

const SkillsSection = () => {
  // const slugs = ["javascript", "java", "dart", "typescript"];
  /**
   * * test
   * ! this is a deprecated component
   * // deleted test
   * ? test
   * @param test
   * @returns test
   * TODO: test
   */

  return (
    <Box className="skills-section" sx={{ my: 5, px: { xs: 0, sm: 2 } }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <SectionTitle
            title="Skills/Stack"
            number="03"
            description={
              <>
                I use many technologies and tools to build professional
                applications and mockups.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Skill_cloud />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
