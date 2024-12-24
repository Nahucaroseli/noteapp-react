import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/note.context';

function CreateForm() {

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const {notes,addNote} = useContext(NoteContext);


  const handleSubmit =  (e)=> {
    let form = document.querySelector("#createform")
    form.classList.remove("activeCreateForm")
    e.preventDefault();
      const newNote = {
        id: notes.length+1,
        title: title,
        description: description
      }

      addNote(newNote);
  }

    const toggleCreateForm = () =>{
        let form = document.querySelector("#createform")
        form.classList.remove("activeCreateForm")
    }



  return (
    <div id='createform' className="fixed inset-0 flex items-center justify-center notActiveCreateForm z-10">
        <form onSubmit={(e)=>{ handleSubmit(e);} } className="h-2/3 w-80 bg-slate-300 text-black flex flex-col gap-y-5 items-center justify-center rounded-md shadow-lg">
            <i onClick={toggleCreateForm} className="fa-solid fa-xmark relative top-2 left-32 hover:cursor-pointer"></i>
            <h1 className='text-2xl  mb-10'>Agregar Nota</h1>
            <label htmlFor="">Titulo</label>
            <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" className='text-black' />
            <label htmlFor="">Descripcion</label>
            <textarea value={description} onChange={(e)=> setDescription(e.target.value)} style={{resize:'none', width:300 , height:100}} type="text" className='text-black'/>
            <button className='bg-black p-3 text-white rounded-xl'>Agregar</button>
        </form>
    </div>
  )
}

export default CreateForm