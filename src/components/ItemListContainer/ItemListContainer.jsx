import { useState, useEffect } from "react"
import { pedirDatos } from "../../utilities/utilities"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) =>{
    
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

    return (
        <main className="main__container font-serif text-center p-10 text-verdePrincipal font-semibold ">
            
            <div className="text-2xl">
                <h1>{greeting}</h1>
            </div>

            {
                loading
                    ? <h2 className="text-center text-2xl mt-8">Cargando...</h2>
                    : <ItemList productos={productos}/>
            }

        </main>
    )

}
export default ItemListContainer