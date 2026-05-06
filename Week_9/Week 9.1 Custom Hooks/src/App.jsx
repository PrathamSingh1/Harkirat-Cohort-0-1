import "./App.css";
import { useMousePointer } from "./hooks/useMousePointer";

function App() {
  const mousePointer = useMousePointer();
  return (
    <div>
      Your mouse position is {mousePointer.x} {mousePointer.y}
    </div>
  );
}

export default App;
