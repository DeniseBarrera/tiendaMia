import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar} from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'

function App() {


  return (
    <ChakraProvider> 
      <Navbar/>
      {/*<ItemListContainer greeting="Bienvenidos a Tienda Mia"/>*/}
      <ItemDetailContainer/>
    </ChakraProvider>
  )
}

export default App
