import { useState, useEffect } from 'react'
import { Input, InputRightElement, InputGroup, Stack, IconButton, FormControl, Flex, Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { CardProp } from './CardProp';



const InputLupita = () => {
    const [valor, setValor] = useState('');
    const [resultados, setResultados] = useState([]);

      useEffect(() => {
        const obtenerResultadosAleatorios = async () => {
          const API_KEY = 'Rh0MrNKHaRC-Z6pYhdcILROTKt-H1hYv6GW9YMj8SeA';
          const URL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=10`;

          try {
            const response = await axios.get(URL);
            /* console.log(response.data); */
            setResultados(response.data);
          } catch (error) {
            console.error(error);
          }
        };

        obtenerResultadosAleatorios();
      }, []);

      const handleBuscar = async () => {
        const API_KEY = 'Rh0MrNKHaRC-Z6pYhdcILROTKt-H1hYv6GW9YMj8SeA';
        const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}`;

        try {
          const response = await axios.get(URL);
          /* console.log(response.data); */
          setResultados(response.data.results);
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

      {/* <div>
        {resultados.map(resultado => (
          <div key={resultado.id}>{resultado.color}</div>
        ))}
      </div> */}

      <CardProp resultado = {resultados.map((objeto) => {
        return objeto
        //console.log(objeto.alt_description);
        
        //return null; // Agrega un retorno nulo para evitar una advertencia de React
      }) }/>
    </Box>
  );
};

export { InputLupita }