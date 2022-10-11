import React, { useState } from 'react'
import Link from 'next/link'
import Cart from './Cart'

const Header = () => {

  const [user, setUser] = useState('John Doe')  

  return (
    <header className='w-full border-b-4 py-2 md:py-7 px-4 md:px-12 flex flex-row justify-between items-center relative'>
        <button className='md:hidden focus:outline-none group'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <div className='fixed top-0 -left-full h-[100vh] w-8/12 bg-[#efefef] border z-10 opacity-0 group-focus:left-0 group-focus:opacity-100 transition-all duration-500'>
                <div className='mt-10 mb-5 pb-3 border-b-2 border-[#b2b2b2]'>
                    <Link href={"/"}> 
                        <a className='text-2xl md:text-5xl font-serif'> Nice Drink </a>
                    </Link>
                </div>
                <ul className='flex flex-col px-3 uppercase'>
                    <li className='md:mx-5 my-1 text-left py-2'>
                        <Link href={''}>
                            <a> hello, <span className='font-bold'> {user} </span> </a>
                        </Link>
                    </li>
                    <li className='md:mx-5 my-1 text-left flex justify-between py-2'>
                        <Link href={''}>
                            <a> products </a>
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>
                    <li className='md:mx-5 my-1 text-left flex justify-between py-2'>
                        <Link href={''}>
                            <a> brands </a>
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>
                </ul>
            </div>
        </button>

        <div className=''>
            <Link href={"/"}> 
                <a className='text-2xl md:text-5xl font-serif ml-10 md:ml-0'> Nice Drink </a>
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