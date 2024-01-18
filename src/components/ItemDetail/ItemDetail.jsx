import { useContext, useState } from "react";
import Botones from "../Botones/Botones";
import QuantitySelector from "./QuantitySelector";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";



const ItemDetail = ({item}) =>{
  const [cantidad, setCantidad] = useState(1)
  const { addToCart, isInCart } = useContext(CartContext)
  const navigate = useNavigate()

  

  const handleAdd = () =>{
    const itemToCart = {
      ...item,
      cantidad
    }
    
    addToCart(itemToCart)
  }

  const handleVolver = () => {
    navigate(-1)
  }

  if(item.stock === 0){
    return(
      <section>
        <article className="grid grid-cols-2 justify-items-center py-7 px-5">
          <div className="shadow-xl shadow-verdePrincipal ">
            <img className="img__product_detail" src={item.img} alt={item.name} />
          </div>
    
          <div>          
            <h3 className="text-xl font-serif font-semibold pt-4">{item.name}</h3>
            <p className="font-sans font-normal pt-4">{item.description}</p>
            <p className="text-lg font-sans font-medium pt-4 pb-4">Precio: ${item.price}</p>
            <p>¡SIN STOCK!</p>
        
          </div>
          
        </article>
        <div className="p-2 flex justify-end ">
            <Botones  text="volver" onClick={handleVolver} />
          </div>
      </section>
      

    )
  }
  

      return(
        <section>
          <article className="grid grid-cols-2 justify-items-center py-7 px-5">
          <div className="shadow-xl shadow-verdePrincipal ">
            <img className="img__product_detail" src={item.img} alt={item.name} />
          </div>
        
          <div>          
            <h3 className="text-xl font-serif font-semibold pt-4">{item.name}</h3>
            <p className="font-sans font-normal pt-4">{item.description}</p>
            <p className="text-lg font-sans font-medium pt-4 pb-4">Precio: ${item.price}</p>
            <div className="grid justify-items-center gap-4 justify-center pb-4">
             
              {
                isInCart(item.id)
                ? <Link to="/cart"><Botones text="Iniciar Compra"/></Link>
                
                :<>
              <QuantitySelector
                cantidad={cantidad}
                stock={item.stock}
                setCantidad={ setCantidad }
              />
              <Botones text="Agregar al carrito" onClick={handleAdd}/>
              </>
              }
            </div>
         </div>
         
         
      </article>
      <div className="p-2 flex justify-end ">
        <Botones  text="volver" onClick={handleVolver} />
      </div>
      </section>

    );
}
export default ItemDetail