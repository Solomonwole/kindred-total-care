import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Elderly from "../../assets/elderly.webp";

function BestCareSection() {
  const navigate = useNavigate();
  return (
    <>
      <Box mt={{ xs: 10, sm: 20 }} pb={5}>
        <Container maxWidth="lg">
          <Box
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
                src={Elderly}
                alt="about"
                style={{ width: "85%" }}
                data-aos="flip-left"
              />
            </Box>

            <Box>
              <Typography variant="h2" color="secondHeader" data-aos="fade-up">
                The Best Elderly Care Center For You
              </Typography>
              <Box mt={3}>
                <Typography variant="body1" mb={3} data-aos="fade-up">
                  Kindred Care is dedicated to providing exceptional healthcare
                  to its clients. Our recruitment staff hires qualified
                  caregivers who excel in their field. We value education and
                  offer continual training opportunities through various tools.
                  We analyze our performance regularly to ensure they
                  consistently provide exceptional service. We value each client
                  and are committed to building long-term relationships based on
                  support and friendship. Our main role is to create unique care
                  plans for each client, working with healthcare specialists,
                  community members, and licensed nurses to ensure high-quality
                  care.
                </Typography>

                <Box mt={4}>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/services")}
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

export default BestCareSection;
