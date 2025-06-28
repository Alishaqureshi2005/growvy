import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar'
import Footer from './component/footer'
import Home from './page/home'
import Service from './page/service'

import Success from './page/success'
import Pricing from './page/pricing.jsx'
import Job from './page/job'
// import Job from './page/job'
// import Pricing from './page/pricing'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Service" element={<Service/>} />
      <Route path="/Jobs" element={<Job/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
    </Routes>
    
     <Footer/> 
    </BrowserRouter>
  )
}

export default App
