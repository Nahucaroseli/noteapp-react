import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../context/note.context';
import NoteCard from '../components/NoteCard';

function ArchivedNotes() {

    const {notes} = useContext(NoteContext);
    const [HTMLNotes,setHTMLNotes] = useState("");


    useEffect(()=>{
        const html = notes.map((note)=>{
            if(note.archived){
                return (
                    <NoteCard key={note.id} noteCard={note}></NoteCard>
                );
            }

        })
        setHTMLNotes(html);
    },[notes])


  return (
    <>
    <div className='flex flex-col mt-10 text-black ml-6 gap-y-10 overflow-hidden'>
        <h1 className=' text-4xl font-mono font-bold'>Archived notes</h1>
        <div className='flex flex-row flex-wrap gap-x-5 gap-y-5'>
            {HTMLNotes}
        </div>

    </div>
    </>
  )
}

export default ArchivedNotes