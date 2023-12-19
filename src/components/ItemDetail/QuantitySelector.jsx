import Botones from "../Botones/Botones";

const QuantitySelector = ({cantidad, stock, setCantidad}) => {

    const handleSumar = () => {
      cantidad < stock && setCantidad(cantidad + 1)
    }
  
    const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
    }
  
    return (
      <div className="flex gap-4 items-center">
        <Botones text="-" onClick={handleRestar}></Botones>
        <span>{cantidad}</span>
        <Botones text="+" onClick={handleSumar}></Botones>
      </div>
    );
  };
  
  export default QuantitySelector;