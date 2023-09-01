import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import HeroD from "../../assets/hero-desktop.webp";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        marginTop: "10vh",
        position: "relative",
        width: "100vw",
        height: { xs: "80vh", sm: "90vh" },
        overflow: "hidden",
      }}
    >
      <Box
        data-aos="flip-down"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.69), rgba(0, 0, 0, 0.5)), url(${HeroD})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Stack
              spacing={2}
              sx={{ width: { xs: "100%", sm: "60%", md: "50%" } }}
              data-aos="fade-down-right"
            >
              <Typography variant="h1" color="primary">
                Think Care Beyond Measures
              </Typography>
              <Typography variant="body1" color="primary">
                Kindred Care embodies the actual definition of limitless care.
                With each client, we create an environment in which the kindred
                spirit grows, guaranteeing that your loved ones receive the best
                possible care and attention. Trust us to keep our promise of
                providing quality care because your well-being is our top
                priority.
              </Typography>
              <Button
                variant="contained"
                sx={{ width: "200px" }}
                onClick={() => navigate("/contact-us")}
              >
                Get in touch
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HeroSection;
