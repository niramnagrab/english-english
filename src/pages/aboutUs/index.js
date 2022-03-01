import React from "react"
import TextImageContainer from "../../components/sections/textImageContainer"
import ContactUsForm from "../../components/forms/contacusForm"

import player from "../../statics/images/player.png"
function AboutUs({ t }) {
  return (
    <div className="home about-us-page-container">
      <TextImageContainer
        t={t}
        image={player}
        className="hero about-us-page"
      >
        <h2>{t('about_us')}</h2>
        <br />
        <p>
          {t('about_us_text_1')}
          <br />
          <br /> 
          {t('about_us_text_2')}
        </p>
      </TextImageContainer>
      <ContactUsForm
        t={t}
        heading="contact_us"
        buttonText={t('request_free_trial')}
      />
    </div>
  )
}
export default AboutUs
