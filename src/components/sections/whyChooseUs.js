import React from "react"
import choose1 from '../../statics/images/icons/choose-1.svg'
import choose2 from '../../statics/images/icons/choose-2.svg'
import choose3 from '../../statics/images/icons/choose-3.svg'
import choose4 from '../../statics/images/icons/choose-4.svg'
import choose5 from '../../statics/images/icons/choose-5.svg'


const ADVANTAGE = [
  {
    icon : choose1,
    heading : "advantage_heading_1",
    description : "advantage_description_1"
  },
  {
    icon : choose2,
    heading : "advantage_heading_2",
    description : "advantage_description_2"
  },
  {
    icon : choose3,
    heading : "advantage_heading_3",
    description : "advantage_description_3"
  },
  {
    icon : choose4,
    heading : "advantage_heading_4",
    description : "advantage_description_4"
  },
  {
    icon : choose5,
    heading : "advantage_heading_5",
    description : "advantage_description_5"
  }
]

function WhyChooseUs({t}) {
  return (
    <div className="why-choose-us">
      <h1><span><hr /></span>{t('why_choose_us')} <span><hr  /></span></h1>
      
      <div className="advantage-contaner">
      {ADVANTAGE.map((item, key)=>(
        <div key={key} className="advantage">
            <img src={item.icon} />
            <h2>{t(item.heading)}</h2>
            <p>{t(item.description)}</p>
        </div>)
      )
      }
      </div>
     
    </div>
  )
}
export default WhyChooseUs
