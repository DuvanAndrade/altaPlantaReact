import { useState } from "react";
import Botones from "../Botones/Botones";
import { db } from "../../firebase/config";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { enviado, warning } from '../NewsLetterForm//Alert';


const Contacto = () =>{

    const initialState = {
        nombre: "",
        direccion:"",
        email: "",
        mensaje: ""
    };
    
    const [ values, setValues ] = useState(initialState)

    const handleInputChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if (!values.nombre || !values.direccion || !values.email || !values.mensaje) {
            warning("Por favor, completa todos los campos del formulario.");
            return;
        }

        const contactoCliente = {
            nombre: values.nombre,
            direccion: values.direccion,
            email: values.email,
            mensaje: values.mensaje,
          };
          try {
            const docRef = await addDoc(collection(db, "contactos"), contactoCliente);
            enviado("Mensaje Enviado", docRef.id)
         
      
            setValues(initialState);
          } catch (error) {
            warning("Error Al enviar", error)
   
          }
    }

    return(
        <>
            <h1 className="text-verdePrincipal font-semibold font-serif text-center p-8 text-2xl bg-colorBgMain">CONTÁCTANOS</h1>

            <section className="bg-colorBgMain">
                <section className="grid grid-cols-3 justify-items-center p-14 ">
                    <div className="text-center grid gap-2">
                        <h2 className="font-serif text-2xl font-extrabold text-verdePrincipal">Nuestra Tienda</h2>
                        <p className="text-verdePrincipal font-normal">Av Cordoba 3200</p>
                        <p className="text-verdePrincipal font-normal">CABA</p>
                    </div>
                    <div className="text-center grid gap-2">
                        <h2 className="font-serif text-2xl font-extrabold text-verdePrincipal">Nuestro Horario</h2>
                        <p className="text-verdePrincipal font-normal">Lunes-Viernes</p>
                        <p className="text-verdePrincipal font-normal">9 a 19 h GMT-6</p>
                    </div>
                    <div className="text-center grid gap-2">
                        <h2 className="font-serif text-2xl font-extrabold text-verdePrincipal">Nuestra Tienda</h2>
                        <p className="text-verdePrincipal font-normal">1-800-000-0000</p>
                        <p className="text-verdePrincipal font-normal">info@altaPlanta.com</p>
                    </div>

                </section>

                <div className="text-center text-verdePrincipal">
                    <h2 className="italic text-2xl font-serif font-bold pb-4">Consultas</h2>
                    <p>Para preguntas de productos y servicios, contacta con nosotros</p>
                    <p>rellenando el siguiente formulario</p>
                </div>

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
                        
                        <div className="campo campo_ajuste">
                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea name="mensaje" id="" cols="30" rows="10" onChange={handleInputChange} value={values.mensaje}></textarea>
                        </div>
                
                        <button className="rounded text-lg mb-2 px-2 font-normal bg-verdePrincipal text-colorBgNavbar hover:bg-colorBgNavbar
                        hover:text-verdePrincipal border-2 border-verdePrincipal" type="submit">Enviar</button>

                    </form>
                </div>
            </section>

            
        
        </>
    )

}
export default Contacto