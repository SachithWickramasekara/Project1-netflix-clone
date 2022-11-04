import React from 'react'
import {Link} from 'react-router-dom'
const footer = () => {
  return (
    <>
    <div className='bg-gray-900 w-full h-[60px] '>
      <Link to='/editor'>
      <button className='text-stone-300 text-2xl p-3 absolute right-1'>About-Developer</button>
      </Link>
        
    </div>
    
    </>
  )
}

export default footer