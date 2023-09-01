import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import ContactImage from "../../assets/contact-image.webp";
import { EmailIcon, LocationIcon, PhoneIcon } from "../../assetsExport";
import emailjs from "@emailjs/browser";
import SuccessModal from "../modal/SuccessModal";

function ContactSection() {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sentModal, setSentModal] = useState(false);
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs.sendForm(
        "service_i2tvadk",
        "template_zo4u499",
        form.current,
        "zYEmvRRoBYin2UHqv"
      );
      setLoading(false);
      setUserName(contactForm.fullName);
      setContactForm({
        fullName: "",
        email: "",
        message: "",
      });
      setSentModal(true);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSentModal(false);
    setUserName("");
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
                    <a href="mailto:info@kindredtc.com">
                      <Typography variant="body1">
                        info@kindredtc.com
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
                    <a href="tel:+18324063380">
                      <Typography variant="body1">+1 (832) 406 3380</Typography>
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

                <Box mt={4} component="form" ref={form} onSubmit={handleForm}>
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
                      disabled={loading}
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
                      disabled={loading}
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
                      disabled={loading}
                    />

                    <Button
                      variant="contained"
                      type="submit"
                      disabled={loading}
                    >
                      {!loading ? (
                        "Send Message"
                      ) : (
                        <span className="loader"></span>
                      )}
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {sentModal && (
        <SuccessModal
          open={sentModal}
          handleClose={handleClose}
          name={userName}
        />
      )}
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
