import React from 'react'

function CreateForm() {


    const toggleCreateForm = () =>{
        console.log("HOLA")
        let form = document.querySelector("#createform")
        form.classList.remove("activeCreateForm")
    }


  return (
    <div id='createform' className="fixed inset-0 flex items-center justify-center notActiveCreateForm">
        <form className="h-80 w-80 bg-slate-300 text-black flex flex-col gap-y-5 items-center justify-center rounded-md shadow-lg">
            <i onClick={toggleCreateForm} className="fa-solid fa-xmark relative top-0 left-32 hover:cursor-pointer"></i>
            <h1 className='text-2xl'>Agregar Nota</h1>
            <label htmlFor="">Titulo</label>
            <input type="text" className='text-black' />
            <label htmlFor="">Descripcion</label>
            <input type="text" className='text-black' />
            <button className=''>Agregar</button>
        </form>
    </div>
  )
}

export default CreateForm