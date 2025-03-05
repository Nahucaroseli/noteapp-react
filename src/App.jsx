import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router'
import Notes from './pages/Notes'
import NoteDetails from './pages/NoteDetails'
import ArchivedNotes from './pages/ArchivedNotes'
import Authentication from './pages/Authentication'

function App() {

  return (
    
   <Routes>
      <Route path='/' element={<Authentication></Authentication>}></Route>
      <Route path='/notes' element={<Notes></Notes>}></Route>
      <Route path='/notes/:id' element={<NoteDetails></NoteDetails>}></Route>
      <Route path='/archived' element={<ArchivedNotes></ArchivedNotes>}></Route>
   </Routes>

  )
}

export default App
