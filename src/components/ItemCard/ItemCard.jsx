import { Link } from "react-router-dom";
import Botones from "../Botones/Botones";

const ItemCard = ({item}) => {

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
 

  return (
    <article className="w-60   hover:shadow-3xl border-b-2  border-verdePrincipal duration-300 p-4">
      <img className="img__product" src={item.img} alt={item.name} />
        <div className="">
        <h3 className="text-xl font-serif font-light pt-4">{item.name}</h3>
        {item.stock <= 7 && <p className="text-[#7f9f9f] font-extrabold">Quedan sólo {item.stock} unidades!</p>}
        <p className="text-lg font-sans font-bold  pb-2">Precio: {USDollar.format(item.price)}</p>

        <Link to={`/item/${item.id}`}><Botones text="Ver más"/></Link>
      </div>
      
          
    </article>
  );
};

export default ItemCard;