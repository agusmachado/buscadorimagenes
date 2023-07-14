
import { useState, useEffect } from 'react'
import { Input, InputRightElement, InputGroup, Stack, IconButton, FormControl, Flex, Box, Grid } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { CardProp } from './CardProp';

const ApiCombinada = () => {
   
  const [valor, setValor] = useState('');
  const [resultados, setResultados] = useState([]);  

  useEffect(() => {
    const obtenerResultadosAleatorios = async () => {


      const API_KEY = 'NuJtJPXVsxa0fKb2deVo-Ah08FdeE7xyi3kBDqfg6YI';
      const URL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=10&`;      

      try {
        const response = await axios.get(URL);
        setResultados(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerResultadosAleatorios();
  }, []);

  const handleBuscar = async () => {
    const API_KEY = 'NuJtJPXVsxa0fKb2deVo-Ah08FdeE7xyi3kBDqfg6YI';
    
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}`;    

    try {
        const response = await axios.get(URL);
        const resultadosConId = response.data.results.map((resultado) => ({
          ...resultado,
          id: resultado.id, // Agregar la propiedad 'id' con el valor del ID de la foto
        }));
        setResultados(resultadosConId);
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
                type='text'
                placeholder='Ej: Paisaje, Skate, Ciudad, etc...'
                size='lg'
                value={valor}
                onChange={e => setValor(e.target.value)}
                border='none'
                borderColor='transparent'
                _hover={{
                  borderColor: 'darkgray'
                }}
                _focus={{
                  boxShadow: 'none',
                  borderColor: 'darkgray'
                }}
                borderBottom='2px solid darkgray'
              />
              <InputRightElement width='4.5rem'>
                <IconButton
                  onClick={handleBuscar}
                  aria-label='Search database'
                  icon={<SearchIcon />}
                  h='100%'
                  w='100%'
                  mr='0.5rem'
                  mt='0.5rem'
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Stack>
      </Flex>

      <Grid templateColumns={['1fr', '1fr ', '1fr 1fr', '1fr 1fr 1fr']} gap={4} mt={8}>
        <CardProp resultado={resultados} />
      </Grid>
      
    </Box>
  );
};


export { ApiCombinada }