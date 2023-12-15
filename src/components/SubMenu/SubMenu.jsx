import React, { useState } from "react";

const Submenu = () => {
  const [abierto, setAbierto] = useState(false);

  const handleClick = () => {
    setAbierto(!abierto);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {abierto ? "Cerrar" : "Abrir"} submenú
      </button>
      {abierto && (
        <ul>
          <li>Plantas Interior</li>
          <li>Plantas Exterior</li>
        </ul>
      )}
    </div>
  );
};

export default Submenu;