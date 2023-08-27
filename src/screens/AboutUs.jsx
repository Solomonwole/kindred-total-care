import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import aboutImage from "../assets/about-image.webp";
import Mission from "../components/about/Mission";
import WhoWeAre from "../components/about/WhoWeAre";
import Team from "../components/about/Team";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader title="About Us" image={aboutImage} />
      <Mission />
      <WhoWeAre />
      <Team />
    </>
  );
}

export default AboutUs;
