import React from 'react';
import Style from './Navbar.module.css';


function Navbar() {

  return (
    <div className={Style.mainContainer}>
      <div className={Style.containerGeneral}> 
        <p className={Style.avatarName}>BBroscheit</p>
      <div className={Style.containerNav}>
        <a href="#about" className={Style.unselected}>Sobre Mí</a>
        <a href="#archivements" className={Style.unselected}>Logros y Trabajos</a>
        <a href="#portfolio" className={Style.unselected}>Portfolio y Proyectos</a>
        <a href="#testimonials" className={Style.unselected}>Testimonios</a>
        </div>
      </div> 
    </div>
  )
}

export default Navbar