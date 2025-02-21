import React from 'react'

function App() {
  return <div>
    <CardWrapper innerComponent={<TextComponent />} />
  </div>
}

function TextComponent() {
  return <div>
    hi there
  </div>
}

function CardWrapper({innerComponent}) {
  // create a div which has a border (hint: the way to create a border is border: "2px solid black")
  // and inside the div, renders the prop
  return <div style={{border: "2px solid black"}}>
    {innerComponent}
  </div>
}


export default App