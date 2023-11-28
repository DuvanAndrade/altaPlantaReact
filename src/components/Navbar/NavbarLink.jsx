const NavbarLink = ({href, text}) => {

    return (
      <a className="uppercase font-serif text-verdePrincipal font-medium hover:text-verdeHover " href={href}> {text}</a>
    );
  };
  
  export default NavbarLink;