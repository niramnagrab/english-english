import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import img1 from "../../statics/images/ground.png"
import img2 from "../../statics/images/football-ground.png"
import img3 from "../../statics/images/camp.png"
import img4 from "../../statics/images/football-team.png"
import img5 from "../../statics/images/see-img.png"
import homeBg from "../../statics/images/home-background.png"

const SLIDERIMG = [
  {
    text: "visit_major_cities",
    text_cities: "visit_major_cities_cities",
    image: img1,
  },
  {
    text: "visit_major_cities",
    text_cities: "visit_major_cities_cities",
    image: img2,
  },
  {
    text: "visit_major_cities",
    text_cities: "visit_major_cities_cities",
    image: img3,
  },
  {
    text: "visit_major_cities",
    text_cities: "visit_major_cities_cities",
    image: img4,
  },
  {
    text: "visit_major_cities",
    text_cities: "visit_major_cities_cities",
    image: img5,
  },
]

const HOME_SLIDERIMG = [
  {
    text_h2: "summer_football_camps",
    text_h1: "in_english",
    text_span1: "valencia",
    text_span2: "jan_july_2020",
    image: homeBg,
  },
  {
    text_h2: "summer_football_camps",
    text_h1: "in_spanish",
    text_span1: "valencia",
    text_span2: "july_sep_2020",
    image: img2,
  },
  {
    text_h2: "summer_football_camps",
    text_h1: "in_spanish",
    text_span1: "valencia",
    text_span2: "july_sep_2020",
    image: img5,
  },
]

function ImageSlider({ t, Hero }) {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      dots={true}
      autoPlay={true}
      interval={2000}
    >
      {Hero
        ? HOME_SLIDERIMG.map((item) => (
            <div
              className="hero home-section"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="home-text">
                <h2>{t(item.text_h2)}</h2>
                <h1>{t(item.text_h1)}</h1>
                <span className="home-val-text">{t(item.text_span1)}, </span>
                <span className="home-text-date">{t(item.text_span2)}</span>
              </div>
            </div>
          ))
        : SLIDERIMG.map((item) => (
            <div
              className="ground-section"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="ground-text">
                <h3>
                  {t(item.text)}{" "}
                  <span class="text-white">{t(item.text_cities)}</span>{" "}
                  {t("and")} <span class="text-white"> {t("valencia")}</span>
                </h3>
              </div>
            </div>
          ))}
    </Carousel>
  )
}
export default ImageSlider
