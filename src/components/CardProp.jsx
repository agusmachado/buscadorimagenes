import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text, Divider, Flex, Avatar, Box } from '@chakra-ui/react'


const CardProp = ({ resultado }) => {
  console.log(resultado); // Mueve el console.log fuera del bloque JSX

  return (
    <>
      {resultado.map(({ id, alt_description, urls, description, user}) => (
        <Card key={id}>
          <CardBody>
            <Image src={urls.regular} />
            <Heading size='md'>              
              {alt_description.toUpperCase()}
            </Heading>
            <Text>
              {description}
            </Text>
            <Text>
              
            </Text>
            <Flex>
            <Avatar name='' src={user.profile_image.medium} />
            <Box>
              <Heading size='sm'>{user.name}</Heading>
              <Text size='sm'>{user.bio}</Text>
            </Box>
            </Flex>
            <Divider/>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export { CardProp };










  
  