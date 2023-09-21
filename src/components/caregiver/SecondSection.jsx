import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { PiCertificateFill } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";

function SecondSection() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          mt={10}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <BsCalendarDateFill size={60} color="#52C8C2" />
            <Typography variant="h3" align="center">
              Flexible Schedules & Convenient Assignments
            </Typography>
            <Typography variant="body1" align="center">
              You will have an opportunity to identify the schedule that fits
              best with your lifestyle
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PiCertificateFill size={60} color="#52C8C2" />
            <Typography variant="h3" align="center">
              Ongoing Training
            </Typography>
            <Typography variant="body1" align="center">
              Advance with a comprehensive learning platform that includes
              orientation and on-going training
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <GiReceiveMoney size={60} color="#52C8C2" />
            <Typography variant="h3" align="center">
              Competitive Wages & Benefits
            </Typography>
            <Typography variant="body1" align="center">
              Competitive wages, benefit packages, and recognitions are offered
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SecondSection;
