import React from 'react'
import { Link } from 'react-router';

function Navbar() {



  const toggleCreateForm = ()=>{
    let form = document.querySelector("#createform");
    form.classList.add('activeCreateForm');
  }

  return (
    <nav className='text-white h-14 border-2 border-bottom '>
        <div className='flex flex-row ml-5 text-2xl text-black justify-between'>
            <button onClick={toggleCreateForm} className='mt-2 hover:cursor-pointer' > + </button>
            <Link to={"/archived"}>
              <button className='mt-2 mr-3'>archived notes</button>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar