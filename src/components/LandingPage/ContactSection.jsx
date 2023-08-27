import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ContactImage from "../../assets/contact-image.webp";
import { EmailIcon, LocationIcon, PhoneIcon } from "../../assetsExport";

function ContactSection() {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Box mt={10} mb={10} pb={5} id="contact">
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              rowGap: 10,
            }}
          >
            <Box>
              <img
                src={ContactImage}
                alt="about"
                style={{ width: "75%" }}
                data-aos="flip-left"
              />
            </Box>

            <Box>
              <Typography variant="h2" color="secondHeader">
                Contact Us
              </Typography>
              <Box mt={3}>
                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    data-aos="fade-right"
                  >
                    <EmailIcon />
                    <a href="mailto:example@kindredtotalcare.com">
                      <Typography variant="body1">
                        Contact@kindredtotalcare.com
                      </Typography>
                    </a>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    data-aos="fade-right"
                  >
                    <PhoneIcon />
                    <a href="tel:+15953465655">
                      <Typography variant="body1">+1 (595) 346 5655</Typography>
                    </a>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    data-aos="fade-right"
                  >
                    <LocationIcon />
                    <Typography variant="body1">
                      12699 Bissonnet Street, Suite A, Houston, Texas, 77099
                    </Typography>
                  </Stack>
                </Stack>

                <Box mt={4} component="form" onSubmit={handleForm}>
                  <Stack spacing={2}>
                    <TextField
                      type="text"
                      label="Full Name"
                      name="fullName"
                      variant="outlined"
                      value={contactForm.fullName}
                      onChange={handleChange}
                      sx={textStyle}
                      required
                    />
                    <TextField
                      type="email"
                      label="Email Address"
                      variant="outlined"
                      name="email"
                      value={contactForm.email}
                      onChange={handleChange}
                      sx={textStyle}
                      required
                    />

                    <TextField
                      label="Enter Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      name="message"
                      value={contactForm.message}
                      onChange={handleChange}
                      sx={textStyle}
                    />

                    <Button variant="contained" type="submit">
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ContactSection;
const textStyle = {
  "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
    color: "rgba(0, 0, 0, 0.709)",
  },

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.259)",
  },
};
