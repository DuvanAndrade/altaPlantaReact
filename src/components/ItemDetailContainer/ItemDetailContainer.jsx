import { useEffect, useState } from "react"
import { pedirDatos } from "../../utilities/utilities";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);
    
        pedirDatos()
          .then((data) => {
            setItem( data.find(prod => prod.id === Number(itemId)) )
          })
          .finally(() => setLoading(false));
      }, []);

      return (
   
          <main className="main__container font-serif text-center p-10 text-verdePrincipal font-semibold ">
            {loading ? (
             <h2 className="text-center text-2xl mt-4 mb-20">Cargando...</h2>
            ) : (
              <ItemDetail item={item}/>
            )}
          
          </main>

      );
}
export default ItemDetailContainer