import React from 'react'
import Style from './Footer.module.css'
import { SiGithub } from 'react-icons/si';
import { ImLinkedin } from 'react-icons/im';
import { ImWhatsapp } from 'react-icons/im';
import { TiSocialInstagram } from 'react-icons/ti';


function Footer() {
  return (
    <div className={Style.footerContainer}>
       <div className={Style.socialContainer}>
          <a className={Style.icons} href="https://www.github.com/bbroscheit" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
          <a className={Style.icons} href="https://www.linkedin.com/in/bernardo-broscheit-94b567144/"><ImLinkedin /></a>
          <a className={Style.icons} href="https://wa.link/08cecp"><ImWhatsapp /></a>
          {/* <a className={Style.iconsInstagram} href="https://www.instagram.com/bbroscheit/"><TiSocialInstagram /></a> */}
       </div>
       <h5>- Realizado por <span className={Style.avatarName}>BBroscheit</span> -</h5>
    </div>
  )
}

export default Footer
