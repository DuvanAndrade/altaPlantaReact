import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const useProductos = () =>{
    const [productos, setProdutos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = query(productosRef, where('categoria', '==', categoria))

        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map(doc => {
                    return {
                        ...doc.data(), 
                        id: doc.id
                    }
                })
                setProdutos(docs)
            })
            .finally(() => setLoading(false))


    }, [categoria])

    return {
        productos,
        loading
    }

}
export default useProductos
