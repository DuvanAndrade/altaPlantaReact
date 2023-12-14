const Botones = ({text, onClick}) => {
    return(
        <button  onClick={onClick} className="text-lg px-2 font-normal bg-verdePrincipal text-colorBgNavbar hover:bg-colorBgNavbar
         hover:text-verdePrincipal border-2 border-verdePrincipal" type="submit">{text}</button>
    )
    
}
export default Botones
