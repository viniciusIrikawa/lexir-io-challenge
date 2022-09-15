import React, { useState } from 'react'
import Link from 'next/link'
import Cart from './Cart'

const Header = () => {

  const [user, setUser] = useState('John Doe')  

  return (
    // <header className='w-full border-b-4 py-7 px-12 md:flex md:justify-between items-center relative'></header>
    <header className='w-full border-b-4 py-2 md:py-7 px-4 md:px-12 flex flex-row justify-between items-center relative'>
        <button className='md:hidden focus:outline-none'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <div className=''>
            <Link href={"/"}> 
                <a className='text-2xl md:text-5xl font-serif ml-10 md:ml-0'> Nice Beer </a>
            </Link>
        </div>
            <ul className='hidden flex justify-around uppercase md:flex md:flex-row flex-col items-center'>
                <li className='md:mx-5 my-1'>
                    <Link href={''}>
                        <a> products </a>
                    </Link>
                </li>
                <li className='md:mx-5 my-1'>
                    <Link href={''}>
                        <a> brands </a>
                    </Link>
                </li>
                <li className='md:mx-5 my-1'>
                    <Link href={''}>
                        <a> hello, <span className='font-bold'> {user} </span> </a>
                    </Link>
                </li>
                <Cart/>    
            </ul>
        <div className='cartMobile md:hidden uppercase'>
            <Cart/>    
        </div>
    </header>
  )
}

export default Header