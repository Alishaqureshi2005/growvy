import React from 'react'

const Servicecard = ({imgurl,tittle,prag}) => {
  return (
    
    <div className='w-full sm:w-[48%] md:w-[40%]  lg:w-[25%] xl:w-[23%] mb-8'>
        <div className='border-1 p-4 sm:p-6 text-center flex flex-col items-center rounded-2xl h-full'>
        {/* cardhead */}
      <div className='w-[70%] sm:w-[80%] relative -top-8 sm:-top-12'>
    <img src={imgurl} alt="" className='w-full aspect-[4/2] object-cover' />
      </div>
      {/* cardbody */}
      <div className='flex-1 flex flex-col justify-center'>
<h1 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>{tittle}</h1>
<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>{prag}</p>

      </div>
      </div>
<div className='w-full flex justify-center mt-4 sm:mt-5'><button className='bg-green-500 text-base sm:text-xl w-[80%] max-w-[200px] p-2 sm:p-3 rounded-full text-white font-bold hover:bg-green-600 transition-colors duration-300'>Plan</button></div>
    </div>
  )
}

export default Servicecard

