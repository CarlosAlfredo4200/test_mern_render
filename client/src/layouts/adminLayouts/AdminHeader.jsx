import React, { useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import Logo from "/logo.png";
import { useAuth } from "../../contexts/AuthContext";

const AdminHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Llama a la función de logout del contexto de autenticación
    navigate("/"); // Redirige al usuario a la página de inicio ('/')
  };

  return (
    <div className="admin-header">
      <div className="admin-layout-header">
        <img className="admin-layout-header-logo" src={Logo} alt="Logo CPCS" />
        <div className="admin-layout-header-text">
          <p>
            <span className="admin-layout-header-text-span">30 AÑOS</span>
            formando líderes en Cristo para Colombia y las naciones
          </p>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/admin/users">Usuarios</Link>
            </li>
            <li>
              <Link to="/admin/blog">Blog</Link>
            </li>
            <li>
              <div className="dropdown">
                <Link onClick={toggleDropdown}>Académico</Link>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/admin/academico">Informe Académico</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link to="/admin/administracion">Administración</Link>
            </li>
            <li>
              <Link to="/admin/q10">Q10</Link>
            </li>
          </ul>
        </nav>
        <button className="logout-button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
