import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import CartOrders from './components/CartOrders/CartOrders';
import { CartProvider } from './Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path= "/" element={<ItemListContainer />} />
          <Route exact path= "/nosotros" element={<Nosotros />} />
          <Route exact path= "/category/:id" element={<ItemListContainer />} />
          <Route exact path= "/item/:id" element={<ItemDetailContainer />}/>
          <Route exact path= "/contacto" element={<Contacto />} />
          <Route exact path= "/cart" element={<CartOrders />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
