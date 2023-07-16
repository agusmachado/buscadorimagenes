import { Box, Grid, Card, CardBody, Image, Heading, Text, Divider, Flex, Avatar, AspectRatio } from '@chakra-ui/react';
import { TagButton } from './TagButton';

const CardProp = ({ resultado }) => {
  console.log(resultado); // Mueve el console.log fuera del bloque JSX

  return (
    <Box>
       <Grid templateColumns={['1fr', '1fr ', '1fr 1fr', '1fr 1fr 1fr']} gap={4} mt={8}>
      {resultado.map(({ id, alt_description, urls, description, user, exif, tags }) => (
        <Card key={id}>
          <CardBody>
            <AspectRatio ratio={1}>
              <Image src={urls.regular} />
            </AspectRatio>
            <Text>
              <strong>Ubicación:</strong> {user?.location || 'No disponible'}
            </Text>
            <Heading size='md'>              
              {alt_description.toUpperCase()}
            </Heading>
            <Text minH='20' fontSize='sm'>
              {description}
            </Text>
            <Text>
              <strong>Cámara:</strong> {exif?.name || 'No disponible'}
            </Text>

            <TagButton tags={tags} />

            <Flex>
              <Avatar name='' src={user.profile_image.medium} />
              <Box p={5}>
                <Heading size='sm'>{user.name}</Heading>
                <Text size='sm'>{user.bio}</Text>
              </Box>
            </Flex>
            <Divider />
          </CardBody>
        </Card>
      ))}
      </Grid>
    </Box>
  );
};

export { CardProp };














  
  