import React from "react"
import whatsapp from "../statics/images/whatsapp.png"

function WhatsApp({ t }) {
  return (
    <div className="whats-app">
      <a href="https://wa.me/+34 640 30 63 62" target="_blank">
        <img src={whatsapp} />
      </a>
    </div>
  )
}
export default WhatsApp
