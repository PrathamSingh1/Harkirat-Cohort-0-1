            What are custom hooks

Hooks that you create yourself, so other people can use them are called custom hooks.

A custom hook  is effectively a function, but with the following properties-

    1. Uses another hook internally (useState, useEffect, another custom hook)
    2. Starts with use

A few good examples of this can be 

1. Data fetching hooks
2. Browser functionality related hooks - useOnlineStatus, useWindowSize, useMousePosition
3. Performance/Timer Based - useInterval, useDebounce


1. useIsOnline hook

Create  a hook that returns true or false based on weather the user is currently online

You are given that- 
1. window.navigator.onLine returns true or false basend on weather the user is online 
2. You can attach the following event listeners to listen to weather the user is online or not

window.addEventListener('online', ()=> console.log('Became online'));
window.addEventListener('offline', ()=> console.log('Become offline'));

Solution-

import { useEffect, useState } from 'react'

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, [])

  return isOnline;
}

function App() {
  const isOnline = useIsOnline(5);

  return (
    <>
      {isOnline ? "You are online yay!" : "You are not online"}
    </>
  )
}

export default App