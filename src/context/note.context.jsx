import React, { createContext, useEffect, useState } from 'react'
import useNotes from '../hooks/useNotes';
import { addToNotes, updateNote, deleteFromNotes } from '../services/notes';

const NoteContext = createContext();


function NoteContextWrapper(props) {


    const [notes,setNotes] = useNotes();



    const addNote = async (newNote) =>{
       const note = await addToNotes(newNote);
       if(note){
        setNotes([...notes,note]);
       }
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

    const editNote = async(newNote) => {
      const updateNotes = notes.map((value)=>{
        if(newNote.id == value.id){
          return newNote;
        }else{
          return value;
        }
      })
      setNotes(updateNotes);
      const note = updateNotes.find(value => value.id === newNote.id);
      if(note){
        await updateNote(note);
      }
    }
    
    const archiveNote = async (noteId) =>{
          const updatedNotes = notes.map((value)=>{
            if(noteId=== value.id){
              if(value.archived == false){
                return {...value,archived:true};
              } 
              else if(value.archived == true){
                return {...value,archived:false};
              }
            }else{
              return value;
            }
          });
          setNotes(updatedNotes);
          const note = updatedNotes.find(value => value.id === noteId);
          if(note){
            await updateNote(note);
          }
    };



  return (
    <NoteContext.Provider value={{notes,setNotes,addNote,removeNote,archiveNote,editNote}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export {NoteContext,NoteContextWrapper}