import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Counter from './Counter'
import './App.css'
import { GlobalCounterContext } from './contexts'

function App() {
  const [globalCount, setGlobalCount] = useState(0)

  return (
    <GlobalCounterContext.Provider value={{ globalCount, setGlobalCount }}>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <p>global count: {globalCount}</p>
        <div className="card">
          <Counter id="first" />
          <Counter id="second" />
        </div>
      </div>
    </GlobalCounterContext.Provider>
  )
}

export default App
