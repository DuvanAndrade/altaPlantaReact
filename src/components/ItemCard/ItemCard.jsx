import Botones from "../Botones/Botones";

const ItemCard = ({item}) => {

  return (
    <article className="w-60">
      <img className="img__product" src={item.img} alt={item.name} />
      <p className="font-sans font-normal">{item.description}</p>
      <h3 className="text-xl font-serif font-light pt-4">{item.name}</h3>
      <p className="text-lg font-sans font-bold pb-2">Precio: ${item.price}</p>
      <Botones  text="Agregar"/>

      
      
      
      
    </article>
  );
};

export default ItemCard;