import React from "react"
import choose1 from '../../statics/images/icons/choose-1.svg'
import choose2 from '../../statics/images/icons/choose-2.svg'
import choose3 from '../../statics/images/icons/choose-3.svg'
import choose4 from '../../statics/images/icons/choose-4.svg'
import choose5 from '../../statics/images/icons/choose-5.svg'


const ADVANTAGE = [
  {
    icon : choose1,
    heading : "Professionally developed system",
    description : "A selective team of experienced teachers and qualified football coaches have developed the course content"
  },
  {
    icon : choose2,
    heading : "Engagement in the online classroom",
    description : "The context of football in an engaging and motivating enviroment encourages our students to achieve faster results"
  },
  {
    icon : choose3,
    heading : "Effective methods",
    description : "Our method focuses on our student's ability and confidence with spoken English, we apply a system of repetition and interactive, visual activites"
  },
  {
    icon : choose4,
    heading : "Selective team of teachers",
    description : "We have a talented team of native, qualified teachers who create energy and fun in the online classroom"
  },
  {
    icon : choose5,
    heading : "Personalised service",
    description : "Our selective team are here to personally respond and look after you throughout the process"
  }
]

function WhyChooseUs({t}) {
  return (
    <div className="why-choose-us">
      <h1><span><hr /></span>Why choose us <span><hr  /></span></h1>
      
      <div className="advantage-contaner">
      {ADVANTAGE.map((item, key)=>(
        <div key={key} className="advantage">
            <img src={item.icon} />
            <h2>{item.heading}</h2>
            <p>{item.description}</p>
        </div>)
      )
      }
      </div>
     
    </div>
  )
}
export default WhyChooseUs
