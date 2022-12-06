import React from 'react';
import Style from './Navbar.module.css';
import { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

function Navbar() {

  const [state, setstate] = useState(true);

  return (
    state === false ?
    <div className={Style.mainContainer}>
        <ul> 
            <a href="#"><span><FaRegUserCircle /></span><li>About Me</li></a>
            <a href="#"><span><FaRegUserCircle /></span><li>Services</li></a>
            <a href="#"><span><FaRegUserCircle /></span><li>Portfolio</li></a>
            <a href="#"><span><FaRegUserCircle /></span><li>Contact Me</li></a>
        </ul>
    </div>
    :
    <div className={Style.mainContainerMinor}>
        <ul>
          <li><a href="#">About Me</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact Me</a></li>
        </ul>
    </div>
  )
}

export default Navbar