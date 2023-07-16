import { HStack, Tag, TagLabel } from '@chakra-ui/react';


const TagButton = ({ tags }) => {
  

  return (
    <HStack spacing={4}>
      {tags &&
        tags.length > 0 &&
        tags.map((tag, index) => (
          <Tag
            size='md'
            key={index}
            variant='solid'
            colorScheme='teal'
            m={5}            
          >
            <TagLabel>{tag.title}</TagLabel>
          </Tag>
        ))}
    </HStack>
  );
};

export { TagButton };











  
