import { useEffect, useState } from "react"
import { pedirDatos } from "../utilities/utilities"

const useProductos = () =>{
    const [productos, setProdutos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos() // <= Promise
            .then((data) => {
                setProdutos( data )
                setLoading( false )
            })
    }, [])

    return {
        productos,
        loading
    }

}
export default useProductos
