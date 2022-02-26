import React from "react"
import { useTranslation } from "react-i18next"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import WhatsApp from "./components/whatsApp"

import Home from "./pages/home"
import Header from "./layout/header"
import Footer from "./layout/footer"
import EnglishThroughFootball from "./pages/englishThroughFootball"
import FootballTour from "./pages/footballTour"
import SummperCamp from "./pages/summerCamp"
import AboutUs from "./pages/aboutUs"

function App() {
  const { t } = useTranslation()

  return (
    <BrowserRouter>
      <Header t={t} />
      <WhatsApp t={t} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/learn" element={<EnglishThroughFootball t={t} />} />
        <Route path="/tour" element={<FootballTour t={t} />} />
        <Route path="/summer-camp" element={<SummperCamp t={t} />} />
        <Route path="/about" element={<AboutUs t={t} />} />
      </Routes>
      <Footer t={t} />
    </BrowserRouter>
  )
}

export default App
