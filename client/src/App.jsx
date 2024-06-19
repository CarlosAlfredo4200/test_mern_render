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
          const res = await fetch('http://localhost:3000/usuarios');
          const data = await res.json();
          console.log(data);
        }}
      >Users</button>
      </div>
       
    </>
  )
}

export default App
