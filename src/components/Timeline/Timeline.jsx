import React from "react";
import Style from "./Timeline.module.css";
import Cards from "./Card.jsx";
import {AiFillStar} from "react-icons/ai";


const timelineCards = [
  {
    name: "card 1",
    time: "12-12-1212",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in. Nullam ipsum lorem, ultrices sed libero et, euismod commodo diam. Etiam massa sem, tempor eget vulputate nec, tincidunt egestas ipsum. Curabitur et volutpat sapien. Donec iaculis ultrices mauris vel tempor. Etiam et ligula erat",
    icon:<AiFillStar />
  }, 
  {
    name: "card 2",
    time: "12-12-1212",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in. Nullam ipsum lorem, ultrices sed libero et, euismod commodo diam. Etiam massa sem, tempor eget vulputate nec, tincidunt egestas ipsum. Curabitur et volutpat sapien. Donec iaculis ultrices mauris vel tempor. Etiam et ligula erat",
    icon:<AiFillStar />
  },
  {
    name: "card 3",
    time: "12-12-1212",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in. Nullam ipsum lorem, ultrices sed libero et, euismod commodo diam. Etiam massa sem, tempor eget vulputate nec, tincidunt egestas ipsum. Curabitur et volutpat sapien. Donec iaculis ultrices mauris vel tempor. Etiam et ligula erat",
    icon:<AiFillStar />
  },
  {
    name: "card 4",
    time: "12-12-1212",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in. Nullam ipsum lorem, ultrices sed libero et, euismod commodo diam. Etiam massa sem, tempor eget vulputate nec, tincidunt egestas ipsum. Curabitur et volutpat sapien. Donec iaculis ultrices mauris vel tempor. Etiam et ligula erat",
    icon:<AiFillStar />
  },
  {
    name: "card 5",
    time: "12-12-1212",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in. Nullam ipsum lorem, ultrices sed libero et, euismod commodo diam. Etiam massa sem, tempor eget vulputate nec, tincidunt egestas ipsum. Curabitur et volutpat sapien. Donec iaculis ultrices mauris vel tempor. Etiam et ligula erat",
    icon:<AiFillStar />
  }, 
  {
    name: "card 6",
    time: "12-12-1212",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nibh mi, ut porta turpis interdum in. Nullam ipsum lorem, ultrices sed libero et, euismod commodo diam. Etiam massa sem, tempor eget vulputate nec, tincidunt egestas ipsum. Curabitur et volutpat sapien. Donec iaculis ultrices mauris vel tempor. Etiam et ligula erat",
    icon:<AiFillStar />
  }, 
];

function Timeline() {
  return (
    <div>
      <h1>Timeline</h1>
      <div className={Style.mainContainer}></div>
          <hr className={Style.verticalLine}/>
      { timelineCards && timelineCards.map(
        e => <div className={Style.cardPosition} >  <Cards 
          key={e.name}
          name={e.name}
          time={e.time}
          text={e.text}
          icon={e.icon}
        /></div>
      )

      }
    </div>
  );
}

export default Timeline;
