import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sovanghorai" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/sovanghorai" target="_blank"><FaGithub /></a>
        <a href="https://dribbble.com" target="_blank"><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocials
