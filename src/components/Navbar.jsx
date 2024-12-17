import React from 'react'

function Navbar() {
  return (
    <nav className='bg-purple-900 text-white h-12 gap-x-20'>
        <div className='flex flex-row gap-x-10 ml-5 text-xl justify-between'>
            <h1 className='mt-2'>+</h1>
            <h1 className='mt-2 mr-3'>archived notes</h1>
        </div>
    </nav>
  )
}

export default Navbar