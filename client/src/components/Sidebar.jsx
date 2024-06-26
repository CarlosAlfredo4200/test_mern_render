import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PiUsersThreeBold } from "react-icons/pi";

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <h2 className="sidebarH2">INFORMES</h2>
      <nav className="containerNav">
        <Link
          className={`linkNav ${location.pathname === "/admin/academico/general" ? "active" : ""}`}
          to="/admin/academico/general"
        >
          <PiUsersThreeBold className="icons" />
          <p>Estadística generales</p>
        </Link>
        <Link
          className={`linkNav ${location.pathname === "/admin/academico/areas" ? "active" : ""}`}
          to="/admin/academico/areas"
        >
          <PiUsersThreeBold className="icons" />
          <p>Estadística por área</p>
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;

