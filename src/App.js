import React, { Suspense, lazy, useEffect } from 'react'
import { useTranslation } from "react-i18next"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import WhatsApp from "./components/whatsApp"

import Header from "./layout/header"
import Footer from "./layout/footer"

const Home = lazy(() => import('./pages/home'))
const EnglishThroughFootball = lazy(() => import('./pages/englishThroughFootball'))
const FootballTour = lazy(() => import('./pages/footballTour'))
const SummperCamp = lazy(() => import('./pages/summerCamp'))
const AboutUs = lazy(() => import('./pages/aboutUs'))

function App() {
  const { t } = useTranslation()
  // useEffect(() => {
  //   cons
    
  // })

  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Header t={t} />
        <WhatsApp t={t} />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home t={t} />} />
          <Route exact path="/learn" element={<EnglishThroughFootball t={t} />} />
          <Route exact path="/tour" element={<FootballTour t={t} />} />
          <Route exact path="/summer-camp" element={<SummperCamp t={t} />} />
          <Route exact path="/about" element={<AboutUs t={t} />} />
        </Routes>
        <Footer t={t} />
      </Suspense>

    </BrowserRouter>
  )
}

export default App
