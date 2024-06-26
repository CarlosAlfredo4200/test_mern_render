import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
 

const ClientLayouts = () => {
  const navigate = useNavigate();
   
   

  const handleAdminRedirect = () => {
    navigate('/admin'); // Redirige a la ruta /admin
  };

  return (
    <div className="web-layout">
      <div className="admin-layout-header-text">
          <h1>Colegio Panamericano Colombo Sueco</h1>
          <p><span className="admin-layout-header-text-span">30 AÑOS</span>formando líderes en Cristo para Colombia y las naciones</p>
        </div>
      <Header />
     
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayouts;

