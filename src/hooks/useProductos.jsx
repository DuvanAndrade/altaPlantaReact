import { useEffect, useState } from "react"
import { pedirDatos } from "../utilities/utilities"
import { useParams } from "react-router-dom"

const useProductos = () =>{
    const [productos, setProdutos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos() // <= Promise
            .then((data) => {
                const filter = categoria ? data.filter(product => product.categoria === categoria) : data
                setProdutos( filter )
                
            })
            .finally(() => setLoading( false ))
    }, [categoria])

    return {
        productos,
        loading
    }

}
export default useProductos
