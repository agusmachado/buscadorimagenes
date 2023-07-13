import { Card, CardHeader, CardBody, CardFooter, Image } from '@chakra-ui/react'



const CardProp = ({ resultado }) => {
  return (
    <>
      {resultado.map(({ id, alt_description, urls}) => (
        <Card key={id}>
          <CardBody>
            <Image src={urls.thumb}/>
            {/* Otro contenido de la card */}{alt_description} 
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export { CardProp };



  
  