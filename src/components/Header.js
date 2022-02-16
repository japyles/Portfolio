import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Header = () => {

  const [showMenu, setShowMenu] = useState('md:hidden')

  const menuItems = [
    {
      title: 'Home',
      key: '/'
    },
    {
      title: 'Projects',
      key: '/projects'
    },
    {
      title: 'Contact',
      key: '/contact'
    },
  ]

  const pathname = window.location.pathname

  return (
    <div className='text-white font-mont fixed top-0 left-0 right-0 z-50'>
      <div className={`flex bg-theme justify-between items-center p-2 shadow-lg ${showMenu === '' && 'md:flex-col'}`}>

        <div className='flex justify-between items-center mx-2 w-full'>
          <Link to='/'><h1 className='text-4xl font-semibold mx-5 my-2 hover:text-yellow-500 cursor-pointer'>JOHN | PYLES</h1></Link>

          <FaBars 
            className='lg:hidden xl:hidden 2xl:hidden mr-5 md:flex cursor-pointer'
            onClick={() => {showMenu === 'md:hidden' ? setShowMenu('') : setShowMenu('md:hidden')}}
          />

        </div>

        <div className='flex md:hidden'>
          {menuItems.map(item => {
            return (
              <li className={`list-none mx-5 ${item.key === pathname && 'bg-white text-black rounded-md px-5'}`}>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            ) 
          })}
        </div>

        <div className={`md-5 md:flex items-end justify-end w-full flex-col lg:hidden xl:hidden 2xl:hidden ${showMenu}`}>
          {menuItems.map(item => {
            return (
              <li className={`list-none my-2 px-5 py-1 ${item.key === pathname && 'bg-white text-black rounded-md'}`}>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            ) 
          })}
        </div>

      </div>
    </div>
  )
}

export default Header