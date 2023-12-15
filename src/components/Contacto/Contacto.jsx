import { useState } from "react";
const Contacto = () =>{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");


    return(
        <>
            <h1 className="text-verdePrincipal font-bold text-center pt-8 text-3xl">CONTÁCTANOS</h1>
            <section>
                <div>
                    <h2>Nuestra Tienda</h2>
                    <p>Av Cordoba 3200</p>
                    <p>CABA</p>
                </div>
                <div>
                    <h2>Nuestro Horario</h2>
                    <p>Av Cordoba 3200</p>
                    <p>CABA</p>
                </div>
                <div>
                    <h2>Nuestra Tienda</h2>
                    <p>Av Cordoba 3200</p>
                    <p>CABA</p>
                </div>

            </section>

            <form>
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
        
        </>
    )

}
export default Contacto