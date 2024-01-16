import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, writeBatch, documentId, addDoc, getDocs, doc, getDoc, updateDoc, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import Botones from "../Botones/Botones";
import {  ToastContainer} from 'react-toastify'
import { enviado, warning } from '../NewsLetterForm//Alert';

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

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date(),
        }
        setValues(initialState);
        //actualizar el stock de productos
        const batch =  writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productsRef = collection(db, 'productos')
        const itemsQuery = query(productsRef, where(documentId(), 'in', cart.map(produ => produ.id)))
        const queryDocs = await getDocs(itemsQuery)

        const outOfStock = []

        queryDocs.docs.forEach(doc => {
            const item = cart.find(produ => produ.id === doc.id)
            const stock = doc.data().stcok

            if(stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            }else {
                outOfStock.push(item)
            }
        })
        if(outOfStock.length === 0){
            batch.commit()
                .then(() =>{
                    addDoc(ordersRef, orden).then((doc) =>{
                        setOrderId(doc.id)
                        clearCart()
                        enviado("Gracias por tú compra")

                    })
                })

        }else{
            warning("Hay Items Sin Stock")
        }

        
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

        <div className="formulario bg-colorBgMain p-8">
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
                <ToastContainer/>
                <button className="rounded text-lg mb-2 px-2 font-normal bg-verdePrincipal text-colorBgNavbar hover:bg-colorBgNavbar
                hover:text-verdePrincipal border-2 border-verdePrincipal" type="submit">Enviar</button>

            </form>
        </div>

        </>
        
    )

}
export default CheckOut