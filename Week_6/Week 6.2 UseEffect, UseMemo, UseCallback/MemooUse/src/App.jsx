import React, { useMemo, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    console.log("memo got called")
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);
  

  return (
    <div>
      <input onChange={function(e) {
        setInputValue(e.target.value);
      }} placeholder={"Find sum from 1 to n"} />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Counter ({counter})</button>
    </div>
  )
}

export default App



//        memo 

// import { memo, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0)

//   return <div>
//     <ButtonComponent />
//     <button onClick={() => {
//       setCount(count + 1);
//     }}>Click me {count}</button>
//   </div>
// }

// const ButtonComponent = memo(() => {
//   console.log("child render")

//   return <div>
//     <button>Button clicked</button>
//   </div>
// })

// export default App;