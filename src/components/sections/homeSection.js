import React from "react"
import ContactUsForm from '../forms/contacusForm'
import ImageSlider from '../slider/imageSlider'

function HomeSection({ t }) {
  return (
    <div className="home-hero">
      
      <ImageSlider t={t} Hero />
      <ContactUsForm 
      t={t}
      heading="Name" 
      buttonText="Phone number"
      />


</div>

  )
}
export default HomeSection
