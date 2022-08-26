import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar} from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'

function App() {


  return (
    <ChakraProvider> 
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a Tienda Mia"/>
    </ChakraProvider>
  )
}

export default App
