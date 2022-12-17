import React from "react";
import Style from "./CardPortfolio.module.css";
import { Card, CardHeader, CardBody } from '@chakra-ui/react';
import { Image, Stack, Heading, Text} from '@chakra-ui/react';

function CardPortfolio({ key, title, tech, image, date }) {
  return (
    // <div key={key}>

    //   <h1>{title}</h1>
    //   <h3>{tech}</h3>
    //   <img src={image} alt="portada" />
    //   <h3>{date}</h3>
    // </div>
    <Card maxW="sm" key={key} minHeight="350px">
      <CardBody>
        <Image
          src={image}
          alt="Portada"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>
            {tech}
          </Text>
          {/* <Text color="blue.600" fontSize="2xl"> */}
          <Text>
            Release on : {date}
          </Text>
        </Stack>
      </CardBody>
      {/* <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  );
}

export default CardPortfolio;
