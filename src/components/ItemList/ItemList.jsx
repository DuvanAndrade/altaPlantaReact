import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {

  return (
    <section className="container mx-auto  mt-8">

      <h2 className="text-xl font-serif font-semibold text-center">PRODUCTOS</h2>

        <div className="grid grid-cols-4 grid-flow-row	 gap-10 justify-items-center content-center pt-8">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>

    </section>
  );
};

export default ItemList;