import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";
import aboutImage from "../assets/about-image.png";

function AboutUs() {
  return (
    <>
      <PageHeader title="About Us" image={aboutImage} />
      <Container>About</Container>
    </>
  );
}

export default AboutUs;
