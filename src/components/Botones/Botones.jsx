const Botones = ({text, onClick, disabled = false}) => {
    return(
        <button  onClick={onClick} disabled={disabled} className="text-lg w-max rounded px-2 font-normal bg-verdePrincipal text-colorBgNavbar hover:bg-colorBgNavbar
         hover:text-verdePrincipal border-2 border-verdePrincipal" type="submit">{text} </button>
    )
    
}
export default Botones
