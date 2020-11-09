import React, { useState } from "react"
import { FiChevronsUp } from "react-icons/fi";
import { FiChevronsDown } from "react-icons/fi";
import './App.css';

function App() {

  // Counter 01
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    const parsedCount = Number(localStorage.getItem("count") || 0)
    setCount(parsedCount)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])


  // Counter 02
  const [count2, setCount2] = useState(0);

  React.useEffect(() => {
    const parsedCount2 = Number(localStorage.getItem("count2") || 0)
    setCount2(parsedCount2)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("count2", count2)
  }, [count2])

  // Counter 03
  const [count3, setCount3] = useState(0);

  React.useEffect(() => {
    const parsedCount3 = Number(localStorage.getItem("count3") || 0)
    setCount3(parsedCount3)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("count3", count3)
  }, [count3])

  // Counter 04
  const [count4, setCount4] = useState(0);

  React.useEffect(() => {
    const parsedCount4 = Number(localStorage.getItem("count4") || 0)
    setCount4(parsedCount4)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("count4", count4)
  }, [count4])

  // Counter 05
  const [count5, setCount5] = useState(0);

  React.useEffect(() => {
    const parsedCount5 = Number(localStorage.getItem("count5") || 0)
    setCount5(parsedCount5)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("count5", count5)
  }, [count5])

  // Counter 06
  const [count6, setCount6] = useState(0);

  React.useEffect(() => {
    const parsedCount6 = Number(localStorage.getItem("count6") || 0)
    setCount6(parsedCount6)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("count6", count6)
  }, [count6])

  return (
    <div className="mid-box">
      <div className="Contagem">
        <h1>
          Contador 1
        </h1>
      </div>
      <div className="number">{count}</div>

      <button className="button-success" onClick={() => setCount(counter => counter + 1)}> <FiChevronsUp /> </button>
      <button className="button-failure" onClick={() => setCount(counter => counter - 1)}> <FiChevronsDown /> </button>

      <div>
        <button className="button-reset" onClick={() => { setCount(0) }}> Resetar </button>
      </div>

      <div className="Contagem">
        <h1>
          Contador 2
        </h1>
      </div>
      <div className="number">{count2}</div>

      <button className="button-success" onClick={() => setCount2(counter2 => counter2 + 1)}> <FiChevronsUp /> </button>
      <button className="button-failure" onClick={() => setCount2(counter2 => counter2 - 1)}> <FiChevronsDown /> </button>

      <div>
        <button className="button-reset" onClick={() => { setCount2(0) }}> Resetar </button>
      </div>

      <div className="Contagem">
        <h1>
          Contador 3
        </h1>
      </div>
      <div className="number">{count3}</div>

      <button className="button-success" onClick={() => setCount3(counter3 => counter3 + 1)}> <FiChevronsUp /> </button>
      <button className="button-failure" onClick={() => setCount3(counter3 => counter3 - 1)}> <FiChevronsDown /> </button>

      <div>
        <button className="button-reset" onClick={() => { setCount3(0) }}> Resetar </button>
      </div>

      <div className="Contagem">
        <h1>
          Contador 4
        </h1>
      </div>
      <div className="number">{count4}</div>

      <button className="button-success" onClick={() => setCount4(counter4 => counter4 + 1)}> <FiChevronsUp /> </button>
      <button className="button-failure" onClick={() => setCount4(counter4 => counter4 - 1)}> <FiChevronsDown /> </button>

      <div>
        <button className="button-reset" onClick={() => { setCount4(0) }}> Resetar </button>
      </div>

      <div className="Contagem">
        <h1>
          Contador 5
        </h1>
      </div>
      <div className="number">{count5}</div>

      <button className="button-success" onClick={() => setCount5(counter5 => counter5 + 1)}> <FiChevronsUp /> </button>
      <button className="button-failure" onClick={() => setCount5(counter5 => counter5 - 1)}> <FiChevronsDown /> </button>

      <div>
        <button className="button-reset" onClick={() => { setCount5(0) }}> Resetar </button>
      </div>

      <div className="Contagem">
        <h1>
          Contador 6
        </h1>
      </div>
      <div className="number">{count6}</div>

      <button className="button-success" onClick={() => setCount6(counter6 => counter6 + 1)}> <FiChevronsUp /> </button>
      <button className="button-failure" onClick={() => setCount6(counter6 => counter6 - 1)}> <FiChevronsDown /> </button>

      <div>
        <button className="button-reset" onClick={() => { setCount6(0) }}> Resetar </button>
      </div>
    </div>


  )

}

export default App;
