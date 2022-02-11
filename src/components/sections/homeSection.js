import React from "react"
import ContactUsForm from '../forms/contacusForm'
import ImageSlider from '../slider/imageSlider'

function HomeSection({ t }) {
  return (
    <div className="home-hero">
      
      <ImageSlider t={t} Hero />
      <ContactUsForm 
      t={t}
      heading="reserve_your_space_now" 
      buttonText="Send your details"
      />


</div>

  )
}
export default HomeSection
