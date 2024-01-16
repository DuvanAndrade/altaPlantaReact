import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const LoginView = () => {
  const { login, register, googleLogin, logout } = useContext(UserContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
    clearFields();
   
  };
  const clearFields = () => {
    setValues({
      email: "",
      password: "",
    });
  };
  const handleRegister = () => {
    register(values);
    // Limpiar campos después de registrar
    clearFields();
  };

  return (
    <div className="bg-colorBgMain">
      <h2 className="font-semibold text-verdePrincipal font-serif text-center text-2xl  p-10 uppercase">Login</h2>
      <div className="formulario login_container p-4 flex-col   container">
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-8  formulario_contacto pb-7">
          
          <div className="campo campo_ajuste">
            <label htmlFor="email">Email:</label>
            <input
              className=""
              type="email"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="campo campo_ajuste">
            <label htmlFor="password">Costraseña:</label>
            <input
              type="password"
              value={values.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
        </form>

        
        <div className="flex flex-col pt-2 w-max">
          <button type="submit" onClick={handleSubmit} className="rounded text-lg mb-2 px-2 font-normal bg-verdePrincipal text-colorBgNavbar hover:bg-colorBgNavbar hover:text-verdePrincipal border-2 border-verdePrincipal">Ingresar</button>
          <button onClick={handleRegister} className="rounded text-lg mb-2 px-2 font-normal bg-verdePrincipal text-colorBgNavbar hover:bg-colorBgNavbar hover:text-verdePrincipal border-2 border-verdePrincipal">Registrar</button>
          <button onClick={googleLogin} className="rounded text-lg mb-2 px-2 font-normal bg-verdePrincipal text-colorBgNavbar hover:bg-colorBgNavbar hover:text-verdePrincipal border-2 border-verdePrincipal">Iniciar sesión con Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;