import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const handleAdminRedirect = () => {
    navigate("/admin"); // Redirige a la ruta /admin
  };
  return (
    <header className="header-client">
      <h4>Usando Header Client</h4>
      <nav className="nav-client">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/colegio">Colegio</Link>
          </li>
          <li>
            <Link to="/contactos">Contactos</Link>
          </li>
          <li>
            <Link to="/q10web">Q10 Colombia</Link>
          </li>
        </ul>
      </nav>
      <div className="button-container">
        <button className="admin-redirect-button" onClick={handleAdminRedirect}>
          Ir a Admin
        </button>
      </div>
    </header>
  );
};

export default Header;
