import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { ProductContext } from 'src/Context/ContextProducts'

const Header = () => {

  const [user, setUser] = useState('John Doe')  
  const {cartItems} = useContext(ProductContext);

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
                <li className='md:mx-5 my-1 flex items-center'>
                    <div className='mx-2 p-2 relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span className='counterItems bg-red-500 absolute -top-0.5 -right-1 rounded-full w-6 text-center text-[#fff] font-bold'> {cartItems.length} </span>
                    </div>

                    <Link href={''}>
                        <a> cart </a>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header