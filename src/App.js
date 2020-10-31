import React, { useState } from "react"
import { FiChevronsUp } from "react-icons/fi";
import { FiChevronsDown } from "react-icons/fi";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    const parsedCount = Number(localStorage.getItem("count") || 0)
    setCount(parsedCount)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  return (
    <div className="mid-box">
      <div className="Contagem">
        <h1>
          Contagem
      </h1>
      </div>
      <div className="number">{count}</div>

      <button className="button-success" onClick={() => setCount(counter => counter + 1)}> <FiChevronsUp /> </button>
      <button className="button-failure" onClick={() => setCount(counter => counter - 1)}> <FiChevronsDown /> </button>

      <div>
        <button className="button-reset" onClick={() => setCount(0)}> Resetar </button>
      </div>


      <div className="Contagem">
        <h1>
          Contagem
      </h1>
      </div>
      <div className="number">{count}</div>

      <button className="button-success" onClick={() => setCount(counter => counter + 1)}> <FiChevronsUp /> </button>
      <button className="button-failure" onClick={() => setCount(counter => counter - 1)}> <FiChevronsDown /> </button>

      <div>
        <button className="button-reset" onClick={() => setCount(0)}> Resetar </button>
      </div>
    </div>
  )

}

export default App;
