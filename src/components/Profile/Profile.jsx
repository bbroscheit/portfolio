import React from "react";
import Style from "./Profile.module.css";
import Skills from "./Skills";
// import Timeline from '../Timeline/Timeline.jsx';
import { SiRedux } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMaterialui } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const hardSkills = [
  {
    name: "React",
    skill: 90,
    icon: <SiReact />,
  },
  {
    name: "Redux",
    skill: 85,
    icon: <SiRedux />,
  },
  {
    name: "javascript",
    skill: 90,
    icon: <TbBrandJavascript />,
  },
  {
    name: "Material UI",
    skill: 75,
    icon: <SiMaterialui />,
  },
  {
    name: "postgress",
    skill: 70,
    icon: <SiPostgresql />,
  },
  {
    name: "Node.js",
    skill: 85,
    icon: <SiNodedotjs />,
  },
  {
    name: "Express",
    skill: 70,
    icon: <SiExpress />,
  },
];

const softSkills = [
  {
    name: "React",
    skill: 90,
    icon: <SiReact />,
  },
  {
    name: "Redux",
    skill: 85,
    icon: <SiRedux />,
  },
  {
    name: "javascript",
    skill: 90,
    icon: <TbBrandJavascript />,
  },
  {
    name: "Material UI",
    skill: 75,
    icon: <SiMaterialui />,
  },
  {
    name: "postgress",
    skill: 70,
    icon: <SiPostgresql />,
  },
  {
    name: "Node.js",
    skill: 85,
    icon: <SiNodedotjs />,
  },
  {
    name: "Express",
    skill: 70,
    icon: <SiExpress />,
  },
];

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
            Express, ReactJS, NodeJS). <br />
            Disfruto participar en proyectos, donde se construya en equipo,
            intercambiando ideas y maneras de lograr el objetivo. Me siento
            cómodo en lugares de liderazgo, guiando a los equipos de trabajo y
            resolviendo problemas. <br />
            Siempre estoy buscando desafíos que demanden nuevos conocimientos,
            experiencias y que me lleven a superarme constantemente. Si coincido
            con el perfil que estas buscando o te gustaria consultarme algo, no
            dudes en ponerte en contacto! 💪
          </p>
        </div>
      </div>
      <h1>My Skills</h1>
      <div className={Style.skillsContainer}>
        
        <div className={Style.skills}>
          
          {hardSkills &&
            hardSkills.map((e) => (
              <Skills
                name={e.name}
                skill={e.skill}
                icon={e.icon}
                key={e.name}
              />
            ))}
        </div>
        <div className={Style.skills}>
          
          {softSkills &&
            softSkills.map((e) => (
              <Skills
                name={e.name}
                skill={e.skill}
                icon={e.icon}
                key={e.name}
              />
            ))}
        </div>
      </div>
      
    </div>
  );
}

export default Profile;
