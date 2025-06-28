import React from 'react'
import Path from '../../media/path.png'
import Seeker from '../../media/seeker.png'

const Job = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      {/* Hero Section */}
      <div className='flex flex-col justify-center text-center bg-blue-200 rounded-b-[50px] sm:rounded-b-[75px] lg:rounded-b-full h-[150px] sm:h-[180px] lg:h-[200px] mt-6 sm:mt-8 lg:mt-10 py-4 px-4 sm:px-8 lg:px-16'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-[Roboto-Bold] mb-2 lg:mb-4'>Job</h1>
        <q className='text-sm sm:text-lg lg:text-2xl leading-relaxed'>Join our team and shape the future—explore exciting career opportunities today!</q>
      </div>

      {/* Job Categories Section */}
      <div className='mt-8 sm:mt-10 lg:mt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 py-4 px-4 sm:px-8 lg:px-20'>
          <div className='border-2 rounded-2xl text-center px-4 sm:px-6 py-3 sm:py-4 hover:border-green-500 transition-colors duration-300 cursor-pointer'>
            <h1 className='text-lg sm:text-xl lg:text-2xl font-bold'>Tech</h1>
          </div>
          <div className='border-2 rounded-2xl text-center px-4 sm:px-6 py-3 sm:py-4 hover:border-green-500 transition-colors duration-300 cursor-pointer'>
            <h1 className='text-lg sm:text-xl lg:text-2xl font-bold'>Management</h1>
          </div>
          <div className='border-2 rounded-2xl text-center px-4 sm:px-6 py-3 sm:py-4 hover:border-green-500 transition-colors duration-300 cursor-pointer'>
            <h1 className='text-lg sm:text-xl lg:text-2xl font-bold'>Human Resource</h1>
          </div>
          <div className='border-2 rounded-2xl text-center px-4 sm:px-6 py-3 sm:py-4 hover:border-green-500 transition-colors duration-300 cursor-pointer'>
            <h1 className='text-lg sm:text-xl lg:text-2xl font-bold'>Marketing & Sales</h1>
          </div>
          <div className='border-2 rounded-2xl text-center px-4 sm:px-6 py-3 sm:py-4 hover:border-green-500 transition-colors duration-300 cursor-pointer'>
            <h1 className='text-lg sm:text-xl lg:text-2xl font-bold'>Accounts & Finance</h1>
          </div>
          <div className='border-2 rounded-2xl text-center px-4 sm:px-6 py-3 sm:py-4 hover:border-green-500 transition-colors duration-300 cursor-pointer'>
            <h1 className='text-lg sm:text-xl lg:text-2xl font-bold'>Customer Service</h1>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className='flex justify-center text-center flex-col mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-8 lg:px-20'>
        <h1 className='text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6'>Join Growvy's 50M+ Job Seeker Community & Get Hired Faster!</h1>
        <p className='text-lg sm:text-xl lg:text-3xl leading-relaxed mb-6 lg:mb-8'>"Build your profile, get noticed by top employers, and access exclusive job opportunities tailored to your skills. Your next career move starts here!"</p>
        <div className='flex justify-center'>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Sign in</button>
        </div>
      </div>

      {/* Top Jobs Section */}
      <div className='space-y-3 sm:space-y-4 mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-8 lg:px-20'>
        <div className='text-center mb-6 lg:mb-8'>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-[Roboto-Bold]'>Top Jobs</h1>
        </div>
        
        {/* Job Listings */}
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Business Developer</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Finance Manager</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Human Resource Manager</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Software Engineer</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Web Developer</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Graphic Designer / Ui / Ux</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>SEO Expert</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Android Developer</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Floor Manager</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Sales Representative</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Data Entry Operator</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Delivery Man</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Urdu / English Call Center Agent</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Morning Shift Jobs for Females</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center border-2 rounded-2xl px-4 py-3 sm:py-4 hover:shadow-lg transition-shadow duration-300'>
          <h1 className='text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left'>Accountant</h1>
          <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Apply now</button>
        </div>
      </div>

      {/* Job Seeker Section */}
      <div className='flex flex-col lg:flex-row justify-center items-center mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-8 lg:px-20 gap-6 lg:gap-8'>
        <div className='w-full lg:w-[50%] space-y-4 lg:space-y-6 text-center lg:text-left'>
          <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold'>I'm a Job Seeker!</h1>
          <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>Looking for job according to my skills and requirements.</p>
          <div className='flex justify-center lg:justify-start'>
            <button className='bg-green-500 text-sm sm:text-base lg:text-lg w-full sm:w-[60%] lg:w-[30%] rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300 py-2'>Job</button>
          </div>
        </div>
        <div className='w-full lg:w-[40%] flex justify-center'>
          <img src={Seeker} alt="Job Seeker" className='w-full max-w-md lg:max-w-none' />
        </div>
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

export default Job
