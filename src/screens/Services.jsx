import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import serviceImage from "../assets/service-image.webp";
import FirstSection from "../components/services/FirstSection";
import SpecialCare from "../components/services/SpecialCare";
import Physical from "../components/services/Physical";
import ContactSection from "../components/LandingPage/ContactSection";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader title="Services" image={serviceImage} />
      <FirstSection />
      <SpecialCare />
      <Physical />
      <ContactSection />
    </>
  );
}

export default Services;
