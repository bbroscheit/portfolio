import React from 'react';
import Style from './Navbar.module.css';
import { FaRegUserCircle } from 'react-icons/fa';
function Navbar() {
  return (
    <div className={Style.mainContainer}>
        <ul> 
            <a href="#"><span><FaRegUserCircle /></span><li>About Me</li></a>
            <a href="#"><span><FaRegUserCircle /></span><li>Services</li></a>
            <a href="#"><span><FaRegUserCircle /></span><li>Proyects</li></a>
            <a href="#"><span><FaRegUserCircle /></span><li>Contact Me</li></a>
        </ul>
    </div>
  )
}

export default Navbar