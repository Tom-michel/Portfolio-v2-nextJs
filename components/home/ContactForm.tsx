import { Box, Button, TextField } from "@mui/material";
import React, { FormEvent } from "react";

const ContactForm = () => {
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
  return (
    <Box
      sx={{
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
        textarea: { color: "var(--foregroundColor)" },
        pr: { md: 5 },
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Name"
          placeholder="Tom"
          size="small"
          fullWidth
          margin="dense"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          type="email"
          label="Email"
          placeholder="michelbtompe@gmail.com"
          size="small"
          fullWidth
          margin="dense"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
        <Button type="submit" size="medium" variant="outlined" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
