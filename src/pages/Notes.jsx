import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import useNotes from '../hooks/useNotes';
import CreateForm from '../components/CreateForm';
import { NoteContext } from '../context/note.context';


function Notes() {

    const {notes} = useContext(NoteContext);
    const [HTMLNotes,setHTMLNotes] = useState("");


    useEffect(()=>{
        const html = notes.map((note)=>{
            return (
                <NoteCard key={note.id} noteCard={note}></NoteCard>
            );
        })
        setHTMLNotes(html);
    },[notes])


  return (
    <>
    <Navbar />
    <CreateForm></CreateForm>
    <div className='flex flex-col mt-10 text-black ml-6 gap-y-10 overflow-hidden'>
        <h1 className=' text-4xl font-mono font-bold'>Notes</h1>
        <div className='flex flex-row flex-wrap gap-x-5 gap-y-5'>
            {HTMLNotes}
        </div>

    </div>
    </>
  )
}

export default Notes