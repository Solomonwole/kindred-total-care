import React from "react";
import PageHeader from "../components/PageHeader";
import { Container } from "@mui/material";
import serviceImage from "../assets/service-image.png";

function Services() {
  return (
    <>
      <PageHeader title="Services" image={serviceImage} />
      <Container>Services</Container>
    </>
  );
}

export default Services;
