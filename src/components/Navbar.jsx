import React from 'react'
import { Link, useNavigate } from 'react-router';

function Navbar() {


    const navigate = useNavigate();


  const toggleCreateForm = ()=>{
    let form = document.querySelector("#createform");
    form.classList.add('activeCreateForm');
  }


  const handleLogout =()=>{
    localStorage.removeItem("username");
    navigate("/login");
  }

  return (
    <nav className='text-white h-14 border-2 border-bottom '>
        <div className='flex flex-row ml-2 text-2xl text-black justify-between'>
          <div className='flex flex-row'>
            <div className='bg-black w-8 h-8 rounded-full mt-2 items-center flex justify-center'>
              <button onClick={toggleCreateForm} className='-mt-1 hover:cursor-pointer text-white'>+</button>
            </div>

            <Link to={"/archived"} className='ml-5'>
                <button className='mt-3 mr-3 text-xl'>archived notes</button>
              </Link>
          </div>

            

            <i onClick={handleLogout} className="fa-solid fa-right-from-bracket mt-4 mr-2 hover:cursor-pointer"></i>

        </div>
    </nav>
  )
}

export default Navbar