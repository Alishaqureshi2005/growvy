import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative px-4 sm:px-6 lg:px-8 py-4">
      {/* Mobile menu button */}
      <div className="flex  lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center">
        <ul className='flex text-lg xl:text-xl gap-4 xl:gap-6 border-2 rounded-2xl underline px-8 xl:px-20 py-3 xl:py-4 bg-white shadow-lg'>
            <li><NavLink to="/" className="hover:text-green-500 transition-colors duration-300"><b>Home</b></NavLink></li>
            <li><NavLink to="/Jobs" className="hover:text-green-500 transition-colors duration-300"><b>Jobs</b></NavLink></li>
            <li><NavLink to="/success" className="hover:text-green-500 transition-colors duration-300"><b>Success</b></NavLink></li>
            <li><NavLink to="/Service" className="hover:text-green-500 transition-colors duration-300"><b>Services</b></NavLink></li>
            <li><NavLink to="/Pricing" className="hover:text-green-500 transition-colors duration-300"><b>Pricing</b></NavLink></li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className='flex flex-col text-lg gap-4 border-2 rounded-2xl underline px-6 py-4 bg-white shadow-lg'>
              <li><NavLink to="/" onClick={toggleMenu} className="hover:text-green-500 transition-colors duration-300"><b>Home</b></NavLink></li>
              <li><NavLink to="/Jobs" onClick={toggleMenu} className="hover:text-green-500 transition-colors duration-300"><b>Jobs</b></NavLink></li>
              <li><NavLink to="/success" onClick={toggleMenu} className="hover:text-green-500 transition-colors duration-300"><b>Success</b></NavLink></li>
              <li><NavLink to="/Service" onClick={toggleMenu} className="hover:text-green-500 transition-colors duration-300"><b>Services</b></NavLink></li>
              <li><NavLink to="/Pricing" onClick={toggleMenu} className="hover:text-green-500 transition-colors duration-300"><b>Pricing</b></NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
