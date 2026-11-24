import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut eaque, dolorem obcaecati soluta, earum corporis expedita cum a quo vitae reprehenderit quam velit fuga! Repudiandae dolor earum recusandae porro?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
             <h2>COMPANY</h2>
             <ul>
                <li>home</li>
                <li>About us</li>
                <li>delivery</li>
                <li>privacy policy</li>
             </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 9360580623</li>
                <li>vasuvadivel10@gmail.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className='footer-copyright'>Copyright 2026 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
