import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Chat from './Pages/Chat.jsx'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      
      <Route path="/chat" element={<Chat/>}></Route>
    
    </Routes>
      
    </>
  )
}

export default App
