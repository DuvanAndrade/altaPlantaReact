import Botones from "../Botones/Botones"
import { Link } from "react-router-dom"
const EmptyCart = () =>{
    return(
        <section className="main__container spb-8">
            <h2 className="font-semibold text-verdePrincipal font-serif text-center text-2xl  pt-10 pb-4">CARRITO DE COMPRAS</h2>
            <div className="font-medium text-verdePrincipal font-serif text-center text-lg pb-4">
                <h3>Tú carrtio de compras esta vacio</h3>
                <h3>¿Quieres volver a empezar a comprar?</h3>
            </div>
            <Link to={"/"} className="flex justify-center pb-10"><Botones text="Volver a empezar"/></Link>  
        </section>
    )

}
export default EmptyCart