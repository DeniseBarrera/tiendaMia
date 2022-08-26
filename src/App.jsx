import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar} from './components/Navbar'

function App() {


  return (
    <ChakraProvider> 
      <Navbar/>
    </ChakraProvider>
  )
}

export default App
