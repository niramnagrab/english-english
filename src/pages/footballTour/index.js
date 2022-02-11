import React from "react"
import TextImageContainer from "../../components/sections/textImageContainer"
import InCludedInTour from "../../components/sections/includedInTour"

import footballGround from "../../statics/images/football-ground.png"
import footballTeam from "../../statics/images/football-team.png"
import ImageSlider from "../../components/slider/imageSlider"

function FootballTour({ t }) {
  return (
    <div className="home">
      <TextImageContainer
        t={t}
        image={footballGround}
        className="hero football-trip"
        textPortion="oganizing_trip"
      />
      <div class="section-between-text">
        <p>
          We specialise in tours in <span className="text-red">Valencia</span>{" "}
          and the <span className="text-red"> UK</span>
        </p>
      </div>
      <TextImageContainer
        t={t}
        image={footballTeam}
        className="football-team"
        textPortion="football_team_text"
      />
      <div class="section-between-text">
        <p>
          We specialise in tours in <span className="text-red">Valencia</span>{" "}
          and the <span className="text-red"> UK</span>
        </p>
      </div>
      <div className="ground-slider">
      <ImageSlider t={t} />
      </div>
      <InCludedInTour t={t} />
      <TextImageContainer
        t={t}
        className="experimental-trip"
        textPortion="experimental_trip"
        textPortion2="experimental_trip2"
       
      />
    </div>
  )
}
export default FootballTour
