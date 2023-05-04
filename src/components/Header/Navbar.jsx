import React from 'react';
import Style from './Navbar.module.css';


function Navbar() {

  return (
    <div className={Style.mainContainer}>
      <div className={Style.containerGeneral}> 
        <p className={Style.avatarName}>BBroscheit</p>
      <div className={Style.containerNav}>
        <a href="#about" className={Style.unselected}>About Me</a>
        <a href="#archivements" className={Style.unselected}>Archivements</a>
        <a href="#portfolio" className={Style.unselected}>Portfolio</a>
        <a href="#testimonials" className={Style.unselected}>Testimonials</a>
        </div>
      </div> 
    </div>
  )
}

export default Navbar