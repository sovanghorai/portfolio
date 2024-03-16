import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sovan </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="Https://facebook.com"><FaFacebookF /></a>
        <a href="Https://instagram.com"><FaInstagram /></a>
        <a href="Https://twitter.com"><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Sovan ghorai. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
