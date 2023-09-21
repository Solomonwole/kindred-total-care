import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import aboutImage from "../assets/about-image.webp";
import Mission from "../components/about/Mission";
import WhoWeAre from "../components/about/WhoWeAre";
import Team from "../components/about/Team";
import { Helmet } from "react-helmet";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us - Kindred Total Care</title>
        <meta
          name="description"
          content="We are, at our core, a group of caregivers who care for you like family. Our main goal is to offer top-notch home care. We get in head first because it is what we do when your loved ones need help. Our techniques are distinctive, and we never compromise on quality. Our concern is genuine and our care is unfeigned."
        />
      </Helmet>
      <PageHeader title="About Us" image={aboutImage} />
      <Mission />
      <WhoWeAre />
      <Team />
    </>
  );
}

export default AboutUs;
