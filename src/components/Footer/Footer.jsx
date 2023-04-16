import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../StylishComponents/Title/Title'
import style from './Footer.module.css'
import { SiGithub } from 'react-icons/si';
import { ImLinkedin } from 'react-icons/im';
import { ImWhatsapp } from 'react-icons/im';
import { TiSocialInstagram } from 'react-icons/ti';


function Footer() {
  return (
    <div className={style.footerContainer}>
       <Title title="Contact Me"/>
       <div className={style.socialContainer}>
          <a className={style.icons} href="https://www.github.com/bbroscheit" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
          <a className={style.icons} href="https://www.linkedin.com/in/bernardo-broscheit-94b567144/"><ImLinkedin /></a>
          <a className={style.icons} href="https://www.linkedin.com/in/bernardo-broscheit-94b567144/"><ImWhatsapp /></a>
          <Link className={style.iconsInstagram} to="/"><TiSocialInstagram /></Link>
       </div>
    </div>
  )
}

export default Footer
