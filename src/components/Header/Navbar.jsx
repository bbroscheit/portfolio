import React from 'react';
import Style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


function Navbar() {

  return (
    <div className={Style.mainContainer}>
      <div className={Style.containerNav}>
        <NavLink to="#about" className={Style.unselected} >About Me</NavLink>
        <NavLink to="/" className={Style.unselected}>Archivements</NavLink>
        <NavLink to="/" className={Style.unselected}>Portfolio</NavLink>
        <NavLink to="/" className={Style.unselected}>Testimonials</NavLink>
        </div>
    </div>
  )
}

export default Navbar