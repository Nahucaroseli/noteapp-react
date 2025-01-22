import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router'
import useNote from '../hooks/useNote';
import EditForm from '../components/EditForm';
import { NoteContext } from '../context/note.context';

function NoteDetails() {

    const {id} = useParams();

    

    const {notes} = useContext(NoteContext);

    const note = notes.find(note => note.id == id);

    const [HTMLNOTE,setHTMLNOTE] = useState("");

    const openEditForm = (e) =>{
        e.preventDefault();
        let form = document.querySelector("#editform");
        form.classList.add("activeEditForm");
    }

    useEffect(()=>{
      let html;
      if(note){
        html = notes.map((value)=>{
          if(value.id === note.id){
            return (
              <div key={value.id} className='flex flex-col mt-10 text-black ml-6 gap-y-10'>
            <h1 className=' text-4xl font-mono font-bold'>{note.title}</h1>
            <div className='flex flex-row flex-wrap gap-x-5 gap-y-5'>
            <h1 className='font-bold text-xl'>{note.description}</h1>
            </div>
          </div>
            )
          }
      })
      }
      
      setHTMLNOTE(html);
  },[note])


  return (
    <>
        <EditForm key={id}></EditForm>
        <Link to={"/"} className='text-xl ml-5 mt-5'>
        <i className="fa-solid fa-arrow-left mt-5 mr-2"></i>
          Volver
        </Link>
        <i onClick={(e) => {openEditForm(e)}} className="ml-4 fa-solid fa-pen-to-square hover:cursor-pointer"></i>
        {note &&
            HTMLNOTE
        }
    </>

  )
}

export default NoteDetails