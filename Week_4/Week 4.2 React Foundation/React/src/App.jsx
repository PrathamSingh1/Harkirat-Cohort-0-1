import { useState } from 'react'
import './App.css'

function App() {

  // dynamic websites
  // when u have to create a dynamic website,
  // you write a lot of JS code that does DOM manipulation
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
        
        
    </>
  )
}

export default App
