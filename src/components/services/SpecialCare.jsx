import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import DemImage from "../../assets/dem.png";
import { useNavigate } from "react-router-dom";

function SpecialCare() {
  const navigate = useNavigate();
  return (
    <>
      <Box mt={10}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center">
            Special Care
          </Typography>

          <Stack mt={5} spacing={2}>
            <Typography variant="h4">Talk Care, Talk Kindred Care</Typography>
            <Typography variant="body1">
              We understand there are special care cases, and our promise
              remains that we are your plug for care services. Aside from our
              regular care packages, we also handle some peculiar care cases.
              Your peace of mind is our priority, and we're thrilled to be your
              dependable support system as you make unforgettable memories
              together.
            </Typography>
          </Stack>

          <Box mt={10}>
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
                  src={DemImage}
                  alt="about"
                  style={{ width: "75%" }}
                  data-aos="flip-left"
                />
              </Box>

              <Box>
                <Typography
                  variant="h2"
                  color="secondHeader"
                  data-aos="fade-right"
                >
                  Dementia Care
                </Typography>
                <Box mt={3}>
                  <Typography variant="body1" mb={3} data-aos="fade-right">
                    Dealing with dementia can be challenging due to the many
                    changes it brings to everyday routines. Our main objective
                    is to make sure that those who have dementia live
                    comfortably and securely by giving them consistently
                    excellent care from professionals who are aware of their
                    unique needs. Because we provide individualized care 24
                    hours a day, seven days a week to ease symptoms, our
                    specialized dementia home care sets us apart from nursing
                    homes. We have trained our staff and improved our services
                    so that clients with dementia may live an independent,
                    high-quality life at home while being surrounded by the love
                    and support of their family and friends. In dementia care,
                    we offer a variety of vital services to assist you,
                    including
                  </Typography>
                  <Stack spacing={2}>
                    {data.map((item, index) => {
                      return <LineComponent key={index} text={item.text} />;
                    })}

                    <Typography
                      variant="h4"
                      sx={{
                        background:
                          "linear-gradient(180deg, #0DBBB4 0%, rgba(48, 184, 50, 0.44) 100%)",
                        color: "rgba(48, 184, 50, 0.44) ",
                        backgroundClip: "text",
                        webkitBackgroundClip: "text",
                        webkitTextFillColor: "transparent",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/contact-us")}
                    >
                      Reach out to us today to learn more about our dementia
                      care services.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default SpecialCare;

const LineComponent = ({ text }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      data-aos="fade-right"
    >
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #0DBBB4 0%, rgba(48, 184, 50, 0.44) 100%)",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        }}
      />
      <Typography variant="body1">{text}</Typography>
    </Stack>
  );
};

const data = [
  { text: "A dementia carer committed to your health and happiness" },
  { text: "Meal planning and preparation" },
  { text: "Personal care and bathing assistance" },
  { text: "Assistance with domestic duties" },
  { text: "Organizing and attending trips and appointments" },
  { text: "Ensure that your prescriptions are taken appropriately." },
  { text: "Being a pleasant and friendly companion to spend time with" },
];
