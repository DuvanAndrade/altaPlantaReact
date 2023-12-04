import Botones from "../Botones/Botones";

const ItemCard = ({item}) => {

  return (
    <article className="w-60">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="img__product" src={item.img} alt={item.name} />
          </div>
          <div className="flip-card-back">
            <p className="font-sans font-normal">{item.description}</p>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-serif font-light pt-4">{item.name}</h3>
      <p className="text-lg font-sans font-bold pb-2">Precio: ${item.price}</p>
      <Botones  text="Agregar"/>

      
      
      
      
    </article>
  );
};

export default ItemCard;