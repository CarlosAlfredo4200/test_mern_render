import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
    return (
        <div className="admin-layout">
         <h2>Layout Admin</h2>
         <AdminHeader />
         <AdminSidebar />
          <Outlet />
        </div>
      );
}

export default AdminLayout
