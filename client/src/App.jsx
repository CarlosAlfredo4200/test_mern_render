import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import {
  Auth,
  Users,
  Blog,
  Academicos,
  Administrativos,
  Q10,
} from "./pages/admin";
import { Home } from "./pages/web";
import AdminLayout from "./layouts/adminLayouts/AdminLayout";
import ClientLayouts from "./layouts/clientLayouts/ClientLayouts";
import Colegio from "./pages/web/Colegio";
import Contactos from "./pages/web/Contactos";
import Q10Web from "./pages/web/Q10web";
import './App.css'
import General from "./pages/admin/academicos/General";
import Areas from "./pages/admin/academicos/Areas";

import Layout from "./components/Layout";
import InformeAcademico from "./pages/admin/InformeAcademico";
import DashboardEstDificultades from "./components/DashboardEstDificultades";


const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

const AppContent = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false); // Estado de carga

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ClientLayouts />}>
          <Route index element={<Home />} />
          <Route path="/colegio" element={<Colegio />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/q10web" element={<Q10Web />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        {!user ? (
          <>
            <Route path="/admin" element={<Auth />} />
            <Route path="/admin/*" element={<Navigate to="/admin" />} />
          </>
        ) : (
          <Route element={<AdminLayout />}>
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/blog" element={<Blog />} />
            <Route path="/admin/academico" element={<Layout />}>
              <Route index element={<General />} />
              <Route path="/admin/academico/general" element={<General />} />
              <Route path="/admin/academico/areas" element={<Areas />} />
              <Route path="/admin/academico/estdificultades" element={<DashboardEstDificultades />} />
            </Route>
            <Route path="/admin/administracion" element={<Administrativos />} />
            <Route path="/admin/q10" element={<Q10 />} />
            <Route path="/admin/*" element={<Navigate to="/admin/users" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

