import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import contactImage from "../assets/contactus-image.webp";
import { EmailIcon, LocationIcon, PhoneIcon } from "../assetsExport";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [contactFill, setContactFill] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactFill((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <PageHeader title="Contact Us" image={contactImage} />
      <Container>
        <Box
          mt={10}
          mb={10}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            columnGap: 4,
            rowGap: 4,
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h2" color="secondary" data-aos="fade-right">
              Send a message
            </Typography>
            <Box
              data-aos="fade-right"
              p={2}
              sx={{
                border: "0.50px #0DBBB4 solid",
                borderRadius: "25px",
              }}
              component="form"
              onSubmit={handleForm}
            >
              <Stack spacing={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: { sm: "space-between" },
                    alignItems: { sm: "center" },
                    columnGap: 3,
                    rowGap: 3,
                  }}
                >
                  <Stack width="100%">
                    <Typography>Name</Typography>
                    <input
                      type="text"
                      name="name"
                      value={contactFill.name}
                      onChange={handleChange}
                      placeholder="John Carter"
                      style={inputStyle}
                      required
                    />
                  </Stack>
                  <Stack width="100%">
                    <Typography>Email</Typography>
                    <input
                      type="email"
                      name="email"
                      value={contactFill.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      style={inputStyle}
                      required
                    />
                  </Stack>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: { sm: "space-between" },
                    alignItems: { sm: "center" },
                    columnGap: 3,
                    rowGap: 3,
                  }}
                >
                  <Stack width="100%">
                    <Typography>Phone</Typography>
                    <input
                      type="tel"
                      name="phone"
                      value={contactFill.phone}
                      onChange={handleChange}
                      placeholder="+1 (123) 456 7898"
                      style={inputStyle}
                      required
                    />
                  </Stack>
                  <Stack width="100%">
                    <Typography>Address</Typography>
                    <input
                      type="text"
                      name="address"
                      value={contactFill.address}
                      onChange={handleChange}
                      placeholder="123, Road st, Brooklyn, New York"
                      style={inputStyle}
                      required
                    />
                  </Stack>
                </Box>
                <textarea
                  type="text"
                  name="message"
                  value={contactFill.message}
                  onChange={handleChange}
                  placeholder="Enter your message here.."
                  rows="7"
                  style={inputStyle2}
                  required
                ></textarea>
                <Button variant="contained" type="submit">
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Stack>

          <Box>
            <Typography variant="h2" color="secondary" data-aos="fade-left">
              Reach out
            </Typography>
            <Box mt={3}>
              <Stack spacing={2} data-aos="fade-left">
                <Stack direction="row" alignItems="center" spacing={2}>
                  <EmailIcon />
                  <a href="mailto:example@kindredtotalcare.com">
                    <Typography variant="body1">
                      Contact@kindredtotalcare.com
                    </Typography>
                  </a>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <PhoneIcon />
                  <a href="tel:+15953465655">
                    <Typography variant="body1">+1 (595) 346 5655</Typography>
                  </a>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationIcon />
                  <Typography variant="body1">
                    12699 Bissonnet Street, Suite A, Houston, Texas, 77099
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default ContactUs;

const inputStyle = {
  border: "0.50px #0DBBB4 solid",
  borderRadius: "25px",
  height: "40px",
  padding: "10px",
  width: "100%",
};
const inputStyle2 = {
  border: "0.50px #0DBBB4 solid",
  borderRadius: "25px",
  minHeight: "40px",
  padding: "20px",
  width: "100%",
  resize: "none",
};
