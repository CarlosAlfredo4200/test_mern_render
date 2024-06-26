import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Logo from "/logo.png";
import { useAuth } from "../../contexts/AuthContext";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Llama a la función de logout del contexto de autenticación
    navigate('/'); // Redirige al usuario a la página de inicio ('/')
  };

  return (
    <div className="admin-layout">
      <div className="admin-layout-header">
        <img className="admin-layout-header-logo" src={Logo} alt="Logo CPCS" />
        <div className="admin-layout-header-text">
          <h1>Colegio Panamericano Colombo Sueco</h1>
          <p><span className="admin-layout-header-text-span">30 AÑOS</span>formando líderes en Cristo para Colombia y las naciones</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
      </div>
      <div>
        <AdminHeader />
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
