import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../components/caregiver/PageHeader";
import SecondSection from "../components/caregiver/SecondSection";
import { Divider } from "@mui/material";
import Cta from "../components/caregiver/Cta";
import Staff from "../components/caregiver/Staff";
import Faq from "../components/caregiver/Faq";

function CareGiver() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Care Giver - Kindred Total Care</title>
        <meta
          name="description"
          content="Our compassionate caregivers at Kindred Total Care are here to support your loved ones with exceptional senior care services. With expertise in personal care and companion care our caregivers ensure the well-being and comfort of your senior loved ones."
        />
        <meta
          property="og:title"
          content="Caregiver Jobs At Kindred Total Care"
        />
        <meta
          property="og:description"
          content="Our compassionate caregivers at Kindred Total Care are here to support your loved ones with exceptional senior care services. With expertise in personal care and companion care our caregivers ensure the well-being and comfort of your senior loved ones."
        />
        <meta
          name="twitter:title"
          content="Caregiver Jobs At Kindred Total Care"
        />
      </Helmet>
      <PageHeader />
      <SecondSection />
      <Divider sx={{ borderColor: "#eeeeee", mb: 5, mt: 5 }} />
      <Cta />
      <Staff />
      <Faq />
    </>
  );
}

export default CareGiver;
