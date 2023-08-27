import { Box, Container, Typography } from "@mui/material";
import React from "react";

function PageHeader({ title, image }) {
  return (
    <>
      <Box
        sx={{
          marginTop: "10vh",
          position: "relative",
          width: "100vw",
          height: { xs: "20vh", sm: "40vh" },
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.69), rgba(0, 0, 0, 0.5)), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        />
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifySelf: "flex-start",
              alignItems: "flex-end",
              height: { xs: "20vh", sm: "40vh" },
              pb: 5,
              zIndex: 2,
            }}
          >
            <Typography variant="h1" sx={{ color: "#FFFFFF", fontWeight: 700 }}>
              {title}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default PageHeader;
