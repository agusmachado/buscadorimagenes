import { useState, useEffect } from 'react';
import { Input, InputRightElement, InputGroup, Stack, IconButton, FormControl, Flex, Box, Grid } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { CardProp } from '../Card/CardProp';
import API_KEY from '../config';



const obtenerResultadosAleatorios = async () => {
  
  const URL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=10`;

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const obtenerDetallesDeFoto = async (nuevosResultados) => {
  
  const resultadosConExif = await Promise.all(
    nuevosResultados.map(async (resultadoItem) => {
      const ID = resultadoItem.id;
      const URL = `https://api.unsplash.com/photos/${ID}?client_id=${API_KEY}&exif=true`;

      try {
        const response = await axios.get(URL);
        const resultadoConExif = {
          ...resultadoItem,
          exif: response.data.exif,
        };
        return resultadoConExif;
      } catch (error) {
        console.error(error);
        return resultadoItem;
      }
    })
  );

  return resultadosConExif;
};

const InputLupita = () => {
  const [valor, setValor] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    obtenerResultadosAleatorios().then((data) => setResultados(data));
  }, []);

  const handleBuscar = async () => {
    
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}`;

    try {
      const response = await axios.get(URL);
      const nuevosResultados = response.data.results.map((resultado) => ({
        ...resultado,
        id: resultado.id,
        exif: null,
      }));

      const resultadosConExif = await obtenerDetallesDeFoto(nuevosResultados);
      setResultados(resultadosConExif);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Flex align="center" justify="center">
        <Stack spacing={2} w={['100%', '100%', '50%']}>
          <FormControl>
            <InputGroup>
              <Input
                type="text"
                placeholder="Ej: Paisaje, Skate, Ciudad, etc..."
                size="lg"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                border="none"
                borderColor="transparent"
                _hover={{
                  borderColor: 'darkgray'
                }}
                _focus={{
                  boxShadow: 'none',
                  borderColor: 'darkgray'
                }}
                borderBottom="2px solid darkgray"
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  onClick={handleBuscar}
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  h="100%"
                  w="100%"
                  mr="0.5rem"
                  mt="0.5rem"
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Stack>
      </Flex>

      
        {resultados.length > 0 && <CardProp resultado={resultados} />}
        
      
    </Box>
  );
};

export { InputLupita }
