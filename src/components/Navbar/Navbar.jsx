import logo from '../../assets/img/altaPlantaLogo.jpeg'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink} from 'react-router-dom'

const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "plantas",
    href: "/productos/interior",
  },
  {
    label: "macetas y accesorios",
    href: "/productos/macetas",
  },
  {
    label: "terrarios",
    href: "/productos/terrarios",
  },
  {
    label: "contacto",
    href: "/contacto",
  }
];

const Navbar = () => {

 

  return (
      <header>
        
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
            <Link to= "/"><img  src={logo} alt="logo"/></Link>
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
        <nav className="flex items-center justify-center gap-4">
          {links.map((link) => (

            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (
                `uppercase  font-semibold hover:text-verdeHover ${isActive ? "text-verdeHover" : "text-verdePrincipal"}`
              )}
            >
              {link.label}
            </NavLink>

          ))}
        </nav>
          
        </div>

      </header>
  )
}
export default Navbar