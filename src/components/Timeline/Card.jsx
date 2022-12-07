import React from 'react';
import Style from "./Card.module.css";

function Card({name,time,text,icon}) {
  return (
    <div className={Style.mainContainer}>
        <div className={Style.infoContainer}>
            <h1>{name}</h1>
            <h3>{time}</h3>
            <p>{text}</p>
        </div>
        <div className={Style.iconContainer}>
            {icon}
        </div>
    </div>
  )
}

export default Card
