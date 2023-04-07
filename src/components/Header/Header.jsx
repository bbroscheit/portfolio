import React from 'react';
import Navbar from './Navbar.jsx';
import Style from './Header.module.css';
import ImagenAndBody from './ImagenAndBody.jsx';

function Header() {
  return (
   <div className={Style.mainContainer}>
          <Navbar />
          <ImagenAndBody />
    </div>
  )
}

export default Header