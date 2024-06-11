import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import Nosotros from './components/Nosotros'
// import Productos from './components/Productos'
// import Contacto from './components/Contacto'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path= "/" element={<ItemListContainer />} />
        {/* <Route exact path= "/nosotros" element={<Nosotros />} /> */}
        <Route exact path= "/category/:id" element={<ItemListContainer />} />
        {/* <Route exact path= "/item/:id" element={< />} /> */}
        {/* <Route exact path= "/contactos" element={<Contacto />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
