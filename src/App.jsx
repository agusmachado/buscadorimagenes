import { Container } from "react-bootstrap"
import { ChakraProvider } from '@chakra-ui/react'
import { InputLupita } from "./components/Buscador/InputLupita"


function App() {
  

  return (
    <> 
        <header 
          className="py-4"
        >
          <h1>Buscador de imágenes</h1>
        </header>
      <Container className="mt-5">
        <ChakraProvider>
          
          <InputLupita/>

        </ChakraProvider>
      </Container>   
    </>
  )  
}

export default App
