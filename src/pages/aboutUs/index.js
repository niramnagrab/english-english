import React from "react"
import TextImageContainer from "../../components/sections/textImageContainer"
import ContactUsForm from "../../components/forms/contacusForm"

import player from '../../statics/images/player.png'
function AboutUs({ t }) {
  return (
    <div className="home about-us-page-container">
      <TextImageContainer
        t={t}
        image={player}
        className="hero about-us-page"
        textPortion="about_us_text"
      />
      {/* <h1 className="contact-us-heading">Contact us</h1> */}
      <ContactUsForm
        t={t}
        heading="contact_us"
        buttonText="Request free trial"
      />
    </div>
  )
}
export default AboutUs
