import React from 'react';
import { Link } from 'react-router-dom';


const AdminHeader = () => {
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
            <Link to="/admin/academico">Académico</Link>
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


