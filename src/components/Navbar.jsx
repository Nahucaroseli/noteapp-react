import React from 'react'

function Navbar() {



  const toggleCreateForm = ()=>{
    let form = document.querySelector("#createform");
    form.classList.add('activeCreateForm');
  }

  return (
    <nav className='bg-slate-400 text-white h-12 '>
        <div className='flex flex-row ml-5 text-xl text-black justify-between'>
            <button onClick={toggleCreateForm} className='mt-2 hover:cursor-pointer' >+</button>
            <button className='mt-2 mr-3'>archived notes</button>
        </div>
    </nav>
  )
}

export default Navbar