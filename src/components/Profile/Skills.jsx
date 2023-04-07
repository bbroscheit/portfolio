import React from "react";
import Style from "./Skills.module.css";
import LinearProgress from '@mui/material/LinearProgress';


function Skills(props) {
  return (
    <div className={Style.mainContainer}>
      <div className={Style.containerNames}>
        <span className={Style.skillsIcons}>{props.icon}</span>
        <h4>{props.name}</h4>
      </div>
      <div className={Style.containerBars}>
        <LinearProgress variant="determinate" value={props.skill} />
      </div>
    </div>
  );
}

export default Skills;
