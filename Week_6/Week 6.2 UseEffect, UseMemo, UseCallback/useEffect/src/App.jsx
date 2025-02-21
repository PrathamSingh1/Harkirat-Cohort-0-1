import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <button onClick={function() {
        setSelectedId(1);
      }}>1</button>

      <button onClick={function() {
        setSelectedId(2);
      }}>2</button>

      <button onClick={function() {
        setSelectedId(3);
      }}>3</button>

      <Todo id={selectedId} />
    </>
  )
}
 

function Todo({id}) {  
  const [todo, setTodo] = useState({});

  // implemet effect here
  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(function(response) {
        setTodo(response.data.todo)
      })
  }, [id]);
  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
    {todo.description}
    </h4>
  </div>
}

export default App
