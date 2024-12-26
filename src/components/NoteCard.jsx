import React, { useContext } from 'react'
import { NoteContext } from '../context/note.context';
import { Link } from 'react-router';

function NoteCard(props) {

  const {removeNote} = useContext(NoteContext);


  const handleDelete = (e,id) =>{ 
      e.preventDefault();
      removeNote(id);
  }

  return (
    <Link to={`/notes/${props.noteCard.id}` }>
    <div className='flex flex-col bg-orange-300 w-60 h-60 gap-y-4 text-black rounded-2xl ease-out duration-300 hover:shadow cursor-pointer hover:shadow-xl'>
        <h1 className='text-xl ml-3 mt-4 font-bold'>{props.noteCard.title}</h1>
        <h1 className='text-xl ml-3 w-48 h-60 overflow-hidden ... font-bold'>{props.noteCard.description}</h1>
        <div className='flex flex row gap-x-2 text-xl ml-3 left-36 note_icons'>
          <i onClick={(e)=>{handleDelete(e,props.noteCard.id);}} className="fa-solid fa-trash hover:cursor-pointer"></i>
          <i className="fa-solid fa-pen-to-square hover:cursor-pointer"></i>
          <i className="fa-solid fa-box-archive hover:cursor-pointer"></i>
        </div>
    </div>
    </Link>
  )
}

export default NoteCard