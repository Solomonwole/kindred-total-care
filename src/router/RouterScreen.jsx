import React from "react";
import LandingPage from "../screens/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/ContactUs";
import Services from "../screens/Services";
import CareGiver from "../screens/CareGiver";

function RouterScreen() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/care-giver" element={<CareGiver />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RouterScreen;
