import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { QuoteLeft, QuoteRight } from "../../assetsExport";

function ClientReviewSection() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Box mt={10}>
          <Typography variant="h2" align="center">
            Client Reviews
          </Typography>

          <Box mt={5}>
            <SwipeableViews
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents // Enable swipe on desktop
            >
              {testimonials.map((testy, index) => (
                <TestyCard
                  key={index}
                  image={testy.image}
                  name={testy.name}
                  text={testy.text}
                />
              ))}
            </SwipeableViews>
            <Pagination
              dots={testimonials.length}
              index={activeStep}
              onChangeIndex={handleStepChange}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default ClientReviewSection;

const TestyCard = ({ image, name, text }) => {
  return (
    <Box sx={{ cursor: "pointer" }}>
      <Stack spacing={3} justifyContent="center" alignItems="center">
        <Box sx={{ position: "relative" }}>
          <QuoteLeft style={{ position: "absolute" }} />
          <Typography align="center" mt={3}>
            {text}
          </Typography>
          <QuoteRight style={{ position: "absolute", right: 0 }} />
        </Box>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt="" src={image} />
          <Typography>{name}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

const Pagination = ({ dots, index, onChangeIndex }) => (
  <Box display="flex" justifyContent="center" mt={2}>
    {Array.from({ length: dots }).map((_, i) => (
      <Box
        key={i}
        sx={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: i === index ? "#000" : "rgba(0, 0, 0, 0.30)",
          mx: 1,
          cursor: "pointer",
        }}
        onClick={() => onChangeIndex(i)}
      />
    ))}
  </Box>
);

const testimonials = [
  {
    image:
      "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Becky R.",
    text: "Our aunt who suffered from parkinson's, lived alone for 90 years before we needed to transfer her to an assisted living facility in Iowa. We tried private caretakers but found them untrustworthy. We enlisted the help of Kindred Care who went above and beyond to find the best caregivers. They convened a group conference with her caretakers and family to ensure her happiness and meet our needs.",
  },
  {
    image:
      "https://images.pexels.com/photos/1937434/pexels-photo-1937434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Christina M.",
    text: "Our aunt who suffered from parkinson's, lived alone for 90 years before we needed to transfer her to an assisted living facility in Iowa. We tried private caretakers but found them untrustworthy. We enlisted the help of Kindred Care who went above and beyond to find the best caregivers. They convened a group conference with her caretakers and family to ensure her happiness and meet our needs.",
  },
  {
    image:
      "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Micheal E.",
    text: "Our aunt who suffered from parkinson's, lived alone for 90 years before we needed to transfer her to an assisted living facility in Iowa. We tried private caretakers but found them untrustworthy. We enlisted the help of Kindred Care who went above and beyond to find the best caregivers. They convened a group conference with her caretakers and family to ensure her happiness and meet our needs.",
  },
];
