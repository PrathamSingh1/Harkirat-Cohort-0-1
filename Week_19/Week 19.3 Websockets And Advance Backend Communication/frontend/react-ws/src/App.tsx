import { useEffect, useState } from 'react'

const App = () => {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    }
    socket.onmessage = (message) => {
      console.log("Received message:", message.data);
      setLatestMessage(message.data);
    }

    return () => {
      socket.close();
    }
  }, [])

  if (!socket) {
    return <div>
      Connection to socket server...
    </div>
  }
  return (
    <div>
      <input onChange={(e) => {
        setMessage(e.target.value);
      }} type="text" />
      <button onClick={() => {
        socket.send(message);
      }}>Send</button>
      {latestMessage}
    </div>
  )
}

export default App