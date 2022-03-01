import React from "react"

const STEP = [
  {
    number : "1",
    heading : "step_heading_1",
    description : "step_description_1"
  },
  {
    number : "2",
    heading : "step_heading_2",
    description : "step_description_2"
  },
  {
    number : "3",
    heading : "step_heading_3",
    description : "step_description_3"
  },
  {
    number : "4",
    heading : "step_heading_4",
    description : "step_description_4"
  }
]

function Steps({t}) {
  return (
    <div className="start-game">
      <h1>{t('get_started_with_these_steps')}</h1>
      
      <div className="game-step-container">
      {STEP.map((item, key)=>(
       <div class="step-item">
           <div class="step-circl">
               <span>{item.number}</span>
           </div>
       <h2>{t(item.heading)}</h2>
       <p>{t(item.description)}</p>
   </div>
      ))}
      </div>
     
    </div>
  )
}
export default Steps
