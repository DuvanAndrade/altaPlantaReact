import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useState } from "react";
import logo from '../../assets/img/altaPlantaLogo.jpeg'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink} from 'react-router-dom'
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";



const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "plantas",
    href: "/productos/plantas",
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

  const { user, logout } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        
        const querySnapshot = await getDocs(
          query(collection(db, "productos"), where("name", "==", searchTerm))
        );
  
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push(doc.data());
        });
  
        setSearchResults(results);
      } catch (error) {
        console.error("Error al buscar en Firestore: ", error);
      }
    };
  
    if (searchTerm !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]); 
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toUpperCase());
    
  };
  
//NOTA: ES ALGO OPCIONAL DE LOS REQUISITOS. PERO QUERIA HACER UNA BARRA DE BUSQUEDA. QUE AUNQUE ME TRAE POR CONSOLA EL PRODCUTO BUSCADO NO SUPE COMO HACER QUE SE RENDERIZARA COMO EN ITEMDETAIL.



 
  return (
      <header>
        
        <div className="navbar__info text-center text-white p-2 font-mono" >
          <p>Envío gratis a partir de $25000 | CABA/GBA Norte</p>
        </div>

        <section className="navbar__bg py-1 px-6 grid grid-cols-3 justify-items-center items-center">
          
          <form className='busqueda flex'>
            <input className='busqueda__input' type="search" onChange={handleSearch} value={searchTerm} placeholder='Buscar...'/>
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
              {user.logged ? (
              <div className='navbar__seccion__list flex flex-col'>
                <p className="text-verdePrincipal">¡Hola! {user.email}</p>
                <div className="flex justify-end">
                <button className="rounded w-max text-xs mb-2 px-2 font-normal bg-verdePrincipal text-colorBgNavbar hover:bg-colorBgNavbar hover:text-verdePrincipal border-2 border-verdePrincipal" onClick={logout}>Cerrar Sección</button>
                </div>
                
              </div>
            ) : (
              <Link to="/login" className='navbar__seccion__list'>
                <a href="#">INICIAR SESIÓN</a>
              </Link>
            )}
              <a href="#" className='text-verdePrincipal flex'>
                 <CartWidget/> 
              </a>
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