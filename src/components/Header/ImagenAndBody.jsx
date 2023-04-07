import React from "react";
import Style from "./ImagenAndBody.module.css";
import Avatar from "@mui/material/Avatar";

function ImagenAndBody() {
  return (
    <div className={Style.mainContainer}>
      <Avatar
        alt="imagen de perfil"
        src="https://res.cloudinary.com/de2od3piw/image/upload/v1669759185/pics/IMG_20221120_235115_j47far.jpg"
        sx={{ width: 250, height: 250 }}  
      />
      <h2>I'm Bernardo Broscheit</h2>
      <h3>Full Stack Developer</h3>
      <h3> Let's be a Team!</h3>
    </div>
  );
}

export default ImagenAndBody;
