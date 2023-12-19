import { useEffect, useState } from "react"
import { pedirDatos } from "../../utilities/utilities";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

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
             <Loader/>
            ) : (
              <ItemDetail item={item}/>
            )}
          
          </main>

      );
}
export default ItemDetailContainer