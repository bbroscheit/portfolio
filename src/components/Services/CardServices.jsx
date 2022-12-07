import React from 'react';
import Style from "./CardServices.module.css";

function CardServices({key,icon,title,description}) {
  return (
    <div key={key} className={Style.cardContainer}>
      <div>
        {icon}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default CardServices
