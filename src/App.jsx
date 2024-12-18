import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router'
import Notes from './pages/Notes'

function App() {

  return (
    
   <Routes>
      <Route path='/' element={<Notes></Notes>}></Route>
   </Routes>

  )
}

export default App
