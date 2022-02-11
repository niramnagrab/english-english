import React from "react"
import includeIcon1 from "../../statics/images/icons/include-icon-1.png"
import includeIcon2 from "../../statics/images/icons/include-icon-2.png"
import includeIcon3 from "../../statics/images/icons/include-icon-3.png"
import includeIcon4 from "../../statics/images/icons/include-icon-4.png"
import includeIcon5 from "../../statics/images/icons/include-icon-5.png"
import includeIcon6 from "../../statics/images/icons/include-icon-6.png"
import includeIcon7 from "../../statics/images/icons/include-icon-7.png"
import includeIcon8 from "../../statics/images/icons/include-icon-8.png"

const ADVANTAGE = [
  {
    icon: includeIcon1,
    heading: "Billingual on-site assistance",
  },
  {
    icon: includeIcon2,
    heading: "Museum and restaurant reservation",
  },
  {
    icon: includeIcon3,
    heading: "Exclusive match tickets",
  },
  {
    icon: includeIcon4,
    heading: "Behind the scenes stadium tours",
  },
  {
    icon: includeIcon5,
    heading: "Top level coaching",
  },
  {
    icon: includeIcon6,
    heading: "Guided city tours",
  },
  {
    icon: includeIcon7,
    heading: "Friendly matches with local teams",
  },
  {
    icon: includeIcon8,
    heading: "One-to-one feedback ",
  },
]

function InCludedInTour({ t }) {
  return (
    <div className="why-choose-us">
      <h1>Included in your tour</h1>
      <div className="advantage-contaner">
        {ADVANTAGE.map((item, key) => (
          <div key={key} className="advantage-new">
            <span>
              <img src={item.icon} />
            </span>
            <h3>{item.heading}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
export default InCludedInTour
