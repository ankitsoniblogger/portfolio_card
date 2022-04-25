import React from 'react'
import git from '../media/github.png';
import youtube from '../media/youtube.png';
import linkedin from '../media/linkedin.png'


const card = () => {
  return (
    <div className='md:flex'>
        <div className='mt-10 py-5 px-8 md:flex border shadow-lg rounded-lg shadow-red-200 p-5 space-x-5 border-l-4 border-red-500 items-center justify-center m-auto hover:bg-red-50 cursor-pointer'>
            <img src={youtube} alt="youtube" className='w-8 h-8 shadow-md shadow-red-500 rounded-full'/>
            <p>Follow on Youtube</p>
            
        </div>
        <div className='mt-10 py-5 px-10 md:flex border shadow-lg rounded-lg shadow-black-200 p-5 space-x-5 border-l-4 border-black items-center justify-center m-auto hover:bg-gray-100 cursor-pointer'>
            <img src={git} alt="github" className='w-8 h-8 shadow-md shadow-black rounded-full'/>
            <p>Follow on Github</p>
        </div>
        <div className='mt-10 py-5 px-8 md:flex border shadow-lg rounded-lg shadow-blue-200 p-5 space-x-5 border-l-4 border-blue-500 items-center justify-center m-auto hover:bg-blue-50 cursor-pointer'>
            <img src={linkedin} alt="linked" className='w-8 h-8 shadow-md shadow-blue-500 rounded-full'/>
            <p>Follow on LinkedIn</p>
        </div>
    </div>
  )
}

export default card