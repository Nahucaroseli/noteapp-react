import React, { createContext, useEffect, useState } from 'react'
import useNotes from '../hooks/useNotes';
import { addToNotes, archiveExistingNote, deleteFromNotes } from '../services/notes';

const NoteContext = createContext();


function NoteContextWrapper(props) {


    const [notes,setNotes] = useNotes();



    const addNote = async (newNote) =>{
        addToNotes(newNote);
        setNotes([...notes,newNote]);
    };

    const removeNote = async (noteId) =>{
      const note = notes.find(note => note.id === noteId);
      if(note){
        deleteFromNotes(noteId)
        setNotes(notes.filter((item)=>{
          return item !== note;
        }));
      }
      
      };
    
    const archiveNote = async (noteId) =>{
          const updatedNotes = notes.map((value)=>{
            if(noteId=== value.id){
              return {...value,archived:true};
            }else{
              return value;
            }
          });
          setNotes(updatedNotes);
          const note = updatedNotes.find(value => value.id === noteId);
          if(note){
            await archiveExistingNote(note);
          }
    };



  return (
    <NoteContext.Provider value={{notes,setNotes,addNote,removeNote,archiveNote}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export {NoteContext,NoteContextWrapper}