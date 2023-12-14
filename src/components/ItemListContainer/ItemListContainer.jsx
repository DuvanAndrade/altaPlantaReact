import { useState, useEffect } from "react"
import { pedirDatos } from "../../utilities/utilities"
import ItemList from "../ItemList/ItemList"
import useProductos from "../../hooks/useProductos"

const ItemListContainer = ({greeting}) =>{
    const {productos, loading} = useProductos()
    
    
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