import React from 'react'

function NoteCard(props) {
  return (
    <div className='flex flex-col bg-orange-300 w-60 h-60 gap-y-4 text-black rounded-2xl'>
        <h1 className='text-xl ml-3'>{props.noteCard.title}</h1>
        <h1 className='text-xl ml-3'>{props.noteCard.description}</h1>
    </div>
  )
}

export default NoteCard