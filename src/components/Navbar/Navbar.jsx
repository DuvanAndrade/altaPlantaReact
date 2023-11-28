import logo from '../../assets/img/altaPlantaLogo.jpeg'
import NavbarLink from './NavbarLink'

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
              <li className='navbar__seccion__list'>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg></a>
              </li>
            </ul>
          </div>            
          </section>
        
        <div className=" navbar__bg py-1 px-6  items-center">
          <nav className="flex justify-center gap-5">
            <NavbarLink href={"#"} text={"PLANTAS"}/>
            <NavbarLink href={"#"} text={"MACETAS Y ACCESORIOS"}/>
            <NavbarLink href={"#"} text={"TERRARIOS"}/>
            <NavbarLink href={"#"} text={"CONTACTO"}/>
          </nav>
        </div>

      </header>
  )
}
export default Navbar