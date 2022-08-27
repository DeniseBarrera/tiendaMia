import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar} from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { BrowserRouter, Routes, Route }  from "react-router-dom"

function App() {


  return (
    <ChakraProvider> 
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Tienda Mia"/>} />
            <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenidos a Tienda Mia"/>} />
            <Route path="/product/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
