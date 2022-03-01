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
      <TextImageContainer t={t} image={camp} className="hero summer-camp-page">
        <h2>
          {t("summer_football")}
          <span>
            <br />
            {t("camps")}
            <br />
          </span>
          {t("in_english")}
        </h2>
        <p>
          <span class="text-white">{t("2022_registration")}</span> <br />
          {t("open_now")}!
        </p>
        <Button buttonText={t("reserve_your_space")} />
      </TextImageContainer>
      <div class="section-between-text">
        <p>
          {t("summer_camps_for_children")}
          <span className="text-red"> {t("valencia")}</span> <br />
          {t("sign_up_now_spaces_limited")}
        </p>
        <Button buttonText={t("reserve_your_space_now")} />
      </div>
      <TextImageContainer t={t} image={Seeimg} className="top-level">
        <h2>
          {t("enjoy_top_level_Coaching")}
      
        </h2>
        <Button buttonText={t("check_dates")} />
      </TextImageContainer>
      <div class="section-between-text">
        <p>
          {t("1_week_in_valencia")}
          <br />
          <span className="text-red">{t("jan_july_2020")}</span>
        </p>
      </div>
      <TextImageContainer
        t={t}
        image={footallTour}
        className="football-trip"
        // textPortion="oganizing_your_trip"
      >
        <h2><span class='text-red'>{t('uefa')}</span> & <span class='text-red'>{t('celta')}</span> {t('qualified_football_coaches_teachers')}</h2>
        </TextImageContainer>
      <Testimonials t={t} />
    </div>
  )
}
export default SummerCamp
