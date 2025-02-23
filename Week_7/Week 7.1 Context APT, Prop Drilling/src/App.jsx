import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Dashboard from './Components/Dashboard';
import Landing from './Components/Landing';

function App() {

  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <>
    <div>
      <button onClick={() => {
        // window.location.href = "/";  
        navigate("/");
      }}>Landing page</button>

      <button onClick={() => {
        // window.location.href = "/dashboard";
        navigate("/dashboard");
      }}>Dashboard page</button>
    </div>
    </>
  )
}


export default App
