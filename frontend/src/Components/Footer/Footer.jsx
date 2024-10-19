import React from 'react'
import './Footer.css'
import logo_big from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo_big} alt="" />
            <h1>SHOPPER</h1>
        </div>

        <ul className="footer-menu">
            <li>Company</li>
            <li>Product</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-social-icon-item">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-social-icon-item">
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className="footer-social-icon-item">
                <img src={pintester_icon} alt="" />
            </div>
        </div>

        <hr/>
        <div className="copyright">
            <p>Copyright 2024 @ Colightech - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
