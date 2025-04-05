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
import AdminPanel from './pages/AdminPanel'

function App() {

  return (
    
   <Routes>
      <Route path='/' element={<Notes></Notes>}></Route>
      <Route path='/login' element={<Authentication></Authentication>}></Route>
      <Route path='/notes/:id' element={<NoteDetails></NoteDetails>}></Route>
      <Route path='/archived' element={<ArchivedNotes></ArchivedNotes>}></Route>
      <Route path='/admin_panel' element={<AdminPanel></AdminPanel>}></Route>
   </Routes>

  )
}

export default App
