
import { Card, CardBody, Image, Heading, Text, Divider, Flex, Avatar, Box, AspectRatio} from '@chakra-ui/react'


const CardProp = ({ resultado }) => {
  console.log(resultado); // Mueve el console.log fuera del bloque JSX

  


  return (
    <>
      {resultado.map(({ id, alt_description, urls, description, user, exif}) => (
        <Card key={id}>
          <CardBody>
            <AspectRatio ratio={1}>
              <Image src={urls.regular} />
            </AspectRatio>
            <Text>
              <strong>Ubicación:</strong> {user.location}
            </Text>
            <Heading size='md'>              
              {alt_description.toUpperCase()}
            </Heading>
            <Text minH='20' fontSize='sm'>
              {description}
            </Text>
            <Text>
              <strong>Cámara:</strong> {exif && exif.name ? exif.name : 'No disponible'}
            </Text>
            <Flex>
            <Avatar name='' src={user.profile_image.medium} />
            <Box
              p={5}
            >
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










  
  