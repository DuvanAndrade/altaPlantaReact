import './App.css'
import './styles/styles.scss'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import AppRouter from './router/AppRouter'


function App() {
  

  return (
    <UserProvider>
      <CartProvider>
        <AppRouter/>
      
      </CartProvider>
    </UserProvider>
    
       
  )
}

export default App
