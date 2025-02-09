import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import facebook from '../../assets/facebook_icon.png'
import instagram from '../../assets/instagram_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footerIcons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal of Notices</li>
        <li>Cookie Preferrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer