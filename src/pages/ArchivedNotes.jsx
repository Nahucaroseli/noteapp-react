import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../context/note.context';
import NoteCard from '../components/NoteCard';
import { Link } from 'react-router';

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
    <Link to={"/"} className='text-xl ml-5 mt-5'>
        <i className="fa-solid fa-arrow-left mt-5 mr-2"></i>
          Volver
    </Link>
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