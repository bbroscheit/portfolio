import React from "react";
import { useState } from "react";
import CardPortfolio from "./CardPortfolio";
import Style from "./Portfolio.module.css";
import Title from '../StylishComponents/Title/Title.jsx';


const portfolio = [
  {
    id: 1,
    type:"portfolio",
    title: "HenryMarket App",
    tech: ["Javascript", "React", "Redux", "Node.js", "Postgres", "Express","MaterialUI"],
    image:
    "https://res.cloudinary.com/de2od3piw/image/upload/v1673913518/pics/henryMarket1_fn1bo7_63f684modify.png",
    date: "1-12-2022",
    page:"https://pg-henrymarket.vercel.app/",
    detail:""
  },
  {
    id: 2,
    type:"portfolio",
    title: "VideoGames App",
    tech: ["Javascript", "React", "Redux"],
    image:
      "https://res.cloudinary.com/de2od3piw/image/upload/v1668989651/pics/videogames1_qhqtbm.png",
    date: "1-11-2022",
    page:"https://pi-videogames-orcin.vercel.app/"
  },
  {
    id: 3,
    type:"proyecto",
    title: "Totem de Recepción",
    tech: ["Javascript", "React", "Next.js"],
    image:
      "https://res.cloudinary.com/de2od3piw/image/upload/v1696014628/IMG_20230915_155134_i0be8b.jpg",
    date: "27-07-2023",
    page:""
  },
  
];

function Portfolio() {

  const [portfolioFilter, setPortfolioFilter] = useState(portfolio);

  return (
    <div className={Style.mainContainer} id="portfolio">
      <Title title={"Porfolio y Proyectos"}/>
      
        <div className={Style.cardContainer}>
          {portfolioFilter &&
          portfolioFilter.map((e) => (
            <CardPortfolio
              key={e.id}
              title={e.title}
              tech={e.tech}
              image={e.image}
              date={e.date}
              page={e.page}
            />
          ))}
      </div>
     
    </div>
  );
}

export default Portfolio;
