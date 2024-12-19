import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import useNotes from '../hooks/useNotes';
import CreateForm from '../components/CreateForm';

function Notes() {

    const notes = useNotes();

    const HTMLNotes = notes.map((note)=>{
        return (
            <NoteCard key={note.id} noteCard={note}></NoteCard>
        )
    });


  return (
    <>
    <Navbar />
    <CreateForm></CreateForm>
    <div className='flex flex-col mt-10 text-black ml-6 gap-y-10'>
        <h1 className=' text-4xl font-mono font-bold'><i>Notes</i></h1>
        <div className='flex flex-row flex-wrap gap-x-5 gap-y-5'>
            {HTMLNotes}
        </div>

    </div>
    </>
  )
}

export default Notes