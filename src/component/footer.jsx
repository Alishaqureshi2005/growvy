import React from 'react'
import Facebook from '../media/facebook (1).png'
import Instagram from '../media/instagram (2).png'
import Linkedin from '../media/linkedin.png'
import { Link } from 'react-router-dom'
import { CiStar } from 'react-icons/ci'
import Trend from '../media/trend.png'

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row px-4 sm:px-8 lg:px-20 py-8 lg:py-12 bg-gray-50'>
        {/* First Section - Logo and Description */}
        <div className='w-full lg:w-[25%] mb-8 lg:mb-0'>
          <div className='w-full space-y-4'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'><b>Growvy</b></h1>
            <p className='text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed'>Optimize your business with smart asset management, growth strategies and cutting edge solutions to boost sales efficiency with growvy!</p>
            <div className='flex gap-3 sm:gap-4'>
              <div className='w-[12%] sm:w-[15%]'><img src={Facebook} alt="Facebook" className='w-full hover:opacity-80 transition-opacity duration-300' /></div>
              <div className='w-[12%] sm:w-[15%]'><img src={Instagram} alt="Instagram" className='w-full hover:opacity-80 transition-opacity duration-300' /></div>
              <div className='w-[12%] sm:w-[15%]'><img src={Linkedin} alt="LinkedIn" className='w-full hover:opacity-80 transition-opacity duration-300' /></div>
            </div>
          </div>
        </div>

        {/* Second Section - Links and Stars */}
        <div className='w-full lg:w-[50%] px-4 lg:px-20 py-6 lg:py-10 flex flex-col gap-2 lg:items-center items-start '>
          <ul className='font-bold list-disc text-sm sm:text-base space-y-2 mb-6 lg:mb-0'>
            <li><Link className="hover:text-green-500 transition-colors duration-300">About us</Link></li>
            <li><Link className="hover:text-green-500 transition-colors duration-300">Services</Link></li>
            <li><Link className="hover:text-green-500 transition-colors duration-300">Plans & Pricing</Link></li>
            <li><Link className="hover:text-green-500 transition-colors duration-300">Business Solution</Link></li>
            <li><Link className="hover:text-green-500 transition-colors duration-300">Success Stories</Link></li>
            <li><Link className="hover:text-green-500 transition-colors duration-300">Jobs</Link></li>
          </ul>
          
          <div className='flex gap-1 sm:gap-2'>
            <span className='text-green-500 text-2xl sm:text-3xl lg:text-4xl'><CiStar/></span>
            <span className='text-green-500 text-2xl sm:text-3xl lg:text-4xl'><CiStar/></span>
            <span className='text-green-500 text-2xl sm:text-3xl lg:text-4xl'><CiStar/></span>
            <span className='text-green-500 text-2xl sm:text-3xl lg:text-4xl'><CiStar/></span>
            <span className='text-green-500 text-2xl sm:text-3xl lg:text-4xl'><CiStar/></span>
          </div>
        </div>
        
        {/* Third Section - Image */}
        <div className='w-full lg:w-[25%] flex justify-center lg:justify-end'>
          <div className='w-[60%] sm:w-[50%] lg:w-full max-w-[200px] lg:max-w-none'>
            <img src={Trend} alt="Trend" className='w-full' />
          </div>
        </div>
    </div>
  )
}

export default Footer
