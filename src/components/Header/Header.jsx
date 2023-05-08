import React from 'react';
import Navbar from './Navbar.jsx';
import Style from './Header.module.css';
import ImagenAndBody from './ImagenAndBody.jsx';

function Header() {
  return (
   <div className={Style.mainContainer}>
      <div className={Style.mainContainerOpacity}>
          <Navbar />
          <ImagenAndBody />
      </div>
    </div>
  )
}

export default Header