import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import useNotes from '../hooks/useNotes';
import CreateForm from '../components/CreateForm';
import { NoteContext } from '../context/note.context';
import EditForm from '../components/EditForm';


function Notes() {

    const {notes} = useContext(NoteContext);
    const [HTMLNotes,setHTMLNotes] = useState("");


    useEffect(()=>{
        const html = notes
        .filter(note => !note.archived) 
        .map(note => (
            <NoteCard key={note.id} noteCard={note}></NoteCard>
        ));
        setHTMLNotes(html);
    },[notes])


  return (
    <>
    <Navbar />
    <CreateForm></CreateForm>
    <EditForm></EditForm>
    <div className='flex flex-col mt-10 text-black ml-6 gap-y-10 overflow-hidden'>
        <h1 className=' text-4xl font-mono font-bold'>Notes</h1>
        <div className='flex flex-row flex-wrap gap-x-5 gap-y-5'>
            {notes.length == 0 &&
                <h1 className='font-bold'>You don't have any notes</h1>
            }
            {HTMLNotes}
        </div>

    </div>
    </>
  )
}

export default Notes