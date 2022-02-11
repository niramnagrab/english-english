import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import chou from "../../statics/images/chou.jpg"
import nian from "../../statics/images/nian.jpg"
import maria from "../../statics/images/maria.jpg"
import { QuoteRight } from "@styled-icons/boxicons-solid/QuoteRight"

const REVIEWS = [
  {
    name: "MO CHOU",
    label: "Beijing",
    desc: "Ben is a fantastic teacher. You can see his passion for football and English in his classes. They are always fun, dynamic, and engaging.",
    image: chou,
  },
  {
    name: "NIAN ZHEN",
    label: "Hangzhou",
    desc: "Carlos is an excellent coach and teacher. He does everything with passion and energy. My children have been studying with him for 5 years, and I have seen an incredible improvement in their confidence and ability with English.",
    image: nian,
  },
  {
    name: "MARIA",
    label: "Shanghai",
    desc: "Joely always goes over and above, with so much interest in her students. She tries to make us get the most we possibly can from the course. If I had to rate her from 0-10, I would give her a 10. Excellent!",
    image: maria,
  },
]

const Testimonials = () => {
  return (
    <div className="review-slider-container">
      <h1>Testimonials</h1>
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
              <p>{item.desc}</p>
              <QuoteRight />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default Testimonials
