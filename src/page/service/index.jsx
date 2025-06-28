import React from 'react'
// import Navbar from '../../component/navbar'
import Connect from '../../media/connect.png'
import Q from '../../media/q.png'
import Check from '../../media/check.png'
import Ecb from '../../media/ecommb.png'
import Growy from '../../media/growy.png'
import Hiring from '../../media/hiring.svg'
import Ecommerce from '../../media/e-commerce.svg'
import Business from '../../media/busines.svg'
import Servicecard from '../../component/servicecard'

const Service = () => {
  let box = [
    {
      imgurl:Hiring,
      tittle:"Hiring",
      prag:"Access a vast talent pool to hire the right candidates quickly and affordably"
    },
      {
      imgurl:Ecommerce,
      tittle:"E-commerce",
      prag:"Access a vast talent pool to hire the right candidates quickly and affordably"
    },
      {
      imgurl:Business,
      tittle:"Business",
      prag:"Access a vast talent pool to hire the right candidates quickly and affordably"
    },
  ]
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      {/* 1st Hero Section */}
      <div className='flex flex-col justify-center text-center items-center rounded-b-[50px] sm:rounded-b-[100px] lg:rounded-b-[150px] mb-4 bg-blue-200 h-[200px] sm:h-[250px] lg:h-[300px] py-4 mt-6 sm:mt-8 lg:mt-10'>
        <div className='px-4 sm:px-8 lg:px-26'>
          <h1 className='text-3xl sm:text-4xl lg:text-6xl font-[Roboto-Bold] mb-4'>Service</h1>
          <q className='text-sm sm:text-lg lg:text-2xl leading-relaxed'>At Growvy, we provide innovative, cost-effective solutions to help businesses and professionals thrive.</q>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className='flex flex-col  md:flex-wrap md:gap-18 sm:flex-row gap-6 lg:gap-8 justify-center text-center mt-12 sm:mt-16 lg:mt-20'>
        {box.map((v,k)=>{
          return(
            <Servicecard imgurl={v.imgurl} tittle={v.tittle} prag={v.prag} key={k} />
          )
        })}
      </div>

      {/* Pricing CTA Section */}
      <div className='mt-12 sm:mt-16 lg:mt-20'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-2xl sm:text-4xl lg:text-6xl font-[Roboto-Bold] text-center px-4'>Join over 10k users worldwide</h1>
          <button className='bg-green-500 w-full sm:w-[60%] lg:w-[20%] px-6 py-3 lg:py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>View Pricing</button>
        </div>
      </div>

      {/* Problems in Hiring Section */}
      <div className='mt-12 sm:mt-16 lg:mt-20'>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 mt-10 justify-center items-center'> 
          <div className='w-full lg:w-[40%] text-center lg:text-left'>
            <h1 className='text-2xl sm:text-4xl lg:text-6xl font-[Roboto-Bold] mb-4'>Problems in Hiring</h1>
            <p className='text-sm sm:text-lg lg:text-2xl lg:pr-10 leading-relaxed'>Companies spend high $$$ budgets on job portals like Indeed and LinkedIn, only to receive low-quality CVs and irrelevant applicants, making hiring slow and inefficient.</p>
          </div>
          <div className='w-full lg:w-[40%] flex justify-center'>
            <img src={Q} alt="Problems" className='w-full max-w-md lg:max-w-none' />
          </div>
        </div>

        {/* With Growvy Solution Section */}
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center mt-12 lg:mt-16'>
          <div className='w-full lg:w-[40%] flex justify-center order-2 lg:order-1'>
            <img src={Check} alt="Solution" className='w-full max-w-md lg:max-w-none' />
          </div>
          <div className='w-full lg:w-[40%] text-center lg:text-left order-1 lg:order-2'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-[Roboto-Bold] mb-4'>With Growvy Solution</h1>
            <p className='text-sm sm:text-lg lg:text-2xl leading-relaxed mb-6'>With Growvy, businesses can access a database of active job seekers who have recently joined for job search. Use advanced filters to find the right candidates quickly and at a fraction of the cost—no wasted budget, just quality hires!</p>
            <div className='flex justify-center lg:justify-end'>
              <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 rounded-2xl text-white font-[Roboto-Bold] hover:bg-green-600 transition-colors duration-300'>Start Now</button>
            </div>  
          </div>
        </div>

        {/* E-commerce Businesses Section */}
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-30 justify-center items-center mt-12 lg:mt-16'>
          <div className='w-full lg:w-[40%] text-center lg:text-left'>
            <h1 className='text-2xl sm:text-4xl lg:text-6xl font-[Roboto-Bold] mb-4'>E-commerce Businesses</h1>
            <p className='text-sm sm:text-lg lg:text-3xl leading-relaxed'>E-commerce businesses struggle with high marketing costs, inefficient operations, and slow growth, making it difficult to scale and maximize profits.</p>
          </div>
          <div className='w-full lg:w-[40%] flex justify-center'>
            <img src={Ecb} alt="E-commerce" className='w-full max-w-md lg:max-w-none' />
          </div>
        </div>

        {/* E-commerce Solution Section */}
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center mt-12 lg:mt-16'>
          <div className='w-full lg:w-[40%] flex justify-center order-2 lg:order-1'>
            <img src={Growy} alt="Growvy Solution" className='w-full max-w-md lg:max-w-none' />
          </div>
          <div className='w-full lg:w-[40%] text-center lg:text-left order-1 lg:order-2'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-[Roboto-Bold] mb-4'>With Growvy Solution</h1>
            <p className='text-sm sm:text-lg lg:text-2xl leading-relaxed mb-6'>Growvy helps e-commerce businesses streamline operations, manage assets, and implement smart growth strategies to boost sales and efficiency—all at a low cost with proven results.</p>
            <div className='flex justify-center lg:justify-end'>
              <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 rounded-2xl text-white font-[Roboto-Bold] hover:bg-green-600 transition-colors duration-300'>Start Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Call Section */}
      <div className='px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row justify-end items-end gap-8 lg:gap-15 mt-12 lg:mt-10 mb-10 lg:mb-10'>
        <div className='w-full lg:w-[45%] flex justify-center lg:justify-start order-2 lg:order-1'>
          <img src={Connect} alt="Connect" className='w-full max-w-md lg:max-w-none' />
        </div>
        <div className='w-full lg:w-[45%] flex flex-col mb-8 lg:mb-25 text-center lg:text-left order-1 lg:order-2'>
          <div className='flex justify-center lg:justify-start mb-4'>
            <button className='bg-green-500 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 rounded-2xl text-white font-[Roboto-Bold] hover:bg-green-600 transition-colors duration-300'>Schedule Call Now</button>
          </div>
          <h1 className='text-lg sm:text-xl lg:text-3xl lg:pr-12 leading-relaxed'>Join over 10k users worldwide. Start scheduling in less than 1 minutes.</h1>
        </div>
      </div>
    </div>
  )
}

export default Service
