import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { NoteContextWrapper } from './context/note.context.jsx';
import { UsuarioContextWrapper } from './context/usuario.context.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UsuarioContextWrapper>
      <NoteContextWrapper>
          <App />
        </NoteContextWrapper>
    </UsuarioContextWrapper>
  </BrowserRouter>
  
)
