import { useState } from "react";
import Botones from "../Botones/Botones";

const Contacto = () =>{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");


    return(
        <>
            <h1 className="text-verdePrincipal font-semibold font-serif text-center p-8 text-2xl">CONTÁCTANOS</h1>

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

                <section className="formulario ">
                <form className="formulario_contacto ">
                        <div className="campo campo_ajuste">                        
                            <label htmlFor="nombre">Nombre:</label>
                            <input  type="text" placeholder="" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                        </div>
                        <div className="campo campo_ajuste">
                            <label htmlFor="email">Emial:</label>
                            <input 
                            type="email"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="campo campo_ajuste">
                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea 
                            placeholder=""
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}/>

                        </div>
                   
                    <Botones text="Enviar"/>
                </form>
                </section>
            </section>

            
        
        </>
    )

}
export default Contacto