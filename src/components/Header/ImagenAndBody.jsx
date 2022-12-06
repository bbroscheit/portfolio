import React from 'react';
import Style from "./ImagenAndBody.module.css";

function ImagenAndBody() {
  return (
    <div className={Style.mainContainer}>
      <img src="https://res.cloudinary.com/de2od3piw/image/upload/v1669759185/pics/IMG_20221120_235115_j47far.jpg" alt="imagen principal" />
              <h2>I'm Bernardo</h2>
              <h3>Full Stack Developer</h3>
              <a href="#">Let's be a Team!</a>
    </div>
  )
}

export default ImagenAndBody
