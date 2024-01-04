import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Botones from "../Botones/Botones";
import EmptyCart from "./EmptyCart";

const CartView = () =>{
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext) 

    if(cart.length === 0) return <EmptyCart/>

    return(
        <section className="main__container pb-8" >
            <h2 className="font-semibold text-verdePrincipal font-serif text-center text-2xl  p-10">CARRITO DE COMPRAS</h2>
            <section className="ontainer mt-8 flex justify-evenly">
            <ul className="grid grid-cols-2 gap-x-44 gap-y-24">
                {
                    cart.map((item) => (
                        <li className="flex gap-4 text-lg font-serif">
                            <img src={item.img} alt={item.name} className="w-36 h-44 " />
                            <div>
                                <h3>{item.name}</h3>
                                <p>$ {item.price}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <Botones onClick={() => removeItem(item.id)} text={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.  5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>}>
                                </Botones>
                            </div>
                        </li>
                    ))
                }
            </ul>
            
            </section>
            <div className="grid justify-center pr-4">
               <h4 className="text-verdePrincipal text-lg p-4 font-semibold font-serif">Total Carrito: $ {totalCart()}</h4>
                <Botones text="Vaciar carrito" onClick={clearCart}/> 
            </div>
            
            
        </section>

    )
}
export default CartView