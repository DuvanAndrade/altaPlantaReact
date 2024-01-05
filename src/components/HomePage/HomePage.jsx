import { Link } from "react-router-dom";
import MiCarousel from "../Carousel/MiCarousel";
const HomePage = () =>{
    return(
        <section className="bg-colorBgMain">
            <MiCarousel/>
            <div className="bg-colorBgNavbar flex gap-20 justify-center p-10">
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
                <div className="pl-4 font-sans font-normal">
                    <p>3 CUOTÁS SIN INTERÉS</p> 
                    <p>O 15% de descuento extra por transferencia</p>  
                </div>
            </div>
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div className="pl-4 font-sans font-normal">
                    <p>20% DE DESCUENTO </p>
                    <p>Abonando en efectivo en el local</p>
                </div>
            </div>
            <div className="flex ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <div className="pl-4 font-sans font-normal">
                    <p>ENVÍOS A TODO EL PAÍS </p>
                    <p>Plantas solo CABA y GBA</p>
                </div>
            </div>
            </div>

            <div className="flex gap-11 justify-center p-16">
            <Link to="/productos/interior">
                <img className="w-96 h-96 hover:scale-105 transition-all" src="/img/mundoVerde.png" alt="" />
            </Link>
            <Link to="/productos/macetas">
                <img className="w-96 h-96 hover:scale-105 transition-all" src="/img/homedeco.png" alt="" />
            </Link>
            <Link to="/productos/terrarios">
                <img className="w-96 h-96 hover:scale-105 transition-all" src="/img/terrariosDeco.png" alt="" />
            </Link>
            </div>
        </section>
    )

}
export default HomePage;