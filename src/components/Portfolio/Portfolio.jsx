import React from "react";
import { useState } from "react";
import CardPortfolio from "./CardPortfolio";
import Style from "./Portfolio.module.css";
import { Select } from "@chakra-ui/react";
// import { TbChevronsDownLeft } from "react-icons/tb";

const portfolio = [
  {
    id: 1,
    title: "titulo1",
    tech: ["javascript", "react", "redux"],
    image:
      "https://res.cloudinary.com/de2od3piw/image/upload/v1668989651/pics/videogames4_rkw415.png",
    date: "1-12-2020",
  },
  {
    id: 2,
    title: "titulo2",
    tech: ["javascript", "react", "redux", "node.js", "postgres", "express"],
    image:
      "https://res.cloudinary.com/de2od3piw/image/upload/v1668989651/pics/videogames4_rkw415.png",
    date: "1-11-2020",
  },
  {
    id: 3,
    title: "titulo3",
    tech: ["javascript", "react", "redux", "material UI"],
    image:
      "https://res.cloudinary.com/de2od3piw/image/upload/v1668989651/pics/videogames4_rkw415.png",
    date: "1-10-2020",
  },
  {
    id: 4,
    title: "titulo4",
    tech: ["javascript", "react", "redux", "chakra UI", "node.js", "mongo DB"],
    image:
      "https://res.cloudinary.com/de2od3piw/image/upload/v1668989651/pics/videogames4_rkw415.png",
    date: "1-09-2020",
  },
  {
    id: 5,
    title: "titulo5",
    tech: ["javascript", "angular"],
    image:
      "https://res.cloudinary.com/de2od3piw/image/upload/v1668989651/pics/videogames4_rkw415.png",
    date: "1-08-2020",
  },
  {
    id: 6,
    title: "titulo6",
    tech: ["html", "css"],
    image:
      "https://res.cloudinary.com/de2od3piw/image/upload/v1668989651/pics/videogames4_rkw415.png",
    date: "1-07-2020",
  },
];

function Portfolio() {

  const [portfolioFilter, setPortfolioFilter] = useState(portfolio);
  let portfolioBackup = portfolio;
    
  console.log(portfolioFilter,"antes del filter")
  
  //let portfolioBackup = portfolio;

  let technologies = [];
  for (let i = 0; i < portfolio.length; i++) {
    for (let j = 0; j < portfolio[i].tech.length; j++) {
      if (!technologies.includes(portfolio[i].tech[j])) {
        technologies.push(portfolio[i].tech[j]);
      }
    }
  }

  function handleSelect(e){
    
    
    portfolioBackup = portfolio.filter( f => f.tech.includes(e.target.value))
    // const finalPortfolio= portfolioFilter.map(e=>e)
    // console.log(portfolioBackup, " soy el portfolio filtrado")
    
    setPortfolioFilter(portfolioBackup)
    
    // console.log(portfolioFilter, "soy el estado portfolioFilter")
    
  }

  return (
    <div className={Style.mainContainer}>
      <h1>PORTFOLIO</h1>
      <h3>algun subtitulo</h3>
      <Select placeholder='Select option' onChange={handleSelect}>
          {technologies && technologies.map( e => <option value={e}>{e}</option>)}
      </Select>
      
      <div className={Style.cardContainer}>
        {portfolioFilter &&
          portfolioFilter.map((e) => (
            <CardPortfolio
              key={e.id}
              title={e.title}
              tech={e.tech}
              image={e.image}
              date={e.date}
            />
          ))}
      </div>
    </div>
  );
}

export default Portfolio;
