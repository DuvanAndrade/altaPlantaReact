import logo from '../../assets/img/altaPlantaLogo.jpeg'
import NavbarLink from './NavbarLink'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

 

  return (
      <header className= "navbar">
        
        <div className="navbar__info text-center text-white p-2 font-mono" >
          <p>Envío gratis a partir de $25000 | CABA/GBA Norte</p>
        </div>

        <section className="navbar__bg py-1 px-6 grid grid-cols-3 justify-items-center items-center">
          
          <form className='busqueda flex'>
            <input className='busqueda__input' type="search" placeholder='Buscar...'/>
            <button className='busqueda__btn'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button>
          </form>
          
          <div className='logo'>
            <img  src={logo} alt="logo"/>
          </div>

          <div className='navbar__seccion font-serif'>
            <ul className=' flex gap-5'>
              <li className='navbar__seccion__list'>
                <a href="#">CREAR CUENTA</a>
              </li>
              <li className='navbar__seccion__list'>
                <a href="#">INICIAR SECCIÓN</a>
              </li>
              <li>
                <a href="#" className='text-verdePrincipal flex'>
                 <CartWidget/> 
                </a>
              </li>
            </ul>
          </div>            
          </section>
        
        <div className=" navbar__bg py-1 px-6  items-center">
          <nav className="flex justify-center gap-5">
            <Link  to={"/"} className="link_navbar uppercase font-serif ">INICIO</Link>
            <Link  to={"/productos/interior"} className="link_navbar uppercase font-serif ">PLANTAS</Link>
            <Link  to={"/productos/macetas"} className="link_navbar uppercase font-serif">MACETAS Y ACCESORIOS</Link>
            <Link  to={"/productos/terrarios"} className="link_navbar uppercase font-serif ">TERRARIOS</Link>
            <Link  to={"/contacto"} className="link_navbar uppercase font-serif ">CONTACTO</Link>
          </nav>
        </div>

      </header>
  )
}
export default Navbar