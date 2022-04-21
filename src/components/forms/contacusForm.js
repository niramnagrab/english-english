import React from "react"
import Button from "../../layout/buttons"

function ContactUs({ t, heading, buttonText }) {

  const showMessage = (e) => {
    e.preventDefault()
    document.getElementById('FirstName').value = ''
    document.getElementById('Email').value = ''
    document.getElementById('Phone').value = ''
    document.getElementById('showMessage').innerHTML = t("registration_message")
  }

  return (
    <form className="contact-us-container" onSubmit={(e) => showMessage(e)}>
  <p>{t('reserve_your_space_now')}</p>
      
       <input
                  type="text"
                  className="input"
                  required
                  id="FirstName"
                  name="FirstName"
                  placeholder={t('first_name')}
                />

                <input
                  type="email"
                  className="input"
                  required
                  id="Email"
                  name="Email"
                  placeholder={t('subscriber_email')}
                />

                <input
                minlength="6" 
                  type="number"
                  className="input"
                  required
                  id="Phone"
                  name="Phone"
                  placeholder={t('subscriber_number')}
                />

                <div className="button-container">
                <button className="button" aria-label="Trial Class">
                  {t('req_free_trail')}
                </button></div>

                <p className="text-success" id="showMessage"></p>
    </form>
  )
}
export default ContactUs
