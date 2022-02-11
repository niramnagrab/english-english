import React from "react"
import TextImageContainer from "../../components/sections/textImageContainer"
import Testimonials from "../../components/slider/testimonials"
import footallTour from "../../statics/images/football-tour.png"
import Seeimg from "../../statics/images/see-img.png"
import camp from "../../statics/images/camp.png"
import Button from "../../layout/buttons"

function SummerCamp({ t }) {
  return (
    <div className="home">
      <TextImageContainer
        t={t}
        image={camp}
        className="hero summer-camp-page"
        textPortion="summper_camp_page_text"
      />
      <div class="section-between-text">
        <p>
          Summer camps for children aged 6-16 in
          <span className="text-red"> Valencia</span> <br />
          SIGN UP NOW. SPACES LIMITED.
        </p>
        <Button buttonText="Reserve your space" />
      </div>
      <TextImageContainer
        t={t}
        image={Seeimg}
        className="top-level"
        textPortion="enjoy_top_level_Coaching"
      />
      <div class="section-between-text">
        <p>
          1-week camps in Valencia
          <br />
          <span className="text-red">June- July 2022</span>
        </p>
      </div>
      <TextImageContainer
        t={t}
        image={footallTour}
        className="football-trip"
        textPortion="oganizing_your_trip"
      />
      <Testimonials t={t} />
    </div>
  )
}
export default SummerCamp
