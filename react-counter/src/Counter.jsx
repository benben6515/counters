import { useState, useContext } from 'react'
import { GlobalCounterContext } from './contexts'

const Counter = ({ id }) => {
  const [count, setCount] = useState(0)
  const { globalCount, setGlobalCount } = useContext(GlobalCounterContext)
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        {id} count is: {count}
      </button>
      <button onClick={() => setGlobalCount((count) => count + 1)}>
        global count is {globalCount}
      </button>
    </div>
  )
}

export default Counter
