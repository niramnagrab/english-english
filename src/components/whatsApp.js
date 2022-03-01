import React from "react"
import whatsapp from "../statics/images/whatsapp2.png"

function WhatsApp({ t }) {
  return (
    <div className="whats-app">
      {/* <a href="https://wa.me/34 664 12 45 14" target="_blank"> */}
      <a href="https://wa.me/34664124514?text=I'm%20interested%20in%20your%20English%20course" target="_blank">
      
        <img src={whatsapp} />
        <p className="msg">{t('whatsapp_us')}</p>
      </a>
    </div>
  )
}
export default WhatsApp
