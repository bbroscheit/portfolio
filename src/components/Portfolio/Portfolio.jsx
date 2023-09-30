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
    features:`
    - Filtrado y ordenamiento
    - Autenticación de usuarios
    - Dashboard de Administrador
    - Mailing
    - CRUD completo   
    `,
    detail:`Este proyecto fue realizado con un grupo de 8 personas, de diferentes nacionalidades como proyecto final de la carrera de FullSatck Developer quedando entre los 10 mejores.`
    
  },
  {
    id: 2,
    type:"portfolio",
    title: "VideoGames App",
    tech: ["Javascript", "React", "Redux"],
    image:
      "https://res.cloudinary.com/de2od3piw/image/upload/v1668989651/pics/videogames1_qhqtbm.png",
    date: "1-11-2022",
    page:"https://pi-videogames-orcin.vercel.app/",
    features:`
    - Filtrado y ordenamiento
    - Sistema de Búsqueda
    - Consumo de API externa
    - CRUD completo   
    `,
    detail:`Proyecto individual en SoyHenry Bootcamp fue un arduo trabajo pero gracias a él adquiri muchos de los conocimientos que poseo hoy en día.`
  },
  {
    id: 3,
    type:"proyecto",
    title: "Totem de Recepción",
    tech: ["Javascript", "React", "Next.js",  "Node.js" , "Express"],
    image:
      "https://res.cloudinary.com/de2od3piw/image/upload/v1696014628/IMG_20230915_155134_i0be8b.jpg",
    date: "27-07-2023",
    page:"",
    features:`
    - Conexión con telefonia IP
    - Consumo de aplicacíon externa (SIPCLI)
       
    `,
    detail:`Mi primer poyecto formando parte del equipo de Sistemas de Basani SA , una aplicación simple que permite llamar a diferentes internos mediante el uso de una interfaz gráfica.
    Este proyeco supuso un ahorro de $ 700.000 aprox frente a otras opciones de proveedores externos.`
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
              features={e.features}
              detail={e.detail}
            />
          ))}
      </div>
     
    </div>
  );
}

export default Portfolio;
