import React from "react";
import {
  Companion,
  Homemaking,
  LiveCare,
  SpecialCare,
} from "../../assetsExport";
import { Box, Container, Stack, Typography } from "@mui/material";

function ServicesSection() {
  return (
    <>
      <Container maxWidth="lg" id="services">
        <Box mt={10}>
          <Typography variant="h2" align="center" mb={7} data-aos="fade-up">
            Our Services
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            columnGap: 4,
            rowGap: 4,
          }}
        >
          {data.map((item, index) => {
            return (
              <BoxComponent
                key={index}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </Box>
      </Container>
    </>
  );
}

export default ServicesSection;

const BoxComponent = ({ icon, title, text }) => {
  return (
    <>
      <Box
        p={2}
        sx={{
          "&:hover": {
            boxShadow:
              "-6px -12px 40px 0px rgba(105, 127, 175, 0.05), 12px 30px 50px 0px rgba(105, 127, 175, 0.15)",
            background: "#fff",
            borderRadius: "6px",
          },
        }}
        data-aos="fade-up-right"
      >
        <Stack spacing={1.5}>
          {icon}
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{text}</Typography>
        </Stack>
      </Box>
    </>
  );
};

const data = [
  {
    icon: <Homemaking />,
    title: "Homemaking Care",
    text: "Our caring staff will clean your house, do your laundry, prepare delicious meals, drive you to appointments, conduct errands, shop with you, and even accompany you on exciting adventures.",
  },
  {
    icon: <Companion />,
    title: "Companion Care",
    text: "While families are busy securing the bag and pursuing their dreams, we are here to listen and speak, providing a willing shoulder to depend on.",
  },
  {
    icon: <LiveCare />,
    title: "Live-in Care",
    text: "Our live-in care option is great for clients who already have a caregiver in mind and want them to live in the same place.",
  },
  {
    icon: <SpecialCare />,
    title: "Special Care",
    text: "Talk Care and Talk Kindred Care are dedicated to handling special care cases and providing a trusted support system for creating wonderful moments together.",
  },
];
