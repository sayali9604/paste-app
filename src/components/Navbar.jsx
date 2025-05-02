import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly'>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}
          aria-label="Go to Home page"
        >
            Home
        </NavLink>

        <NavLink
          to="/pastes"
          className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}
          aria-label="Go to Pastes page"
        >
            Pastes
        </NavLink>
    </div>
  )
}

export default Navbar
