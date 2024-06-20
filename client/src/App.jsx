import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Inicio from './pages/Inicio';
import Q10 from './pages/Q10';
import Academicos from './pages/Academicos';
import Administrativos from './pages/Administrativos';
import Contactos from './pages/Contactos';

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;











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

