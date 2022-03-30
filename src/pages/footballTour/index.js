import React from "react"
import TextImageContainer from "../../components/sections/textImageContainer"
import InCludedInTour from "../../components/sections/includedInTour"

import footballGround from "../../statics/images/football-ground.png"
import footballTeam from "../../statics/images/kids-training.jpg"
import ImageSlider from "../../components/slider/imageSlider"

function FootballTour({ t }) {
  return (
    <div className="home">
      <TextImageContainer
        t={t}
        image={footballGround}
        className="hero football-trip"
      >
        <h2 className="coral">{t("We_take_care_organising_trip")}</h2>
        <p>{t("oganizing_trip")}</p>
      </TextImageContainer>
      <div class="section-between-text">
        <p>
          {t("We_specialise_in_tours_in")}{" "}
          <span className="text-red">{t("spain")}</span> {t("and_the")}{" "}
          <span className="text-red"> UK</span>
        </p>
      </div>
      <TextImageContainer t={t} image={footballTeam} className="football-team">
        <h2>
          <a>{t("click_here")}</a> {t("football_team_text")}
        </h2>
      </TextImageContainer>
      <div class="section-between-text">
        <p>
          {t("We_specialise_in_tours_in")}{" "}
          <span className="text-red">{t("valencia")}</span> {t("and_the")}{" "}
          <span className="text-red"> UK</span>
        </p>
      </div>
      <div className="ground-slider">
        <ImageSlider t={t} />
      </div>
      <InCludedInTour t={t} />
      <TextImageContainer
        t={t}
        className="experimental-trip"
        textPortion={`<h3>${t("experimental_trip")}</h3>`}
        textPortion2Class="bg-red"
      >
        <h3>
          {t("visit_major_cities")}{" "}
          <span class="text-white">{t("visit_major_cities_cities")}</span>{" "}
          {t("and")} <span class="text-white"> {t("valencia")}</span>
        </h3>
      </TextImageContainer>
    </div>
  )
}
export default FootballTour
