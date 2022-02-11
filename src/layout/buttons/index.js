import React, { useState } from "react"


function Button({ t, buttonText }) {
 
  return (
    <div className="button-container">
       <button>
          {buttonText}
       </button>
    </div>
  )
}
export default Button
