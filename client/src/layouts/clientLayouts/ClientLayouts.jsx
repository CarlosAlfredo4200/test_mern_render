import { Outlet } from "react-router-dom";

import Footer from "./Footer"
import Header from "./Header"


const ClientLayouts = () => {
    return (
        <div className="web-layout">
          
          <h2>Estamos usando client Layout</h2>
          <Header />
          <Outlet />
          <Footer />
        </div>
      );
}

export default ClientLayouts
