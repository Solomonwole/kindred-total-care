import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { CheckIcon } from "../../assetsExport";
import AboutImage from "../../assets/about.png";
import { useNavigate } from "react-router-dom";

function AboutUsSection() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box pt={10} pb={5}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              rowGap: 10,
            }}
          >
            <Box
              sx={{
                order: {
                  xs: 1,
                  sm: 0,
                },
              }}
            >
              <img
                src={AboutImage}
                alt="about"
                style={{ width: "75%" }}
                data-aos="flip-left"
              />
            </Box>

            <Box>
              <Typography variant="h2" color="secondHeader" data-aos="fade-up">
                About Us
              </Typography>
              <Box mt={3}>
                <Typography variant="body1" mb={3} data-aos="fade-up">
                  Kindred Care provides top notch care for elderly loved ones,
                  focusing on their health and well-being. With innovative
                  services and qualified professionals, you can trust that your
                  loved ones are in good hands. Our caregivers treat clients
                  with respect, dignity, and empathy, offering personalized
                  care options to ensure their safety, happiness, and
                  fulfillment. We offer;
                </Typography>
                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    data-aos="fade-right"
                  >
                    <CheckIcon />
                    <Typography variant="body1">Personal care</Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    data-aos="fade-right"
                  >
                    <CheckIcon />
                    <Typography variant="body1">Companion care</Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    data-aos="fade-right"
                  >
                    <CheckIcon />
                    <Typography variant="body1">Respite Care</Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    data-aos="fade-right"
                  >
                    <CheckIcon />
                    <Typography variant="body1">Live-in Care</Typography>
                  </Stack>
                </Stack>
                <Box mt={4}>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/about-us")}
                    data-aos="fade-right"
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AboutUsSection;
