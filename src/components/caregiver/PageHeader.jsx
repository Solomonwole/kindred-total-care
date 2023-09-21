import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CareG from "../../assets/careg.jpeg";

function PageHeader() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: { xs: "20vh", sm: "40vh" },
          overflow: "hidden",
        }}
      >
        <Box
          data-aos="flip-down"
          sx={{
            position: "relative",
            // top: 0,
            // left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.69), rgba(0, 0, 0, 0.5)), url(${CareG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // zIndex: -1,
          }}
        ></Box>
      </Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifySelf: "flex-start",
            alignItems: "flex-end",
            pb: 5,
            zIndex: 2,
            position: "relative",
            marginTop: 5,
          }}
        >
          <Box
            sx={{
              background: "#da0e0e",              width: { xs: "100%", md: "450px" },
              // marginTop: -25,
              boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.664)",
              zIndex: 20,
              position: "absolute",
            }}
          >
            <Box
              sx={{
                background: "#F6FCFC",
                // height: "298px",
                maxHeight: "",
                p: 2,
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#0DBBB4", fontWeight: 700 }}
              >
                We don&apos;t just give care We take care as well.
              </Typography>
              <Typography
                variant="body1"
                //   sx={{ }}
              >
                We don’t just give care We take care as well.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default PageHeader;
