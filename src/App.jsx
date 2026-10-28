import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./i18n";
import { applyLanguageDirection } from "./i18n";
import "./index.css";

import Navbar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import GlassCardShowcase from "./components/GlassCardShowcase.jsx";
import Services from "./components/Services.jsx";
import AboutUs from "./components/AboutUs.jsx";
import FAQ from "./components/FAQ.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.resolvedLanguage || i18n.language || "en";
    applyLanguageDirection(lang);
  }, [i18n.language, i18n.resolvedLanguage]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <GlassCardShowcase />
        <Services />
        <AboutUs />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
