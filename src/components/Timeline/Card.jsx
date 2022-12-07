import React from 'react';
import Style from "./Card.module.css";

function Card({id,name,time,text,icon}) {

  return (
    <div className={Style.mainContainer}>
        {id%2 !== 0 && <div className={Style.iconContainer}>
            {icon}
        </div> }
        <div className={Style.infoContainer}>
            <h1>{name}</h1>
            <h3>{time}</h3>
            <p>{text}</p>
        </div>
        {id%2 === 0 && <div className={Style.iconContainer}>
            {icon}
        </div> }
    </div>
  )
}

export default Card
