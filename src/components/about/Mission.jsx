import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MissionImage from "../../assets/mission.png";

function Mission() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          mt={10}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
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
              src={MissionImage}
              alt="about"
              style={{ width: "75%" }}
              data-aos="flip-left"
            />
          </Box>
          <Box>
            <Typography variant="h2" mb={3} data-aos="fade-up">Mission Statement</Typography>
            <Typography variant="body1" data-aos="fade-up">
              We are, at our core, a group of caregivers who care for you like
              family. Our main goal is to offer top-notch home care. We get in
              head first because it is what we do when your loved ones need
              help. Our techniques are distinctive, and we never compromise on
              quality. Our concern is genuine and our care is unfeigned.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Mission;
