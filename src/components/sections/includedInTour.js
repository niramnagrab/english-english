import React from "react"
import includeIcon1 from "../../statics/images/icons/include-icon-1.png"
import includeIcon2 from "../../statics/images/icons/include-icon-2.png"
import includeIcon3 from "../../statics/images/icons/include-icon-3.png"
import includeIcon4 from "../../statics/images/icons/include-icon-4.png"
import includeIcon5 from "../../statics/images/icons/include-icon-5.png"
import includeIcon6 from "../../statics/images/icons/include-icon-6.png"
import includeIcon7 from "../../statics/images/icons/include-icon-7.png"
import includeIcon8 from "../../statics/images/icons/include-icon-8.png"

const INCLUDED_IN_TOUR = [
  {
    icon: includeIcon1,
    heading: "include_heading_1",
  },
  {
    icon: includeIcon2,
    heading: "include_heading_2",
  },
  {
    icon: includeIcon3,
    heading: "include_heading_3",
  },
  {
    icon: includeIcon4,
    heading: "include_heading_4",
  },
  {
    icon: includeIcon5,
    heading: "include_heading_5",
  },
  {
    icon: includeIcon6,
    heading: "include_heading_6",
  },
  {
    icon: includeIcon7,
    heading: "include_heading_7",
  },
  {
    icon: includeIcon8,
    heading: "include_heading_8",
  },
]

function InCludedInTour({ t }) {
  return (
    <div className="why-choose-us tour-background">
      <h1>Included in your tour</h1>
      <div className="advantage-contaner">
        {INCLUDED_IN_TOUR.map((item, key) => (
          <div key={key} className="advantage-new">
            <span>
              <img src={item.icon} />
            </span>
            <h3>{t(item.heading)}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
export default InCludedInTour
