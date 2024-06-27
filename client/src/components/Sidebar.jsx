import React from "react";
import { Link } from "react-router-dom";
import { PiUsersThreeBold } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { BsBorderStyle } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <h2 className="sidebarH2">INFORMES</h2>
      <nav className="containerNav">
        <Link className="linkNav" to="/admin/academico/general">
          <PiUsersThreeBold className="icons" />
          <p>Estadística generales</p>
        </Link>
        <Link className="linkNav" to="/admin/academico/areas">
          <PiUsersThreeBold className="icons" />
          <p>Estadística por área</p>
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;
