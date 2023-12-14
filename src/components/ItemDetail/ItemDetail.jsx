import Botones from "../Botones/Botones";
const ItemDetail = ({item}) =>{
    return(
        <article className="grid grid-cols-2 justify-items-center py-7 px-5">
          <div>
            <img className="img__product_detail" src={item.img} alt={item.name} />
          </div>
        
          <div>          
            <h3 className="text-xl font-serif font-semibold pt-4">{item.name}</h3>
            <p className="font-sans font-normal pt-4">{item.description}</p>
            <p className="text-lg font-sans font-medium pt-4 pb-4">Precio: ${item.price}</p>
            <Botones text="Agregar al carrito"/>
         </div>
        
              
      </article>

    );
}
export default ItemDetail