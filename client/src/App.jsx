import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1> MERN RENDER</h1>
        <button
          onClick={async () => {
            const res = await fetch(
              `${import.meta.env.VITE_BACKEND_URL}/usuarios`
            );
            const data = await res.json();
            console.log(data);
          }}
        >
          Users
        </button>

        <a href="https://www.q10.com/Colombia"  target="_blank">
          Ir a Q10 Colombia
        </a>
      </div>
    </>
  );
}

export default App;
