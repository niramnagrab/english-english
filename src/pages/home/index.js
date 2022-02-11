import React from "react"
import HomeSection from "../../components/sections/homeSection"
import TextImageContainer from "../../components/sections/textImageContainer"
import Testimonials from "../../components/slider/testimonials"

import whatsapp from "../../statics/images/whatsapp.png"
import learnByFootball from "../../statics/images/learn-through-football.png"
import footBallTour from "../../statics/images/football-tour.png"
import camp from "../../statics/images/camp.png"

function Home({ t }) {
  return (
    <div className="home">
      <HomeSection t={t} Hero />
      <div class="section-between-text pos-rel home-whats">
        <p>
          English and football together are the two complementary keys that
          spark conversations between strangers, create communities and unite
          nationalities
        </p>
        
      </div>
      <TextImageContainer
        t={t}
        image={learnByFootball}
        className="learn-english"
        textPortion="learn_english_text"
      />

      <div class="section-between-text courses">
        <h2 class="text-content">
          <span>Online Classes </span>
          <span>Summer Camps</span>
          <span>Football Tours</span>
        </h2>
      </div>

      <TextImageContainer
        t={t}
        image={footBallTour}
        className="football-tour"
        textPortion="football_tour_text"
      />
      <div class="section-between-text">
        <p>Experiential learning through a sport that unites millions</p>
      </div>
      <TextImageContainer
        t={t}
        image={camp}
        className="summer-camp"
        textPortion="summer_camp_text"
      />
      <div class="section-between-text">
        <p>Experiential learning through a sport that unites millions</p>
      </div>

      <TextImageContainer
        t={t}
        image={footBallTour}
        className="football-tour football-coach"
        textPortion="football_coaching_text"
      />
      <Testimonials t={t} />
    </div>
  )
}
export default Home
