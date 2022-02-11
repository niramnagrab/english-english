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
    image: img1,
  },
  {
    text: "visit_major_cities",
    image: img2,
  },
  {
    text: "visit_major_cities",
    image: img3,
  },
  {
    text: "visit_major_cities",
    image: img4,
  },
  {
    text: "visit_major_cities",
    image: img5,
  }
]

const HOME_SLIDERIMG = [
  {
    text: "visit_major_cities",
    image: homeBg,
  },
  {
    text: "visit_major_cities",
    image: img2,
  },
  {
    text: "visit_major_cities",
    image: img5,
  }
]

function ImageSlider({ t, Hero }) {
  return (
<Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
      >
        {Hero ? HOME_SLIDERIMG.map((item) => (
           <div className="hero home-section" style={{ backgroundImage: `url(${item.image})` }}>   
            <div className="home-text">
              <h2>{t("summer_football_camps")}</h2>
              <h1>in English</h1>
              <span className="home-val-text">Valencia, </span>
              <span className="home-text-date">June - July 2022</span>
            </div>
          </div>
        )) :
         SLIDERIMG.map((item) => (
           <div className="ground-section" style={{ backgroundImage: `url(${item.image})` }}>
           <div className="ground-text"
               dangerouslySetInnerHTML={{ __html: t(item.text) }}
           />
           
         </div>
        ))}

  
    </Carousel>

  )
}
export default ImageSlider