import React, { useEffect } from "react";
import HeroSection from "../components/LandingPage/HeroSection";
import AboutUsSection from "../components/LandingPage/AboutUsSection";
import ServicesSection from "../components/LandingPage/ServicesSection";
import BestCareSection from "../components/LandingPage/BestCareSection";
import ClientReviewSection from "../components/LandingPage/ClientReviewSection";
import ReadeToJoinSection from "../components/LandingPage/ReadeToJoinSection";
import ContactSection from "../components/LandingPage/ContactSection";
import { Helmet } from "react-helmet";

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet></Helmet>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <BestCareSection />
      <ClientReviewSection />
      <ReadeToJoinSection />
      <ContactSection />
    </>
  );
}

export default LandingPage;
