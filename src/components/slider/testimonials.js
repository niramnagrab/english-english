import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import chou from "../../statics/images/chou.jpg"
import nian from "../../statics/images/nian.jpg"
import maria from "../../statics/images/maria.jpg"
import { QuoteRight } from "@styled-icons/boxicons-solid/QuoteRight"

const REVIEWS = [
  {
    name: "Mo Chou",
    label: "Beijing",
    desc: "description_1",
    image: chou,
  },
  {
    name: "Nian Zhen",
    label: "Hangzhou",
    desc: "description_2",
    image: nian,
  },
  {
    name: "Maria",
    label: "Shanghai",
    desc: "description_3",
    image: maria,
  },
]

const Testimonials = ({t}) => {
  return (
    <div className="review-slider-container">
      <h1>{t('testimonials')}</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        {REVIEWS.map((item) => (
          <div>
            <img src={item.image} />
            <div className="myCarousel">
              <h3>{item.name}</h3>
              <h4>{item.label}</h4>
              <p>{t(item.desc)}</p>
              <QuoteRight />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default Testimonials
