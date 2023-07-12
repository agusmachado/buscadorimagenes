import { Input, InputRightElement, InputGroup, Stack, IconButton, FormControl, Flex } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const InputLupita = () => {
    
    
    
    
    
    return(
        <Flex align="center" justify="center">
            <Stack spacing={2} w={['100%', '100%', '50%']}>
                <FormControl>
                    <InputGroup>
                        <Input
                        type='text'
                        placeholder='Ej: Paisaje, Skate, Ciudad, etc...'
                        size='lg'          
                        border='none' // Quitamos los bordes laterales y superiores
                        borderColor='transparent' // Hacemos transparente el borde por defecto
                        _hover={{
                            borderColor: 'darkgray' // Mostramos el borde inferior al pasar el cursor
                        }}
                        _focus={{
                            boxShadow: 'none',
                            borderColor: 'darkgray' // Mostramos el borde inferior al hacer clic
                        }}
                        borderBottom='2px solid darkgray'
                        />
                        <InputRightElement width='4.5rem'>
                        <IconButton
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



    )
}

export { InputLupita }