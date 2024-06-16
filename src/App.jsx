import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [contar, setContar] = useState(0);

  useEffect(()=> {
    console.log("Total: " + contar);
  }, [contar])

  const encenderApagar = () => {
    setContar(contar + 1);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={encenderApagar}>
        Clicks: {contar}
        </button>
    </div>
    </>
  )
}

export default App
