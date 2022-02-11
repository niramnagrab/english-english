import React from "react"

const STEP = [
  {
    number : "1",
    heading : "Register",
    description : "Follow the link below and register your details to request a trial class"
  },
  {
    number : "2",
    heading : "We contact you",
    description : "Your dedicated course advisor will promptly contact you directly via WhatsApp to request more information and organise the time of the trial class"
  },
  {
    number : "3",
    heading : "Download Zoom",
    description : "Download the Zoom application on your preferred device.  We will also be using this application for your free trial lesson"
  },
  {
    number : "4",
    heading : "We allocate the teams",
    description : "After the trial class, we will assign a level and allocate the perfect group based on age and level"
  }
]

function Steps({t}) {
  return (
    <div className="start-game">
      <h1>Get started with these 4 simple steps</h1>
      
      <div className="game-step-container">
      {STEP.map((item, key)=>(
       <div class="step-item">
           <div class="step-circl">
               <span>{item.number}</span>
           </div>
       <h2>{item.heading}</h2>
       <p>{item.description}</p>
   </div>
        )
      )
      }
      </div>
     
    </div>
  )
}
export default Steps
