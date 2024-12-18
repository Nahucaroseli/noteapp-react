import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import useNotes from '../hooks/useNotes';

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
    <div className='container flex flex-col mt-10 text-white ml-6 gap-y-10'>
        <h1 className=' text-4xl font-mono font-bold'><i>NOTES</i></h1>
        <div className='flex flex-row flex-wrap gap-x-5 gap-y-5'>
            {HTMLNotes}
        </div>

    </div>
    </>
  )
}

export default Notes