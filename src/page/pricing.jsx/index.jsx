import React from 'react'
import Connect  from '../../media/connect.png'
import PlanCard from '../../component/planCard'
import Ecommerce from '../../media/e-commerce.png'
import Busines from '../../media/busines.svg'
import Hiring from '../../media/hiring.svg'

const Pricing = () => {
  let plans=[
    {
      plan:"Basic CV Service",
      description:"Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.",
      features:[
        {
          feature:"Service Cost",
          featrureList:["Price 30$ (9797 PKR) Discount 20$ (5600 PKR) Monthly"],
        },
        {
          feature:"benefits",
          featrureList:["Companies Can access the database with monthly 200 Searches","Manage Filters Like Skills, Cities, Experience etc","Live chat experts help"],
        },
      ]
    },
    {
      plan:"Basic CV Service",
      description:"Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.",
      features:[
        {
          feature:"Service Cost",
          featrureList:["Price 30$ (9797 PKR) Discount 20$ (5600 PKR) Monthly"],
        },
        {
          feature:"benefits",
          featrureList:["Companies Can access the database with monthly 200 Searches","Manage Filters Like Skills, Cities, Experience etc","Live chat experts help"],
        },
      ]
    },
    {
      plan:"Basic CV Service",
      description:"Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.",
      features:[
        {
          feature:"Service Cost",
          featrureList:["Price 30$ (9797 PKR) Discount 20$ (5600 PKR) Monthly"],
        },
        {
          feature:"benefits",
          featrureList:["Companies Can access the database with monthly 200 Searches","Manage Filters Like Skills, Cities, Experience etc","Live chat experts help"],
        },
      ]
    },
  ]
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      {/* Hero Section */}
      <div className='flex flex-col justify-center text-center bg-blue-200 rounded-b-[50px] sm:rounded-b-[75px] lg:rounded-b-full h-[150px] sm:h-[180px] lg:h-[200px] px-4 sm:px-8 lg:px-16'>
        <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lg:mb-4'>Pricing</h1>
        <q className='text-sm sm:text-lg lg:text-2xl leading-relaxed'>"Discover flexible pricing plans tailored to your needs—start growing with us today!"</q>
      </div>

      {/* 1st Plan Section - Recruitment Solution */}
      <section className='mt-8 sm:mt-12 lg:mt-16'>
        <div className='flex flex-col items-center space-y-6 lg:space-y-8'>
          <div className='w-full lg:w-[40%] flex justify-center'>
            <img src={Hiring} alt="Hiring" className='w-full max-w-xs lg:max-w-none' />
          </div>
          <div className='text-center items-center flex flex-col space-y-4'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Recruitment Solution</h1>
            <p className='text-sm sm:text-lg lg:text-xl w-full lg:w-[75%] leading-relaxed'>"Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!"</p>
            <div className='flex justify-center'>
              <button className='bg-[#03af08] text-sm sm:text-lg lg:text-xl px-8 sm:px-12 lg:px-16 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Plan</button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 p-4 sm:p-6 mt-8 lg:mt-12'>
          {plans.map((plan,index)=>(
            <PlanCard key={index} plan={plan.plan} description={plan.description} features={plan.features} />
          ))}
        </div>
      </section>

      {/* 2nd Plan Section - E-commerce Solutions */}
      <section className='mt-12 sm:mt-16 lg:mt-20'>
        <div className='flex flex-col items-center space-y-6 lg:space-y-8'>
          <div className='w-full lg:w-[40%] flex justify-center'>
            <img src={Ecommerce} alt="E-commerce" className='w-full max-w-md lg:max-w-none' />
          </div>
          <div className='text-center items-center flex flex-col space-y-4'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>E-commerce Solutions</h1>
            <p className='text-sm sm:text-lg lg:text-xl w-full lg:w-[75%] leading-relaxed'>"Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!"</p>
            <div className='flex justify-center'>
              <button className='bg-green-500 text-sm sm:text-lg lg:text-xl px-8 sm:px-12 lg:px-16 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Plan</button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 p-4 sm:p-6 mt-8 lg:mt-12'>
          {plans.map((plan,index)=>(
            <PlanCard key={index} plan={plan.plan} description={plan.description} features={plan.features} />
          ))}
        </div>
      </section>

      {/* 3rd Plan Section - Business Solutions */}
      <section className='mt-12 sm:mt-16 lg:mt-20'>
        <div className='flex flex-col items-center space-y-6 lg:space-y-8'>
          <div className='w-full lg:w-[40%] flex justify-center'>
            <img src={Busines} alt="Business" className='w-full max-w-xs lg:max-w-none' />
          </div>
          <div className='text-center items-center flex flex-col space-y-4'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Business Solutions</h1>
            <p className='text-sm sm:text-lg lg:text-xl w-full lg:w-[75%] leading-relaxed'>"Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!"</p>
            <div className='flex justify-center'>
              <button className='bg-green-500 text-sm sm:text-lg lg:text-xl px-8 sm:px-12 lg:px-16 py-2 rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300'>Plan</button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 p-4 sm:p-6 mt-8 lg:mt-12'>
          {plans.map((plan,index)=>(
            <PlanCard key={index} plan={plan.plan} description={plan.description} features={plan.features} />
          ))}
        </div>
      </section>

      {/* Schedule Call Section */}
      <div className='px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row justify-end items-end gap-8 lg:gap-15 mt-12 lg:mt-16 mb-10 lg:mb-20'>
        <div className='w-full lg:w-[45%] flex justify-center lg:justify-start order-2 lg:order-1'>
          <img src={Connect} alt="Connect" className='w-full max-w-md lg:max-w-none' />
        </div>
        <div className='w-full lg:w-[45%] flex flex-col mb-8 lg:mb-25 text-center lg:text-left order-1 lg:order-2'>
          <div className='flex justify-center lg:justify-start mb-4'>
            <button className='bg-green-500 text-sm sm:text-base lg:text-lg w-full sm:w-[60%] lg:w-[40%] rounded-2xl text-white font-bold hover:bg-green-600 transition-colors duration-300 py-2'>Schedule Call Now</button>
          </div>
          <h1 className='text-lg sm:text-xl lg:text-3xl lg:pr-12 leading-relaxed'>Join over 10k users worldwide. Start scheduling in less than 1 minutes.</h1>
        </div>
      </div>
    </div>
  )
}

export default Pricing
