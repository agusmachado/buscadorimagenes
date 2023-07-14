import { Container } from "react-bootstrap"
import { InputLupita } from "./components/InputLupita"
import { ChakraProvider } from '@chakra-ui/react'
import { ApiCombinada } from "./components/ApiCombinada"


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
          {/* <ApiCombinada/> */}
          <InputLupita/> 

        </ChakraProvider>
      </Container>   
    </>
  )  
}

export default App