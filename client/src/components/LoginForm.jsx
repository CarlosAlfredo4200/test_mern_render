// LoginForm.jsx
import React, { useState } from "react";

const LoginForm = () => {
  const [error, seterror] = useState("Ha dado un Error")
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de manejo del formulario de inicio de sesión
  };

  return (
   
     <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" placeholder="¡Correo por favor!" />
          </div>
          <div className="input-group">
            <label>Contraseña:</label>
            <input type="password" placeholder="¡Ingresa tu clave!" />
          </div>
          <button  type="submit" className="login-button">Ingresar</button>
          <p>{error}</p>
        </form>
    
  );
};

export default LoginForm;
