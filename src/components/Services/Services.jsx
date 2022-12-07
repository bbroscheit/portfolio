import React from 'react';
import CardServices from './CardServices';
import Style from "./Services.module.css";
import {AiFillStar} from "react-icons/ai";

const services = [
  {
    id:1,
    title: "titulo 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in.",
    icon:<AiFillStar />
  },
  {
    id:2,
    title: "titulo 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in.",
    icon:<AiFillStar />
  },
  {
    id:3,
    title: "titulo 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in.",
    icon:<AiFillStar />
  },
  {
    id:4,
    title: "titulo 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in.",
    icon:<AiFillStar />
  },
  {
    id:5,
    title: "titulo 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in.",
    icon:<AiFillStar />
  },
  {
    id:1,
    title: "titulo 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in.",
    icon:<AiFillStar />
  }
]


function Services() {
  return (
    <div className={Style.mainContainer}>
      <h1>services</h1>
      <div className={Style.cardContainer}>
        {services && services.map( e => <CardServices 
          key={e.id}
          title={e.title}
          description={e.description}
          icon={e.icon}
        />)}
      </div>
    </div>
  )
}

export default Services
