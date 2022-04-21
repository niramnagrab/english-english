import React from "react"
import HomeSection from "../../components/sections/homeSection"
import TextImageContainer from "../../components/sections/textImageContainer"
import Testimonials from "../../components/slider/testimonials"

import learnByFootball from "../../statics/images/contact2.png"
import footBallTour from "../../statics/images/football-ground.png"
import camp from "../../statics/images/camp.png"
import heroBottom from "../../statics/images/kid-football.jpg"
import Button from "../../layout/buttons"
import { Link } from 'react-router-dom'


function Home({ t }) {
  return (
    <div className="home">
      <HomeSection t={t} Hero />
      <div class="section-between-text pos-rel home-whats">
        <p>{t("english_and_football_together")}</p>
      </div>
      <TextImageContainer
        t={t}
        image={learnByFootball}
        className="learn-english"
      >
        <h2>{t("learn_english_through_football")}</h2>
        <p>{t("online_english_classes_delevered")}</p>
        <Link to="learn"> <a>{t("learn_more")}</a> </Link>
      </TextImageContainer>

      <div class="section-between-text courses">
        <h2 class="text-content">
              <Link to="learn">{t("online_classes")} </Link>
              <Link to="summer-camp"><span>{t("summer_camps")}</span></Link>
              <Link to="tour"><span>{t("football_tours")}</span></Link>
        </h2>
      </div>

      <TextImageContainer t={t} image={footBallTour} className="football-tour">
        <h2>{t("we_plan_your_football_tour")}</h2>
        <p>{t("football_tour_text")}</p>
        <a href="https://spsportsacademy-25725429.hubspotpagebuilder.eu/sp-sports-academy-tour-dates"><Button buttonText={t("request_digital_brochure")} /></a>
      </TextImageContainer>

      <div class="section-between-text">
        <p>{t("experiential_learning_through_sport")}</p>
      </div>

      <TextImageContainer t={t} image={camp} className="summer-camp">
        <h2>{t("summer_camp_text_h2")}</h2>
        <p>{t("summer_camp_text")}</p>
        <a href="https://spsportsacademy-25725429.hubspotpagebuilder.eu/sp-sports-academy-tour-dates">{t("check_dates")}</a>
      </TextImageContainer>

      <div class="section-between-text">
        <p>{t("experiential_learning_through_sport")}</p>
      </div>

      <TextImageContainer
        t={t}
        image={heroBottom}
        className="football-tour football-coach"
      >
        <h2 className="black">{t("football_coaching_text_h2")}</h2>
        <p className="black">{t("football_coaching_text_p")}</p>
      </TextImageContainer>
      
      <Testimonials t={t} />
    </div>
  )
}
export default Home
