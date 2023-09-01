import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { QuoteLeft, QuoteRight } from "../../assetsExport";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

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
            <Carousel
              onChange={handleStepChange}
              autoPlay
              infiniteLoop
              swipeable={true}
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={true}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <Box>
                    {/* <BsArrowLeftCircleFill
                      onClick={onClickHandler}
                      direction="prev"
                      label={label}
                      size={50}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "30%",
                        zIndex: 10,
                        cursor: "pointer",
                      }}
                      color="#00000036"
                    /> */}
                  </Box>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <Box>
                    {/* <BsArrowRightCircleFill
                      onClick={onClickHandler}
                      direction="next"
                      label={label}
                      size={50}
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "30%",
                        zIndex: 10,
                        cursor: "pointer",
                      }}
                      color="#00000036"
                    /> */}
                  </Box>
                )
              }
              renderIndicator={({ isActive }, index) => {
                return (
                  <Box>
                    {/* <Pagination
                      dots={testimonials.length}
                      index={activeStep}
                      onChangeIndex={handleStepChange}
                    /> */}
                  </Box>
                );
              }}
              selectedItem={activeStep}
            >
              {testimonials.map((testy, index) => (
                <TestyCard
                  key={index}
                  image={testy.image}
                  name={testy.name}
                  text={testy.text}
                />
              ))}
            </Carousel>

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
    <Box sx={{ cursor: "pointer", mb: 2 }}>
      <Stack spacing={3} justifyContent="center" alignItems="center">
        <Box sx={{ position: "relative" }}>
          <QuoteLeft style={{ position: "absolute", left: 0 }} />
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
    name: "Sarah L.",
    text: "I couldn't have asked for a better place for my mother. The care and compassion she receives at Kindred Total Care are exceptional. From the warm and welcoming staff to the comfortable and supportive environment, it truly feels like a home away from home. My family and I are grateful for the peace of mind we have knowing she's in the best hands.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg?w=740&t=st=1693596796~exp=1693597396~hmac=54bc914b0ff455ffb1a79868cf9e8cec76686b6f31e69ac4fdb4566a94ba2fcc",
    name: "Emily R.",
    text: "Choosing Kindred Total Care for my aunt was one of the best decisions we ever made. The team here goes above and beyond to provide specialized memory care. They create an environment filled with understanding and patience. It's heartening to see my aunt so content and well-cared for. Thank you for your dedication!",
  },
  {
    image:
      "https://img.freepik.com/free-photo/portrait-wise-person_52683-100915.jpg?w=740&t=st=1693596718~exp=1693597318~hmac=44229c3a5b528a9d198a0cd2fcdd385bae46cc7f3cb7bb3b04e63c5c73c1103d",
    name: "John M.",
    text: "I moved into Kindred Total Care after a long search for the right place. The care and attention to detail are remarkable. The staff treats every resident with respect and kindness. It's a community where I feel valued and at home. Kindred Total Care has truly enhanced my quality of life in my senior years.",
  },
];
