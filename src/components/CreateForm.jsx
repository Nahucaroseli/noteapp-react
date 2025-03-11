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
        title: title,
        description: description,
        usuario_id: 1
      }

      addNote(newNote);
  }

    const toggleCreateForm = () =>{
        let form = document.querySelector("#createform")
        form.classList.remove("activeCreateForm")
    }



  return (
    <div id='createform' className="fixed inset-0 flex items-center justify-center notActiveCreateForm z-10 bg-gray-800 bg-opacity-50">
    <form onSubmit={(e) => { handleSubmit(e); }} className="h-auto w-96 bg-white text-gray-800 flex flex-col gap-y-5 items-center justify-center rounded-lg shadow-2xl p-6 relative">
        <i onClick={toggleCreateForm} className="fa-solid fa-xmark absolute top-4 right-4 text-gray-500 hover:text-red-500 hover:cursor-pointer transition duration-200"></i>
        <h1 className="text-3xl font-bold mb-8 text-gray-700">Add Note</h1>
        <label htmlFor="title" className="text-sm font-semibold text-gray-600">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400" required="true" />
        <label htmlFor="description" className="text-sm font-semibold text-gray-600">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ resize: 'none' }} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 h-28" required="true"  />
        <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-200">Add New Note</button>
    </form>
  </div>
  )
}

export default CreateForm