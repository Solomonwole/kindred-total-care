import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import PhysicalImage from "../../assets/physical.png";
import MentalImage from "../../assets/mental.png";

function Physical() {
  return (
    <>
      <Box mt={10}>
        <Container maxWidth="lg">
          <Stack>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                rowGap: 5,
                columnGap: 5,
              }}
            >
              <Box>
                <img
                  src={PhysicalImage}
                  alt="about"
                  style={{ width: "85%" }}
                  data-aos="flip-left"
                />
              </Box>

              <Box>
                <Typography
                  variant="h2"
                  color="secondHeader"
                  data-aos="fade-left"
                >
                  Physical Disability Care
                </Typography>
                <Box mt={3}>
                  <Typography variant="body1" mb={3} data-aos="fade-left">
                    Our team of skilled specialists will develop a
                    rehabilitation plan specifically for you, whether you are
                    recovering from an accident or facing new difficulties in
                    your active lifestyle. With the assistance of rehabilitation
                    specialists, we will create a customized health and wellness
                    program to get you back on track and prepared for daily
                    life. Our caring staff understands that each person is
                    unique, and we will help you along the way to better health
                    so you can enjoy life to the fullest. Recovering in a
                    comfortable setting might give one a sense of belonging. By
                    working together with family, friends, and medical
                    professionals, we hope to hasten the rehabilitation process
                    and return your house to its former cozy state. From
                    physical therapy and personal care to friendship and
                    community inclusion, it is our responsibility to assist you
                    regain your freedom and improve your functionality.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              mt={10}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                rowGap: 5,
                columnGap: 5,
              }}
            >
              <Box
                sx={{
                  order: {
                    sm: 1,
                  },
                }}
              >
                <img
                  src={MentalImage}
                  alt="about"
                  style={{ width: "85%" }}
                  data-aos="flip-left"
                />
              </Box>

              <Box>
                <Typography
                  variant="h2"
                  color="secondHeader"
                  data-aos="fade-left"
                >
                  Mental Health Care
                </Typography>
                <Box mt={3}>
                  <Typography variant="body1" mb={3} data-aos="fade-left">
                    Mental Health Is Key! Age is one of several factors that can
                    cause a person's mental health to decline. The feeling of
                    loneliness, ongoing health problems, traumatic losses, or
                    approaching retirement can all be factors. Additionally,
                    these elements may have an impact on their physical
                    condition, raising the risk of mishaps or falls. It may seem
                    challenging to manage mental health, especially for older
                    persons. Our team of healthcare specialists has extensive
                    experience caring for patients with mental health issues,
                    including those who have Alzheimer's, Parkinson's, and other
                    mental disorders. Our care solutions are tailored to meet
                    your individual requirements. Whether it's a friendly visit
                    every now and then, some caregiver relief, or having someone
                    nearby all the time, we are here to help.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Physical;
