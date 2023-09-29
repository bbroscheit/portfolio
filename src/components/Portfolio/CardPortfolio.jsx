import React from "react";
import Style from "./CardPortfolio.module.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CardPortfolio({ key, title, tech, image, date, page }) {
 
  return (
    <div className={Style.flipContainer}>
        <div className={Style.cardflip}>
    <Card 
      sx={{ 
        height:500,
        color: "#FFFFFF",
        backgroundColor: 'rgba(20,20,20)',
        backdropFilter: 'blur(15px)'
      }}
        className={Style.front}
      >
      
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="imagen del proyecto"
      />
      <CardContent>
        <Typography variant="h5" 
                    sx={{ marginTop:2 , 
                          marginBottom:2, 
                          color: "#f3c035", 
                          fontWeight:"bold"
        }}>
          <a href={page} target="_blank" rel="noreferrer" className={Style.linkportfolio}>{title}</a>
        </Typography>
      <div className={Style.techContainer}>
        {tech.map( e => <div className={Style.containerTech}>{e}</div>)}
      </div>
      <Typography sx={{ fontSize:14 , fontWeight:"600"}}>Release on : {date}</Typography>
      </CardContent>
    </Card>
    <Card 
      sx={{ 
        height:500,
        color: "#FFFFFF",
        backgroundColor: 'rgba(20,20,20)',
        backdropFilter: 'blur(15px)'
      }}
        className={Style.back}
      >
      <CardContent>
        <Typography variant="h5" 
                    sx={{ marginTop:2 , 
                          marginBottom:2, 
                          color: "#f3c035", 
                          fontWeight:"bold"
        }}>
          Resumen y Caracteristicas
        </Typography>
      
      </CardContent>
    </Card>
      </div>
    </div>
  );
}

export default CardPortfolio;
