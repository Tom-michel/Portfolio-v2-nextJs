import { Box, Button, Card, Divider, Grid, TextField } from "@mui/material";
import SectionTitle from "../SectionTitle";
import React, { FormEvent } from "react";
import {
  Email,
  EmailOutlined,
  PhoneAndroid,
  WhatsApp,
} from "@mui/icons-material";
import Link from "next/link";

const ContactSection = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  const otherContactStyle = {
    p: 2,
    pl: { lg: "22%", md: "15%" },
    display: "flex",
    alignItems: "center",
    gap: 3,
    flexDirection: { xs: "row-reverse", sm: "row" },
    // justifyContent: "center",
    // backgroundColor: "#000",
  };
  return (
    <Box className="contacts-section" sx={{ my: 5, px: { xs: 0, sm: 2 } }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            top: { md: -100 },
            label: { color: "var(--foregroundColor)", opacity: 0.7 },
            fieldset: {
              borderColor: "var(--foregroundColor)",
              opacity: 0.5,
              borderWidth: 0.1,
            },
            ".MuiTextField-root:hover label": {
              color: "var(--primaryColor)",
            },
            ".MuiTextField-root:hover fieldset": {
              borderColor: "var(--primaryColor)",
            },
            ".Mui-focused fieldset": { borderColor: "#fff", display: "none" },
            input: { color: "var(--foregroundColor)" },
            pr: { md: 5 },
          }}
        >
          <SectionTitle title="Contact" number="04" description={<></>} />
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="Name"
              placeholder="Tom"
              size="small"
              fullWidth
              margin="dense"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <TextField
              type="email"
              label="Email"
              placeholder="michelbtompe@gmail.com"
              size="small"
              fullWidth
              margin="dense"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <TextField
              type="text"
              label="Subject"
              size="small"
              fullWidth
              margin="dense"
              value={formData.subject}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  subject: e.target.value,
                })
              }
            />
            <TextField
              type="text"
              label="Message"
              size="small"
              margin="dense"
              fullWidth
              multiline
              maxRows={4}
              minRows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <Button
              type="submit"
              size="medium"
              variant="outlined"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Grid>
        <Grid
          item
          justifyContent={"center"}
          xs={12}
          md={6}
          sx={{
            pt: { xs: 5, md: 3 },
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { lg: "column", md: "row" },
            justifyContent: { xs: "end", md: "start" },
          }}
        >
          <Box sx={otherContactStyle}>
            <PhoneAndroid
              sx={{ fill: "var(--primaryColorOp)", fontSize: 50 }}
            />
            <div>
              <h3>Phone Call</h3>
              <Link target="_blank" href={"tel:237656789174"}>
                +237 656 789 174
              </Link>
              <Divider sx={{ height: 2 }} />
              <Link target="_blank" href={"tel:237670915614"}>
                +237 670 915 614
              </Link>
            </div>
          </Box>
          <Box sx={otherContactStyle}>
            <WhatsApp sx={{ fill: "#41a941", fontSize: 50 }} />
            <div>
              <h3>WA Message</h3>
              <Link target="_blank" href={"https://wa.me/237656789174"}>
                +237 656 789 174 (TOM)
              </Link>
              <Divider sx={{ height: 2 }} />
              <Link target="_blank" href={"https://wa.me/237670915614"}>
                +237 670 915 614 (M. BTOMPE)
              </Link>
            </div>
          </Box>
          <Box sx={otherContactStyle}>
            <EmailOutlined sx={{ fill: "#ff7171", fontSize: 50 }} />
            <div>
              <h3>Direct Email</h3>
              <Link target="_blank" href={"mailto:michelbtompe@gmail.com"}>
                michelbtompe@gmail.com
              </Link>
              <Divider sx={{ height: 2 }} />
              <Link
                target="_blank"
                href={"mailto:rufin.btompe@facsciences-uy1.cm"}
              >
                rufin.btompe@facsciences-uy1.cm
              </Link>
              <Divider sx={{ height: 2 }} />
              <Link
                target="_blank"
                href={"mailto:michel.btompe@dolphgroup.com"}
              >
                michel.btompe@dolphgroup.com
              </Link>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
