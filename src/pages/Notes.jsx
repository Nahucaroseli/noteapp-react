import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import useNotes from '../hooks/useNotes';
import CreateForm from '../components/CreateForm';
import { NoteContext } from '../context/note.context';
import EditForm from '../components/EditForm';
import { useNavigate } from 'react-router';


function Notes() {

    const {notes} = useContext(NoteContext);
    const [HTMLNotes,setHTMLNotes] = useState("");
    const navigate = useNavigate();


    useEffect(()=>{
        const user = localStorage.getItem("username");
        if(user == null){
            navigate("/login");
        }


        if(notes){
            const html = notes
            .filter(note => !note.archived) 
            .map((note) => (
                <NoteCard key={note.id} noteCard={note}></NoteCard>
            ));
            if(html.length === 0){
                setHTMLNotes(<h1 className='font-bold'>No tienes ninguna nota</h1>);
            }else{
                setHTMLNotes(html);
            }
        }
    },[notes])


  return (
    <>
    <Navbar />
    <CreateForm></CreateForm>
    <div className='flex flex-col mt-10 text-black ml-6 gap-y-10 overflow-hidden'>
        <h1 className=' text-5xl font-mono font-bold'>Notas</h1>
        <div className='flex flex-row flex-wrap gap-x-5 gap-y-5'>
            {HTMLNotes}
        </div>

    </div>
    </>
  )
}

export default Notes