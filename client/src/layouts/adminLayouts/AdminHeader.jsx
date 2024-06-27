import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="admin-header">
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
              <button onClick={toggleDropdown}>
                Académico
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  
                  <li>
                    <Link to="/admin/academico">Informe Académico</Link>
                  </li>
                  <li>
                    <Link to=" ">Informe Académico</Link>
                  </li>
                  <li>
                    <Link to=" ">Informe Académico</Link>
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
    </div>
  );
};

export default AdminHeader;


