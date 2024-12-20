import React, { createContext, useEffect, useState } from 'react'
import useNotes from '../hooks/useNotes';
import { addToNotes } from '../services/notes';

const NoteContext = createContext();


function NoteContextWrapper(props) {


    const [notes,setNotes] = useNotes();



    const addNote = async (newNote) =>{
        addToNotes(newNote);
        setNotes([...notes,newNote]);
    };

  return (
    <NoteContext.Provider value={{notes,setNotes,addNote}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export {NoteContext,NoteContextWrapper}