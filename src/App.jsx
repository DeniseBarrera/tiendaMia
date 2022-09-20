import './App.css'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "../src/context/CartContext"
import "../src/Firebase"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Checkout } from './components/Checkout'


function App() {


  return (

    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Tienda Mia" />} />
          <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenidos a Tienda Mia" />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <ToastContainer />
      </CartContextProvider>
    </BrowserRouter>


  )
}

export default App
