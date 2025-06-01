// src/App.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

import './i18n'; // Импортируй свою конфигурацию i18n

import "./index.css";
import Navbar from "./components/NavBar";
import Services from "./components/Services";
import GlassCardShowcase from "./components/GlassCardShowcase";
import FAQ from "./components/FAQ.JSX";
import ContactSection from "./components/ContactSection";
import AboutUs from "./components/AboutUs";
import AccessibilityButton from "./components/AccessibilityButton";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import GlitchIntro from "./components/GlitchIntro";

function App() {
  const { i18n } = useTranslation(); // Инициализируем хук useTranslation

  useEffect(() => {
    // Устанавливаем атрибут dir на HTML-элементе при изменении языка
    // i18n.dir() возвращает 'rtl' для RTL языков (как 'he') и 'ltr' для LTR языков (как 'en', 'ru')
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n.language]); // Эффект будет запускаться при смене языка

  return (
    <>
      <CustomCursor />
      <Navbar />
      <GlitchIntro />
      <HeroSection/>
      <GlassCardShowcase />
      <Services/>
      <AboutUs/>
      <FAQ />
      <ContactSection />
      <Footer />
   
    </>
  );
}

export default App;