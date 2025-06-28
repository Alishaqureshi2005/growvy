import React from 'react'
import Path from '../../media/path.png'
import Echonet from '../../media/echonet.webp'
import Easy from '../../media/easy.png'
import Swril from '../../media/swrill.png'
import Motive from '../../media/motive.png'
import Logo from '../../media/logo.png'
import { CiStar } from 'react-icons/ci'
import User from '../../media/user.png'
import { TbStarFilled } from 'react-icons/tb'

const Success = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      {/* Hero Section */}
      <div className='flex flex-col justify-center text-center bg-blue-200 rounded-b-[50px] sm:rounded-b-[75px] lg:rounded-b-full h-[150px] sm:h-[180px] lg:h-[200px] px-4 sm:px-8 lg:px-16'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-[Roboto-Bold] mb-2 lg:mb-4'>Success</h1>
        <q className='text-sm sm:text-lg lg:text-2xl leading-relaxed'>Discover inspiring Success Stories—see how our solutions empower businesses to thrive!</q>
      </div>

      {/* Clients Section */}
      <div className='mt-8 sm:mt-10 lg:mt-10 flex flex-col justify-center items-center'>
        <div className='text-center mb-8 lg:mb-10'>
          <h1 className='font-[Roboto-Bold] text-2xl sm:text-3xl lg:text-5xl mb-4 lg:mb-6'>Join over 10k Clients worldwide</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg w-full sm:w-[60%] lg:w-[30%] rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300 py-2'>View Pricing</button>
        </div>
        
        {/* Client Logos */}
        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 lg:mt-10 w-full'>
          <div className='w-[40%] sm:w-[25%] lg:w-[20%]'>
            <img src={Echonet} alt="Echonet" className='w-full aspect-4/3 object-contain' />
          </div>
          <div className='w-[40%] sm:w-[25%] lg:w-[20%]'>
            <img src={Easy} alt="Easy" className='w-full aspect-4/3 object-contain' />
          </div>
          <div className='w-[40%] sm:w-[25%] lg:w-[20%]'>
            <img src={Swril} alt="Swril" className='w-full aspect-4/3 object-contain' />
          </div>
          <div className='w-[40%] sm:w-[25%] lg:w-[20%]'>
            <img src={Motive} alt="Motive" className='w-full aspect-4/3 object-contain' />
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className='flex justify-center text-center flex-col mt-12 sm:mt-15 lg:mt-15 px-4 sm:px-8 lg:px-20 relative'>
        <div className='w-[60%] sm:w-[40%] lg:w-[30%] absolute -top-20 sm:-top-40 lg:-top-55 left-4 sm:left-8 lg:left-10'>
          <img src={Logo} alt="Logo" className='w-full' />
        </div>
        <div className='mt-16 sm:mt-20 lg:mt-24'>
          <h1 className='text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6'>Join Growvy's 50M+ Job Seeker Community & Get Hired Faster!</h1>
          <p className='text-lg sm:text-xl lg:text-3xl leading-relaxed mb-6 lg:mb-8'>"Build your profile, get noticed by top employers, and access exclusive job opportunities tailored to your skills. Your next career move starts here!"</p>
          <div className='flex justify-center'>
            <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 rounded-2xl text-white font-bold mt-4 hover:bg-green-600 transition-colors duration-300'>Sign in</button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='flex flex-col lg:flex-row justify-center items-center mt-12 sm:mt-16 lg:mt-20 gap-8 lg:gap-15'>
        {/* First Testimonial */}
        <div className='relative w-full lg:w-[30%]'>
          <div className='w-[90px]  lg:w-[30%] absolute -top-8 sm:-top-12 lg:-top-14 -left-4 sm:-left-8 lg:-left-10'>
            <img src={User} alt="User" className='w-full' />
          </div>
          <div className='box w-full h-[150px] sm:h-[180px] lg:h-[200px] text-center bg-white rounded-lg shadow-lg border p-4 sm:p-6'>
            <h1 className='text-lg sm:text-xl lg:text-2xl px-2 sm:px-4 lg:px-6 py-4 sm:py-6 leading-relaxed'>Excellent Experience with growvy.</h1>
            <div className='flex gap-1 sm:gap-2 px-6 sm:px-8 lg:px-12 justify-center'>
              <span className='text-yellow-500 text-2xl sm:text-3xl lg:text-4xl'><TbStarFilled /></span>
              <span className='text-yellow-500 text-2xl sm:text-3xl lg:text-4xl'><TbStarFilled /></span>
              <span className='text-yellow-500 text-2xl sm:text-3xl lg:text-4xl'><TbStarFilled /></span>
              <span className='text-yellow-500 text-2xl sm:text-3xl lg:text-4xl'><TbStarFilled /></span>
              <span className='text-yellow-500 text-2xl sm:text-3xl lg:text-4xl'><TbStarFilled /></span>
            </div>
          </div>
        </div>

        {/* Second Testimonial */}
        <div className='relative w-full lg:w-[30%]'>
          <div className='w-[90px]  lg:w-[30%] absolute -top-8 sm:-top-12 lg:-top-14 -left-4 sm:-left-8 lg:-left-10'>
            <img src={User} alt="User" className='w-full' />
          </div>
          <div className='box w-full h-[150px] sm:h-[180px] lg:h-[200px] text-center bg-white rounded-lg shadow-lg border p-4 sm:p-6'>
            <h1 className='text-lg sm:text-xl lg:text-2xl px-2 sm:px-4 lg:px-6 py-4 sm:py-6 leading-relaxed'>Excellent Experience with growvy.</h1>
            <div className='flex gap-1 sm:gap-2 px-6 sm:px-8 lg:px-12 justify-center'>
              <span className='text-yellow-500 text-2xl sm:text-3xl lg:text-4xl'><TbStarFilled /></span>
              <span className='text-yellow-500 text-2xl sm:text-3xl lg:text-4xl'><TbStarFilled /></span>
              <span className='text-yellow-500 text-2xl sm:text-3xl lg:text-4xl'><TbStarFilled /></span>
              <span className='text-yellow-500 text-2xl sm:text-3xl lg:text-4xl'><TbStarFilled /></span>
              <span className='text-yellow-500 text-2xl sm:text-3xl lg:text-4xl'><TbStarFilled /></span>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Section */}
      <div className='flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 mt-8 sm:mt-10 lg:mt-10'>
        <div className='w-[8px] sm:w-[12px] lg:w-[15px] h-[8px] sm:h-[12px] lg:h-[15px] bg-green-600 rounded-full'></div>
        <div className='w-[10px] sm:w-[15px] lg:w-[20px] h-[10px] sm:h-[15px] lg:h-[20px] bg-green-600 rounded-full'></div>
        <div className='w-[12px] sm:w-[18px] lg:w-[25px] h-[12px] sm:h-[18px] lg:h-[25px] bg-green-600 rounded-full'></div>
        <div className='w-[14px] sm:w-[22px] lg:w-[30px] h-[14px] sm:h-[22px] lg:h-[30px] bg-green-600 rounded-full'></div>
        <div className='w-[16px] sm:w-[25px] lg:w-[35px] h-[16px] sm:h-[25px] lg:h-[35px] bg-green-600 rounded-full'></div>
        <div className='w-[18px] sm:w-[28px] lg:w-[40px] h-[18px] sm:h-[28px] lg:h-[40px] bg-green-600 rounded-full'></div>
        <div className='w-[16px] sm:w-[25px] lg:w-[35px] h-[16px] sm:h-[25px] lg:h-[35px] bg-green-600 rounded-full'></div>
        <div className='w-[14px] sm:w-[22px] lg:w-[30px] h-[14px] sm:h-[22px] lg:h-[30px] bg-green-600 rounded-full'></div>
        <div className='w-[12px] sm:w-[18px] lg:w-[25px] h-[12px] sm:h-[18px] lg:h-[25px] bg-green-600 rounded-full'></div>
        <div className='w-[10px] sm:w-[15px] lg:w-[20px] h-[10px] sm:h-[15px] lg:h-[20px] bg-green-600 rounded-full'></div>
        <div className='w-[8px] sm:w-[12px] lg:w-[15px] h-[8px] sm:h-[12px] lg:h-[15px] bg-green-600 rounded-full'></div>
      </div>

      {/* Path Section */}
      <div className='flex justify-center items-center mt-8 lg:mt-12'>
        <div className='w-full max-w-4xl'>
          <img src={Path} alt="Path" className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default Success
