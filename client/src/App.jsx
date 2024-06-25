import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Auth, Users, Blog, Academicos, Administrativos, Q10 } from "./pages/admin";
import { Home } from "./pages/web";
import "./App.css";
import AdminLayout from "./layouts/adminLayouts/AdminLayout";
import ClientLayouts from "./layouts/clientLayouts/ClientLayouts";
import Colegio from "./pages/web/Colegio";
import Contactos from "./pages/web/Contactos";
import Q10Web from './pages/web/Q10web';

const user = null; // Cambia a null para probar la redirección

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          // Si el usuario es null, redirige a la página de autenticación sin layout
          <>
            <Route path="/admin" element={<Auth />} />
            <Route path="*" element={<Navigate to="/admin" />} />
          </>
        ) : (
          // Rutas de administración con layout
          <Route element={<AdminLayout />}>
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/blog" element={<Blog />} />
            <Route path="/admin/academico" element={<Academicos />} />
            <Route path="/admin/administracion" element={<Administrativos />} />
            <Route path="/admin/q10" element={<Q10 />} />
            <Route path="*" element={<Navigate to="/admin/users" />} />
          </Route>
        )}
        <Route element={<ClientLayouts />}>
          <Route index element={<Home />} />
          <Route path="/colegio" element={<Colegio />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/q10web" element={<Q10Web />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


{
  /* <div className="App">
<header className="App-header">
  <h1>COLEGIO PANAMERICANO COLOMBO SUECO</h1>
  <p className="slogan">30 años</p>
  <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <Link to ="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=d12efeb8-f609-4dd1-87cd-1cb0c95d32e2"  target="_blank">Ir a Q10</Link>
      <li><Link to="/academicos">Académicos</Link></li>
      <li><Link to="/administrativos">Administrativos</Link></li>
      <li><Link to="/contactos">Contactos</Link></li>
    </ul>
  </nav>
</header>
<main>
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/q10" element={<Q10 />} />
    <Route path="/academicos" element={<Academicos />} />
    <Route path="/administrativos" element={<Administrativos />} />
    <Route path="/contactos" element={<Contactos />} />
  </Routes>
</main>
</div> */
}

//         <button
//           onClick={async () => {
//             const res = await fetch(
//               `${import.meta.env.VITE_BACKEND_URL}/usuarios`
//             );
//             const data = await res.json();
//             console.log(data);
//           }}
//         >
//           Users
//         </button>

//         <a href="https://www.q10.com/Colombia"  target="_blank">
//           Ir a Q10 Colombia
//         </a>
//       </div>
//     </>
//   );
// }
