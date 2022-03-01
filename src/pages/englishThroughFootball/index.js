import React from "react"
import TextImageContainer from "../../components/sections/textImageContainer"
import WhyChooseUs from "../../components/sections/whyChooseUs"
import Steps from "../../components/sections/steps"

import learnByFootball from "../../statics/images/learn-through-football.png"
import onlineEnglish from "../../statics/images/online-english.png"
import contact2 from "../../statics/images/contact2.png"

function EnglishThroughFootball({ t }) {
  return (
    <div className="home">
      <TextImageContainer
        t={t}
        image={onlineEnglish}
        className="hero online-english"
      >
        <h1>{t("learn_english_online")}</h1>
        <p className="online">{t("learn_english_online_2")}</p>
        <p>{t("online_english_text")}</p>
        <button>{t("free_demo_class")}</button>
      </TextImageContainer>
      <div class="section-between-text">
        <p>
          {t('our_students_learn_how_to_communicate')}
        </p>
      </div>
      <TextImageContainer
        t={t}
        image={learnByFootball}
        className="contactus-now"
        image2={contact2}
        button={t('contact_us_now')}
      />
      <div class="section-between-text">
        <p>
          {t('we_have_seen_proven_results')}
        </p>
      </div>

      <WhyChooseUs t={t} />
      <Steps t={t} />
    </div>
  )
}
export default EnglishThroughFootball
