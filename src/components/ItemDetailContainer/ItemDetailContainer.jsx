import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () =>{
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'productos', itemId)
        getDoc( docRef )
          .then((resp) => {
            const doc = {
              ...resp.data(),
              id: resp.id
            }
            setItem(doc)
          })
          .finally(() => setLoading(false))
        
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