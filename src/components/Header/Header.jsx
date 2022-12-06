import React from 'react';
import Navbar from './Navbar.jsx';
import Style from './Header.module.css';
import ImagenAndBody from './ImagenAndBody.jsx';
import { useState } from 'react';



function Header() {
  
  const [state, setstate] = useState(true);

  return (
   state === "false" ? 
    <div className={Style.mainContainer}>
        <div className={Style.imageCenter}>
        
          <div className={Style.box}>
            <div className={Style.content}>
                <img src="https://res.cloudinary.com/de2od3piw/image/upload/v1669759185/pics/IMG_20221120_235115_j47far.jpg" alt="imagen principal" />
                <h2>I'm Bernardo <br /><span>Full Stack Developer</span></h2>
                <a href="#">Contact Me</a>
            </div>
          </div>
          
          <Navbar />
        </div>
    </div>
    : <div className={Style.mainContainer}>
          <Navbar />
          <ImagenAndBody />
      </div>
  )
}

export default Header