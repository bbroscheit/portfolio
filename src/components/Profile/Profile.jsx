import React from "react";
import Style from "./Profile.module.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Profile() {
  return (
    <div className={Style.mainContainer}>
      <h1>About Me</h1>
      <div className={Style.profileContainer}>
        <div className={Style.imageContainer}>
          <img
            src="https://res.cloudinary.com/de2od3piw/image/upload/v1669759182/pics/IMG_20221120_235030_lqbwl3.jpg"
            alt=""
          />
        </div>
        <div className={Style.textProfileContainer}>
          <p className={Style.textProfile}>
            Soy un Desarrollador Web Full Stack con perfil PERN (PostgreSQL,
            Express, ReactJS, NodeJS). Poseo 600hs de Desarrollo Web en Henry
            donde se simuló un ambiente de trabajo real durante aproximadamente
            9 meses, utilizando metodologías ágiles.<br/> 
            Disfruto participar en proyectos, donde
            se construya en equipo, intercambiando ideas y maneras de lograr el
            objetivo. Me siento cómodo en lugares de liderazgo, guiando a los
            equipos de trabajo y resolviendo problemas. <br/>
            Siempre estoy buscando
            desafíos que demanden nuevos conocimientos, experiencias y que me
            lleven a superarme constantemente. Si coincido con el perfil que
            estas buscando o te gustaria consultarme algo, no dudes en ponerte
            en contacto! 💪
          </p>
          <div>
          
            <ul>
              <li><ProgressBar animated variant="warning" now={45} /></li>
              <li>skill1</li>
              <li>skill1</li>
              <li>skill1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
