// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Auth } from '../api/auth';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = new Auth(); // Crea una instancia de la clase Auth
    try {
      const result = await auth.register(formData); // Usa el método register de la instancia
      console.log("Registro exitoso:", result);
      // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error en el registro:", error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="¡Correo por favor!" 
        />
      </div>
      <div className="input-group">
        <label>Contraseña:</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          placeholder="¡Ingresa tu clave!" 
        />
      </div>
      <button type="submit" className="login-button">Registrarse</button>
    </form>
  );
};

export default RegisterForm;




