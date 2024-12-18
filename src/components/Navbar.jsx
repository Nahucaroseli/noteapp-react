import React from 'react'

function Navbar() {
  return (
    <nav className='bg-purple-900 text-white h-12 gap-x-20 overflow-hidden'>
        <div className='flex flex-row gap-x-10 ml-5 text-xl justify-between overflow-hidden'>
            <button className='mt-2 hover:cursor-pointer'>+</button>
            <button className='mt-2 mr-3'>archived notes</button>
        </div>
    </nav>
  )
}

export default Navbar