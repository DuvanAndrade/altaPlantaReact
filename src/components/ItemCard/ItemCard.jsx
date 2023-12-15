import { Link } from "react-router-dom";
import Botones from "../Botones/Botones";

const ItemCard = ({item}) => {

  return (
    <article className="w-60">
      <img className="img__product" src={item.img} alt={item.name} />
      <h3 className="text-xl font-serif font-light pt-4">{item.name}</h3>
      <p className="text-lg font-sans font-bold pb-2">Precio: ${item.price}</p>

        <Link to={`/item/${item.id}`}><Botones text="Ver más"/></Link>
          
    </article>
  );
};

export default ItemCard;