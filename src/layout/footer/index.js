import React from "react"
import { FacebookWithCircle } from "@styled-icons/entypo-social/FacebookWithCircle"
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle"
import { TwitterWithCircle } from "@styled-icons/entypo-social/TwitterWithCircle"
import { Link } from 'react-router-dom'

import barcode from '../../statics/images/footer-code.png'

function Footer({ t }) {

  return (
    <footer>
    <div class="footer">
        <div class="social-icon">
            <ul class="social-link">
                <li><a href="#"><FacebookWithCircle /></a></li>
                <li><a href="#"><LinkedinWithCircle /></a></li>
                <li><a href="#"><TwitterWithCircle /></a></li>
            </ul>
            <ul class="social-item">
                <li><Link to="learn" href="#">{t('english_through_football')}</Link></li>
                <li><Link to="tour">{t("football_tours")}</Link></li>
                <li><Link to="summer-camp">{t('english_summer_camps')}</Link></li>
                <li><Link to="about">{t('about_us')}</Link></li>
            </ul>
            <hr class="footer-hori" />
            <span>{t('copyrights')}</span>
        </div>
        <div className="barcodes">
          <img src={barcode}/>
          <p>{t('wechat_us')}</p>
        </div>
    </div>
</footer>
  )
}
export default Footer
