import React from "react";
import Style from "./Skills.module.css";
import { Progress } from '@chakra-ui/react';

function Skills(props) {
  return (
    <div className={Style.mainContainer}>
      <div className={Style.containerNames}>
        <span>{props.icon}</span>
        <h5>{props.name}</h5>
      </div>
      <div className={Style.containerBars}>
        <Progress 
            hasStripe 
            colorScheme="yellow"
            width="90%"
            size="sm"
            backgroundColor="gray.900"
            borderRadius="full" 
            value={props.skill} 
        />
      </div>
    </div>
  );
}

export default Skills;
