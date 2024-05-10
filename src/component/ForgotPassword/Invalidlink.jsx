import React from 'react'
import { Link } from 'react-router-dom';


const Invalidlink = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center my-[5rem]'>
            <h1 className='text-red-500 text-[3rem]'>
            The link is expired, Please try again.
            </h1>
            <div className='mt-4 p-2 rounded-sm  text-white text-[1.5rem]'>
                <Link className=' bg-teal-500 p-2' to='/'>Home</Link>
            </div>
        </div>
    </div>
  )
}

export default Invalidlink