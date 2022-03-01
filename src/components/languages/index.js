import React, { useEffect } from "react"
import i18next from "i18next"
import Cookies from "js-cookie"
import { ChevronCompactDown } from '@styled-icons/bootstrap/ChevronCompactDown'
const languages = [
  {
    code: "en",
    name: "English",
    countery_code: "gb",
  },
  {
    code: "es",
    name: "Español",
    countery_code: "es",
  },
  {
    code: "cn",
    name: "中文",
    countery_code: "cn",
  }
]

function LanguageSelector() {
  const currentLanguageCode = Cookies.get("i18next") || "en"
  const currentLanguage = languages.find(g => g.code === currentLanguageCode)


  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content")
        var i
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i]
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show")
          }
        }
      }
    }
  })

  const handLangSelector = () => {
    document.getElementById("myDropdown").classList.toggle("show")
    console.log("ddd")
  }

  return (
    <div className="lang-container">
      <div className="dropdown">
        <button onClick={handLangSelector} className="dropbtn">
        <span className={`flag-icon flag-icon-${currentLanguage.countery_code}`} />
          {currentLanguage.name}
          <ChevronCompactDown />
        </button>
        <div id="myDropdown" className="dropdown-content">
          {languages.map(({ code, name, countery_code }) => (
            <a
              key={countery_code}
              onClick={() => i18next.changeLanguage(code)}
              disabled={code === currentLanguageCode}
              className="lang-flag-btn"
            >
             <span className={`flag-icon flag-icon-${countery_code}`} />
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageSelector
