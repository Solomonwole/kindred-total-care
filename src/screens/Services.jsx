import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import serviceImage from "../assets/service-image.webp";
import FirstSection from "../components/services/FirstSection";
import SpecialCare from "../components/services/SpecialCare";
import Physical from "../components/services/Physical";
import ContactSection from "../components/LandingPage/ContactSection";
import { Helmet } from "react-helmet";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Our Services - Kindred Total Care</title>
        <meta
          name="description"
          content="We understand there are special care cases, and our promise remains that we are your plug for care services. Aside from our regular care packages, we also handle some peculiar care cases. Your peace of mind is our priority, and we're thrilled to be your dependable support system as you make unforgettable memories together."
        />
      </Helmet>
      <PageHeader title="Services" image={serviceImage} />
      <FirstSection />
      <SpecialCare />
      <Physical />
      <ContactSection />
    </>
  );
}

export default Services;
