import React from 'react'
import Fb from '../../media/facebook (1).png'
import Navbar from '../../component/navbar'
import Path from '../../media/path.png'
import Connect from '../../media/connect.png'
import Ecommerce from '../../media/e-commerce.png'
import Growvy from '../../media/growvy.png'
import Seeker from '../../media/seeker.png'
import Empolyer from '../../media/employer.png'
import Busines from '../../media/busines.svg'

const Home = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-10'>
      {/* 1st Hero Section */}
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-4 mt-6 sm:mt-8 lg:mt-10'>
        <div className='flex flex-col w-full lg:w-[55%] space-y-4 lg:space-y-6'>
          <div className='leading-tight lg:leading-18'>
            <h1 className='text-3xl sm:text-5xl lg:text-[70px] font-[Roboto-Bold] leading-tight'>Maximize &nbsp; &nbsp; business efficiency</h1>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-green-500 font-[Roboto-Bold] text-center  w-full lg:w-[60%] mt-2'>With</h1>
            <h1 className='text-4xl sm:text-6xl lg:text-8xl font-[Roboto-Bold] text-green-500 text-center lg:text-left'>Growvy</h1>
            <p className='text-lg sm:text-xl lg:text-2xl w-full lg:w-[50%] mt-4 lg:mt-6 text-center lg:text-left'>Scale your company with tailored strategies, market insights, and expert consulting</p>
          </div>
          <div className='flex justify-center lg:justify-start'>
            <button className='bg-green-500 w-full sm:w-[60%] lg:w-[30%] px-4 py-3 lg:px-2 lg:py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Start Today</button>
          </div>
        </div>
        <div className='w-full lg:w-[40%] mt-6 lg:mt-10 flex justify-center lg:justify-end'>
          <img src={Growvy} alt="Growvy" className='w-full max-w-md lg:max-w-none' />
        </div>
      </div>

      {/* 2nd Quote Section */}
      <div className='flex flex-col items-center mt-12 sm:mt-16 lg:mt-20'>
        <div className='flex w-full justify-end pr-4 sm:pr-8 lg:pr-30 mb-4'>
          <button className='bg-green-500 rounded-2xl w-[30%] sm:w-[25%] lg:w-[20%] h-2 sm:h-3'></button>
        </div>
        <q className='text-md sm:text-md lg:text-2xl text-center w-full lg:w-[90%] px-4 sm:px-8 lg:px-22 leading-relaxed'>Growvy is built to streamline hiring, optimize assets, and drive business growth. Our mission is to create a tech-driven ecosystem where companies hire smarter, manage resources efficiently, and scale effortlessly. Whether you're seeking top talent, asset solutions, or business expansion, Growvy is your trusted partner in success.</q>
      </div>

      {/* 3rd Job Seeker Section */}
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 mt-10 lg:mt-10 justify-center items-center'>
        <div className='w-full lg:w-[40%] text-center lg:text-left'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-[Roboto-Bold] mb-4'>I'm a Job Seeker!</h1>
          <p className='text-lg sm:text-xl lg:text-2xl w-full lg:w-[70%] mb-4'>Looking for job according to my skills and requirements.</p>
          <div className='flex justify-center lg:justify-start'>
            <button className='bg-green-500 text-lg sm:text-xl py-2 px-6 w-full sm:w-[60%] lg:w-[30%] rounded-full text-white font-bold hover:bg-green-600 transition-colors duration-300'>Job</button>
          </div>
        </div>
        <div className='w-full lg:w-[40%] flex justify-center'>
          <img src={Seeker} alt="Job Seeker" className='w-full max-w-md lg:max-w-none aspect-4/2 object-cover' />
        </div>
      </div>

      {/* 4th Employer Section */}
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center mt-12 lg:mt-16'>
        <div className='w-full lg:w-[40%] flex justify-center order-2 lg:order-1'>
          <img src={Empolyer} alt="Employer" className='w-full max-w-md lg:max-w-none' />
        </div>
        <div className='w-full lg:w-[40%] text-center lg:text-left order-1 lg:order-2'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-[Roboto-Bold] mb-4'>I'm an Employer!</h1>
          <p className='text-lg sm:text-xl lg:text-2xl w-full lg:w-[70%] mb-4'>Looking for talented candidates for my company.</p>
          <div className='flex justify-center lg:justify-start'>
            <button className='bg-green-500 text-lg sm:text-xl py-2 px-6 w-full sm:w-[60%] lg:w-[40%] rounded-full text-white font-bold hover:bg-green-600 transition-colors duration-300'>Post a Job</button>
          </div>
        </div>
      </div>

      {/* 5th E-commerce Section */}
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 mt-12 lg:mt-16'>
        <div className='w-full lg:w-[40%] text-center lg:text-left'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-[Roboto-Bold] mb-4'>I'm an E-commerce Store!</h1>
          <p className='text-lg sm:text-xl lg:text-2xl mb-4'>Looking for potential sales data for sales campaign.</p>
          <div className='flex justify-center lg:justify-start'>
            <button className='bg-green-500 text-lg sm:text-xl mt-2 w-full sm:w-[60%] lg:w-[40%] rounded-full py-2 px-6 text-white font-bold hover:bg-green-600 transition-colors duration-300'>Sales Data</button>
          </div>
        </div>
        <div className='w-full lg:w-[40%] flex justify-center'>
          <div className='w-full max-w-md lg:max-w-none h-64 bg-gray-200 rounded-lg flex items-center justify-center'>
            <img src={Ecommerce} alt="" className='w-full' />
          </div>
        </div>
      </div>

      {/* 6th Business Section */}
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 mt-12 lg:mt-16'>
        <div className='w-full lg:w-[40%] flex justify-center order-2 lg:order-1'>
          <div className='w-full max-w-md lg:max-w-none h-64 bg-gray-200 rounded-lg flex items-center justify-center'>
            <img src={Busines} alt="" className='w-full ' />
          </div>
        </div>
        <div className='w-full lg:w-[40%] text-center lg:text-left order-1 lg:order-2'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-[Roboto-Bold] mb-4'>I'm Business!</h1>
          <p className='text-lg sm:text-xl lg:text-3xl mb-4'>Looking for CRM or Data resources to boost my business.</p>
          <div className='flex justify-center lg:justify-start'>
            <button className='bg-green-500 text-lg sm:text-xl w-full sm:w-[60%] lg:w-[40%] mt-2 py-2 px-6 rounded-full text-white font-bold hover:bg-green-600 transition-colors duration-300'>Business Plans</button>
          </div>
        </div>
      </div>

      {/* 7th Community Section */}
      <div className='flex justify-center text-center flex-col p-4 sm:p-6 lg:p-8 gap-4 lg:gap-6 mt-10 lg:mt-16'>
        <h1 className='text-2xl sm:text-3xl lg:text-7xl font-[Roboto-Bold] leading-tight'>Join Growvy's 50M+ Job Seeker Community & Get Hired Faster!</h1>
        <p className='text-md sm:text-xl lg:text-2xl px-4 sm:px-8 lg:px-20 leading-relaxed'>"Build your profile, get noticed by top employers, and access exclusive job opportunities tailored to your skills. Your next career move starts here!"</p>
        <div className='flex justify-center'>
          <button className='bg-green-500 w-full sm:w-[40%] lg:w-[14%] px-6 py-3 lg:py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Signin</button>
        </div>
      </div>

      {/* 8th Path Section */}
      <div className='flex justify-center items-center mt-8 lg:mt-12'>
        <div className='w-full max-w-4xl'>
          <img src={Path} alt="Path" className='w-full' />
        </div>
      </div>

      {/* 9th E-commerce Owner Section */}
      <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-3 mt-12 lg:mt-16'>
        <div className='w-full lg:w-[45%] space-y-4 text-center lg:text-left'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-[Roboto-Bold]'>E-commerce Owner?</h1>
          <p className='text-md sm:text-xl w-full lg:w-[70%] lg:pr-10 leading-relaxed'>Optimize your business with smart asset management, growth strategies, and cutting-edge solutions to boost sales and efficiency with Growvy!</p>
          <div className='flex justify-center lg:justify-start'>
            <button className='bg-green-500 w-full sm:w-[60%] lg:w-[30%] px-6 py-3 lg:py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Plans</button>
          </div>
        </div>
        <div className='w-full lg:w-[35%] flex justify-center'>
          <img src={Ecommerce} alt="E-commerce" className='w-full max-w-md lg:max-w-none' />
        </div>
      </div>

      {/* 10th Schedule Call Section */}
      <div className='px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row justify-end items-end gap-8 lg:gap-15 mb-10 lg:mb-20 mt-12 lg:mt-16'>
        <div className='w-full lg:w-[45%] flex justify-center lg:justify-start order-2 lg:order-1'>
          <img src={Connect} alt="Connect" className='w-full max-w-md lg:max-w-none' />
        </div>
        <div className='w-full lg:w-[45%] flex flex-col mb-8 lg:mb-25 text-center lg:text-left order-1 lg:order-2'>
          <div className='flex justify-center lg:justify-start mb-4'>
            <button className='bg-green-500 text-base lg:text-lg w-full sm:w-[60%] lg:w-[50%] h-[40px] rounded-2xl text-white font-[Roboto-Bold] hover:bg-green-600 transition-colors duration-300'>Schedule Call Now</button>
          </div>
          <h1 className='text-xl sm:text-2xl lg:text-3xl lg:pr-8 leading-relaxed'>Join over 10k users worldwide. Start scheduling in less than 1 minutes.</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
