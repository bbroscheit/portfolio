import React from 'react';
import Navbar from './Navbar.jsx';
import Style from './Header.module.css';

function Header() {
  return (
    <div className={Style.mainContainer}>
        <Navbar />

    </div>
  )
}

export default Header