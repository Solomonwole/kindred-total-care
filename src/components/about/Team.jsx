import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import TeamImage from "../../assets/team.png";
import { useNavigate } from "react-router-dom";

function Team() {
  const navigate = useNavigate();
  return (
    <>
      <Box mt={10} mb={10}>
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              rowGap: 10,
            }}
          >
            <Box>
              <img
                src={TeamImage}
                alt="about"
                style={{ width: "75%" }}
                data-aos="flip-left"
              />
            </Box>

            <Box>
              <Typography variant="h2" color="secondHeader" data-aos="fade-up">
                Our Team
              </Typography>
              <Box mt={3}>
                <Typography variant="body1" mb={3} data-aos="fade-up">
                  At Kindred Care, we are proud of our team of experts that are
                  always willing to help. Our hiring staff goes above and beyond
                  to find qualified caregivers who excel at giving top-notch
                  medical care. Because we value education, we give our team
                  members access to continual training opportunities via a
                  variety of tools. Additionally, we continuously assess our
                  performance to make sure that we constantly provide our
                  patients with high-quality care. Every customer is significant
                  to us. As a result, we are totally committed to creating
                  long-lasting bonds founded on assistance and company. The
                  creation of care programs that are individually designed for
                  each client is our main responsibility. We work together to
                  make sure they have a high quality of life.
                </Typography>

                <Box mt={4}>
                  <Button
                    variant="text"
                    onClick={() => navigate("/contact-us")}
                    color="secondary"
                  >
                    BOOK AN APPOINTMENT TODAY
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

export default Team;
