import React from "react";
import Style from "./CardPortfolio.module.css";
import { Card, CardBody } from '@chakra-ui/react';
import { Image, Stack, Heading, Text} from '@chakra-ui/react';

function CardPortfolio({ key, title, tech, image, date }) {
  
  return (
   
    <div className={Style.card}>
    <Card maxW="sm" key={key} minHeight="350px" color="white">
      <CardBody>
        <Image
          src={image}
          alt="Portada"
          borderRadius="lg"
          maxHeight="220px"
          
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" margin="10px">{title}</Heading>
          <Text>
            {tech.map( e => <div className={Style.containerTech}>{e}</div>)}
          </Text>
          
          <Text margin="10px">
            Release on : {date}
          </Text>
        </Stack>
      </CardBody>
      
    </Card>
    </div>
  );
}

export default CardPortfolio;
