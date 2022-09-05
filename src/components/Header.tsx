import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {

  const [user, setUser] = useState('John Doe')  

  return (
    <header className='w-full border-b-4 py-7 px-12 md:flex md:justify-between items-center'>
        <div className='flex justify-center md:mb-0 mb-5'>
            <Link href={"/"}> 
                <a className='text-5xl font-serif'> Nice Beer </a>
            </Link>
        </div>
        <div>
            <ul className='flex justify-around uppercase md:flex md:flex-row flex-col items-center'>
                <li className='md:mx-5 md:my-0 my-1'>
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
                <li className='md:mx-5 my-1 flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <Link href={''}>
                        <span> cart </span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header