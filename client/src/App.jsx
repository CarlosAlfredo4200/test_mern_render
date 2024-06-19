import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
      <h1> MERN RENDER</h1>
      <button 
        onClick={ async () => {
          const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/usuarios`);
          const data = await res.json();
          console.log(data);
        }}
      >Users</button>
      </div>
       
    </>
  )
}

export default App
