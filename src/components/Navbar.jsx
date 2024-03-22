import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='flex flex-row  items-center justify-evenly bg-black h-14'>
            <ul className='  font-bold  text-xl text-white'>
                <Link to="/">
                 Home
                </Link>
               
            </ul>
            <ul className='  font-bold  text-xl text-white'>
                <Link to="/recipe">
                    Recipes
                </Link>
            </ul>
            <ul  className='  font-bold  text-xl text-white'>
                <Link to="About-us">
                 About us
                </Link>
            </ul>
        </ul>
    </div>
  )
}

export default Navbar;