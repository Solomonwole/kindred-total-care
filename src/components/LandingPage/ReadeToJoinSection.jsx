import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ReadyImage from "../../assets/ready-image.webp";

function ReadeToJoinSection() {
  return (
    <>
      <Box
        mt={10}
        sx={{
          position: "relative",
          width: "100vw",
          height: { xs: "300px", sm: "396px" },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: { xs: "300px", sm: "396px" },
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.69), rgba(0, 0, 0, 0.5)), url(${ReadyImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "300px", sm: "396px" },
              }}
            >
              <Typography variant="h2" color="primary" mb={3} align="center">
                Ready To Join The Family?
              </Typography>
              <Button variant="contained" onClick={() => {}}>Get Started</Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default ReadeToJoinSection;
