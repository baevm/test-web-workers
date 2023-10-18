/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-inner-declarations */
import { useState } from 'react'
import './App.css'
import Canvas from './Canvas'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { heavyFunction } from './heavyFunction'

const heavyWorker = new Worker(new URL("./worker.ts", import.meta.url), {type: "module"})

function App() {
  const [count, setCount] = useState(0)
  const [type, setType] = useState("noWorker")

  const doHeavyWithWorker = () => {
    heavyWorker.postMessage(3000)

    heavyWorker.onmessage = (e) => {
      console.log("Received from worker", e.data)
      setCount(e.data)
    }
  }

  const block = () => {
    switch (type) {
      case "noWorker":{
        const res = heavyFunction(3000)
        setCount(res)
        break;
      }

      case "Worker": {
        doHeavyWithWorker()
        break;
      }
    
      default:
        break;
    }
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

      <div onChange={(e: any) => setType(e.target.value)}>
        <input  type='radio' id='noWorker' value='noWorker' name='worker-select' />
        <label htmlFor='noWorker'>No worker</label>

        <input type='radio' id='worker' value='Worker' name='worker-select' />
        <label htmlFor='worker'>Worker</label>
      </div>


      <div className="card">
        <button onClick={block}>
          Block main thread for 3 seconds
        </button>
        <p>
          Received from worker: {count}
        </p>
      </div>
      <Canvas />
    </>
  )
}

export default App
