import './App.css'
import './styles/styles.scss'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView/CartView'
import CheckOut from './components/CheckOut/CheckOut'

function App() {
  

  return (

    <CartProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='productos' element={<ItemListContainer greeting={"NUESTROS PRODUCTOS"}/>}/>
            <Route path='productos/:categoria' element={<ItemListContainer greeting={"NUESTROS PRODUCTOS"}/>}/>
            <Route path='item/:itemId' element={ <ItemDetailContainer /> } />
            <Route path='contacto' element={<Contacto/>}/>
            <Route path='/cart' element={<CartView/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
        
            <Route path='not-found' element={<h1 className='text-center text-verdePrincipal text-5xl pt-9 pb-40'>Not Found...</h1>}/>
            <Route path='*' element={<Navigate to={'not-found'}/>}/>
          </Routes>
      
        <Footer/> 
      </BrowserRouter>

    </CartProvider>
       
  )
}

export default App
