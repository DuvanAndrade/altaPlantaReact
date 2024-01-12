import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Botones from "../Botones/Botones";

const CheckOut = () => {

    const { cart, totalCart , clearCart } = useContext( CartContext)
    
    const initialState = {
        nombre: "",
        direccion:"",
        email: "",
    };

    const [ values, setValues ] = useState(initialState)
    const [ orderId, setOrderId ] = useState(null)


    const handleInputChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault()

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date(),
        }
        setValues(initialState);

        const ordersRef = collection(db, 'orders')
        // cart.forEach(item => {
            
        //     const docRef = doc(db, "orders");
        //     getDoc(docRef)
        //         .then(doc =>{
        //             const stock = doc.data().stock
        //             if(stock >= item.cantidad){
        //                 updateDoc(docRef, {
        //                     stock: doc.data.stock - item.cantidad
        //                 })
        //             }
        //         })
        // });
            
        addDoc(ordersRef, orden)
        .then(doc =>{
            setOrderId(doc.id)
            clearCart()
        })
    }

    if(orderId){
        return(
            <>
                <div className="bg-colorBgMain text-verdePrincipal text-center pt-10 ">
                    <h className="uppercase font-semibold font-serif  text-2xl pb-10">Gracias por tu compra</h>
                    <p className="pt-10 font-mono text-xl">Tu número de orden de compra es: {orderId}</p>
                </div> 
                <div className="bg-colorBgMain pt-8 pb-10">
                    <Link to={"/"} className="flex justify-center"><Botones text="Seguir Navegando"/></Link>
                </div>
            </>
        )
    }
   
    return(
        <>
        <h2 className="text-verdePrincipal bg-colorBgMain uppercase font-semibold font-serif text-center pt-10 text-2xl">Datos de Contacto</h2>

        <div className=" formulario bg-colorBgMain p-8">
            <form className="formulario_contacto" onSubmit={handleSubmit}>

                <div className="campo campo_ajuste">
                    <label htmlFor="nombre">Nombre:</label>
                    <input  type="text"  onChange={handleInputChange} value={values.nombre} name="nombre"/>
                </div>

                <div className="campo campo_ajuste">
                    <label htmlFor="direccion">Dirección:</label>
                    <input  type="text"  onChange={handleInputChange} value={values.direccion} name="direccion"/>

                </div>

                <div className="campo campo_ajuste">
                    <label htmlFor="email">Email:</label>
                    <input  type="email"  onChange={handleInputChange} value={values.email} name="email"/>

                </div>
                
                <button className="rounded text-lg mb-2 px-2 font-normal bg-verdePrincipal text-colorBgNavbar hover:bg-colorBgNavbar
                hover:text-verdePrincipal border-2 border-verdePrincipal" type="submit">Enviar</button>

            </form>
        </div>

        </>
        
    )

}
export default CheckOut