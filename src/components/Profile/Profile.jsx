import React from "react";
import Style from "./Profile.module.css";
import Skills from "./Skills";
import Title from '../StylishComponents/Title/Title.jsx'
import { SiRedux } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb} from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { GiMovementSensor } from "react-icons/gi";
import { ImBook } from "react-icons/im";
import { MdOutlineAddReaction } from "react-icons/md";
import { ImFire } from "react-icons/im";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaUserNinja } from "react-icons/fa";

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
    name: "Javascript",
    skill: 90,
    icon: <TbBrandJavascript />,
  },
  {
    name: "MongoDB",
    skill: 75,
    icon: <SiMongodb />,
  },
  {
    name: "Postgress",
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
    name: "Compañerismo",
    skill: 90,
    icon: <FaUserFriends />,
  },
  {
    name: "Resiliencia",
    skill: 85,
    icon: <GiMovementSensor />,
  },
  {
    name: "Aprendizaje",
    skill: 90,
    icon: <ImBook />,
  },
  {
    name: "Actitud",
    skill: 85,
    icon: <MdOutlineAddReaction />,
  },
  {
    name: "Voluntad",
    skill: 80,
    icon: <ImFire />,
  },
  {
    name: "Liderazgo",
    skill: 85,
    icon: <AiOutlineThunderbolt />,
  },
  {
    name: "Autodidacta",
    skill: 75,
    icon: <FaUserNinja />,
  },
];

function Profile() {
  return (
    <div className={Style.mainContainer} id="about">
      <Title title={"Sobre mí"}/>
      <div className={Style.profileContainer}>
        <div className={Style.imageContainer}>
          <img
            src="https://res.cloudinary.com/de2od3piw/image/upload/v1669759182/pics/IMG_20221120_235030_lqbwl3.jpg"
            alt=""
          />
        </div>
        <div className={Style.textProfileContainer}>
          <p className={Style.textProfile}>
            Soy un Desarrollador Web Full Stack y Scrum Master que , a dia de hoy, cuenta con un perfil variado con tecnologias como PostgreSQL,
            Express, ReactJS, NodeJS, Angular y MongoDB . <br />
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
      <Title title={"Mis Habilidades"}/>
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
