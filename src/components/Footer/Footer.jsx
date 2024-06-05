import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' >
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo2} alt="" className='logo2' />
            <p>Setiap resep dirancang untuk memenuhi kebutuhan nutrisi si kecil dan membantu dalam tahap tumbuh kembangnya</p>
            <div className="footer-social-icons">
              <img src={assets.instagram_icon} alt="" />
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>EasyMPASI</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@myeasympasi.com</li>
            </ul>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright 2024 © myEasyMPASI.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
