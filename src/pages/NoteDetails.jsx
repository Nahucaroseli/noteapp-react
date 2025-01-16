import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router'
import useNote from '../hooks/useNote';

function NoteDetails() {

    const {id} = useParams();

    const note = useNote(id);


  return (
    <>
        <Link to={"/"} className='text-xl ml-5 mt-5'>
        <i className="fa-solid fa-arrow-left mt-5 mr-2"></i>
          Volver
        </Link>
        {note &&
        <div className='flex flex-col mt-10 text-black ml-6 gap-y-10'>
          <h1 className=' text-4xl font-mono font-bold'>{note.title}</h1>
          <div className='flex flex-row flex-wrap gap-x-5 gap-y-5'>
           <h1 className='font-bold text-xl'>{note.description}</h1>
          </div>
        </div>
        }
    </>

  )
}

export default NoteDetails