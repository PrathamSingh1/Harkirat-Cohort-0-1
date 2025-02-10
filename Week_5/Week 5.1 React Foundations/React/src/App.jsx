import { useState } from "react";



function App() {
  const [count, setCount] = useState(0); 

  return (
    <div>

    </div>
  )
}

// component
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App;
