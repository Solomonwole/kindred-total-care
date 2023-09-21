import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Cta() {
  const navigate = useNavigate();
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Typography>A professional and friendly care provider</Typography>
          <Stack
            mt={2}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              spacing={3}
            >
              <Box
                sx={{
                  borderBottom: "1px solid rgba(48, 184, 50, 0.44)",
                  width: { xs: "100%", sm: "217px" },
                }}
              />
              <Typography width={{ xs: "100%", sm: "50%" }}>
                At Kindred Total Care, we select Caregivers who are passionate
                about providing in home care to those in need on a daily basis.
              </Typography>
            </Stack>
            <Button
              variant="contained"
              sx={{
                width: "250px",
                borderRadius: "0px",
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
              }}
              onClick={() => navigate("/contact-us")}
            >
              BECOME A CAREGIVER
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default Cta;
