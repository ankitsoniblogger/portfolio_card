import React from 'react'
import avatar from '../media/alex.jpg'
import wave from '../media/wave-hand.gif'

const Hero = () => {
  return (
      <>
    <div className='mt-10 py-10 md:flex border-2 shadow-lg rounded-lg shadow-orange-200 p-5 space-x-10  justify-center m-auto'>
      
      <div className='w-1/4'>
        <img src={avatar} alt="avatar" className='shadow-lg object-cover rounded-full shadow-green-200'/>
        </div>
        <div className='mt-5 w-3/5 '>
        <h1 className='font-bold text-3xl md:flex '>Hi, I'm Ankit Soni. <span className='md:flex justify-center items-center'><img src={wave} alt="" className='w-8 h-8'/></span>  </h1>
        <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corporis sed non minus esse, ab commodi modi explicabo tempora ea est recusandae voluptatem possimus illo. Eligendi dolor quis distinctio placeat magni, officia exercitationem omnis numquam voluptatibus deserunt voluptates provident odio eos debitis quisquam accusamus? Tempore amet quibusdam iste id exercitationem.</p>
        <Button />
      </div>
      
    </div>
    
    </>
  )
}

const Button = () => {
    return(
    <button className='md:flex-none bg-orange-500 rounded shadow-lg px-5 py-2 font-medium text-white mt-4 hover:bg-orange-600 transition-all ease-in duration-500'>Download CV</button>
    )
}


export default Hero