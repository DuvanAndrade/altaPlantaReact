import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) =>{

  const [cart, setCart] = useState([])

  const addToCart = (item) =>{
    setCart([...cart, item])
  }

  const isInCart = (id) =>{
    return cart.some(item => item.id === id)
  }

  const clearCart = () =>{
    setCart([])
  }

  const itemsInCart = () =>{
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const totalCart = () =>{
    return cart.reduce((acc, item) => acc + (item.cantidad * item.price), 0)
  }

  const removeItem = () =>{
    setCart( cart.filter(item => item.id !== item.id))
  }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            clearCart,
            itemsInCart,
            totalCart,
            removeItem
        }}>
            {children}

        </CartContext.Provider>
    )
}