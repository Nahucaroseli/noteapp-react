import React from 'react'

function NoteCard(props) {
  return (
    <div className='flex flex-col bg-yellow-200 w-60 h-60 text-black'>
        <h1 className='text-xl'>{props.noteCard.title}</h1>
        
    </div>
  )
}

export default NoteCard